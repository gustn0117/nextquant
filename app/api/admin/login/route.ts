import { NextResponse } from "next/server";
import { ADMIN_COOKIE, getAdminToken } from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const b = body as Record<string, unknown>;
  const password = typeof b.password === "string" ? b.password : "";

  const expected = process.env.ADMIN_PASSWORD || "1234";
  if (password !== expected) {
    // 무차별 대입 완화: 짧은 지연
    await new Promise((r) => setTimeout(r, 400));
    return NextResponse.json(
      { error: "비밀번호가 올바르지 않습니다." },
      { status: 401 },
    );
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, getAdminToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 8, // 8시간
  });
  return res;
}
