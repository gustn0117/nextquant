import { cookies } from "next/headers";

export const ADMIN_COOKIE = "nq_admin";

export function getAdminToken(): string {
  // 단순한 식별 토큰: 시크릿 + 비밀번호 해시. 운용용이 아닌 데모 수준.
  const secret = process.env.ADMIN_SESSION_SECRET || "fallback";
  return Buffer.from(`${secret}::ok`).toString("base64");
}

export function isAuthorized(): boolean {
  const c = cookies().get(ADMIN_COOKIE);
  if (!c) return false;
  return c.value === getAdminToken();
}
