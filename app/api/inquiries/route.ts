import { NextResponse } from "next/server";
import { supabasePublic, supabaseAdmin } from "@/lib/supabase";
import { isAuthorized } from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// 공개 POST: 누구나 상담 신청 등록 (이름 + 연락처)
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const b = body as Record<string, unknown>;
  const name = typeof b.name === "string" ? b.name.trim() : "";
  const phone = (typeof b.phone === "string" ? b.phone : "").replace(
    /[^0-9]/g,
    "",
  );

  if (!name || !phone) {
    return NextResponse.json(
      { error: "이름과 연락처를 입력해 주세요." },
      { status: 400 },
    );
  }
  if (name.length > 80) {
    return NextResponse.json(
      { error: "입력 길이가 제한을 초과했습니다." },
      { status: 400 },
    );
  }
  if (phone.length < 9 || phone.length > 11) {
    return NextResponse.json(
      { error: "연락처를 정확히 입력해 주세요." },
      { status: 400 },
    );
  }

  const { error } = await supabasePublic.from("inquiries").insert({
    name,
    email: phone,
    subject: "상담 신청",
    message: `1:1 상담 신청\n연락처: ${phone}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}

// 어드민 GET: 전체 목록
export async function GET() {
  if (!isAuthorized()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { data, error } = await supabaseAdmin
    .from("inquiries")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ items: data });
}
