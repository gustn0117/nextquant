import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { isAuthorized } from "@/lib/admin-auth";
import {
  UPLOAD_DIR,
  ALLOWED_IMAGE_TYPES,
  MAX_UPLOAD_BYTES,
  ALLOWED_INSTALLER_EXT,
  MAX_INSTALLER_BYTES,
} from "@/lib/uploads";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  if (!isAuthorized()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json(
      { error: "잘못된 요청 형식입니다." },
      { status: 400 },
    );
  }

  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "파일이 없습니다." }, { status: 400 });
  }

  const kind = form.get("kind");
  let ext: string;

  if (kind === "installer") {
    // 설치 파일: 확장자 검증 + 50MB
    ext = file.name.split(".").pop()?.toLowerCase() ?? "";
    if (!ALLOWED_INSTALLER_EXT.has(ext)) {
      return NextResponse.json(
        { error: "설치 파일(EXE, MSI, ZIP)만 업로드할 수 있습니다." },
        { status: 400 },
      );
    }
    if (file.size > MAX_INSTALLER_BYTES) {
      return NextResponse.json(
        { error: "파일 크기는 50MB 이하만 가능합니다." },
        { status: 400 },
      );
    }
  } else {
    // 이미지: MIME 검증 + 10MB
    const imgExt = ALLOWED_IMAGE_TYPES[file.type];
    if (!imgExt) {
      return NextResponse.json(
        { error: "이미지 파일(PNG, JPG, WEBP, GIF)만 업로드할 수 있습니다." },
        { status: 400 },
      );
    }
    if (file.size > MAX_UPLOAD_BYTES) {
      return NextResponse.json(
        { error: "파일 크기는 10MB 이하만 가능합니다." },
        { status: 400 },
      );
    }
    ext = imgExt;
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${randomUUID()}.${ext}`;

  try {
    await mkdir(UPLOAD_DIR, { recursive: true });
    await writeFile(path.join(UPLOAD_DIR, filename), buffer);
  } catch {
    return NextResponse.json(
      { error: "파일 저장에 실패했습니다." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    url: `/api/uploads/${filename}`,
    name: file.name,
    size: file.size,
  });
}
