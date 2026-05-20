import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import {
  UPLOAD_DIR,
  contentTypeForFile,
  safeFileName,
  DOWNLOAD_EXT,
} from "@/lib/uploads";

export const runtime = "nodejs";

export async function GET(
  _req: Request,
  { params }: { params: { name: string } },
) {
  const name = safeFileName(params.name);
  if (!name) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  try {
    const buf = await readFile(path.join(UPLOAD_DIR, name));
    const ext = name.split(".").pop()?.toLowerCase() ?? "";
    const headers: Record<string, string> = {
      "Content-Type": contentTypeForFile(name),
      "Cache-Control": "public, max-age=31536000, immutable",
    };
    // 설치 파일은 브라우저가 바로 다운로드하도록 첨부 헤더 부여
    if (DOWNLOAD_EXT.has(ext)) {
      headers["Content-Disposition"] =
        `attachment; filename="NextQuant-Setup.${ext}"`;
    }
    return new NextResponse(new Uint8Array(buf), { status: 200, headers });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
