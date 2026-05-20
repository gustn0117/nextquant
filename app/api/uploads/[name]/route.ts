import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { UPLOAD_DIR, contentTypeForFile, safeFileName } from "@/lib/uploads";

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
    return new NextResponse(new Uint8Array(buf), {
      status: 200,
      headers: {
        "Content-Type": contentTypeForFile(name),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
