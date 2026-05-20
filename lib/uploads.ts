import path from "path";

// 프로덕션: /app/data/uploads (docker-compose persistent-data 볼륨)
// 로컬: <프로젝트>/data/uploads
export const UPLOAD_DIR =
  process.env.UPLOAD_DIR || path.join(process.cwd(), "data", "uploads");

export const ALLOWED_IMAGE_TYPES: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
};

export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024; // 10MB

const EXT_CONTENT_TYPE: Record<string, string> = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  webp: "image/webp",
  gif: "image/gif",
};

export function contentTypeForFile(name: string): string {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  return EXT_CONTENT_TYPE[ext] ?? "application/octet-stream";
}

// path traversal 방지: 파일명만 허용
export function safeFileName(name: string): string | null {
  const base = path.basename(name);
  if (base !== name) return null;
  if (!/^[A-Za-z0-9._-]+$/.test(base)) return null;
  return base;
}
