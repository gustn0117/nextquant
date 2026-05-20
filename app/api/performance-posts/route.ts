import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { isAuthorized } from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  if (!isAuthorized()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { data, error } = await supabaseAdmin
    .from("performance_posts")
    .select("*")
    .order("posted_at", { ascending: false });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ items: data });
}

export async function POST(req: Request) {
  if (!isAuthorized()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const b = body as Record<string, unknown>;

  const str = (v: unknown) =>
    typeof v === "string" && v.trim() ? v.trim() : null;

  const postedAt =
    typeof b.posted_at === "string" && b.posted_at
      ? b.posted_at
      : new Date().toISOString().slice(0, 10);

  // 제목은 입력값이 있으면 사용, 없으면 게시일 기반으로 자동 생성
  let title = typeof b.title === "string" ? b.title.trim() : "";
  if (!title) {
    const d = new Date(postedAt);
    const pad = (n: number) => String(n).padStart(2, "0");
    title = `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(
      d.getDate(),
    )} 매매 결과`;
  }

  const row = {
    title: title.slice(0, 200),
    posted_at: postedAt,
    program_image: str(b.program_image),
    binance_image: str(b.binance_image),
    note: typeof b.note === "string" && b.note.trim() ? b.note.slice(0, 1000) : null,
  };

  if (!row.program_image && !row.binance_image) {
    return NextResponse.json(
      { error: "이미지를 최소 한 장 이상 업로드해주세요." },
      { status: 400 },
    );
  }

  const { data, error } = await supabaseAdmin
    .from("performance_posts")
    .insert(row)
    .select()
    .single();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ item: data });
}
