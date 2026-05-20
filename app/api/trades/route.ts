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
    .from("trades")
    .select("*")
    .order("traded_at", { ascending: false });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ items: data });
}

function parseNum(v: unknown): number | null {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
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
  const pair = typeof b.pair === "string" ? b.pair.trim() : "";
  const side = b.side === "short" ? "short" : "long";
  const pnl = parseNum(b.pnl_percent);

  if (!pair) {
    return NextResponse.json(
      { error: "종목(pair)을 입력해주세요." },
      { status: 400 },
    );
  }
  if (pnl === null) {
    return NextResponse.json(
      { error: "수익률을 숫자로 입력해주세요." },
      { status: 400 },
    );
  }

  const row = {
    pair: pair.slice(0, 40),
    side,
    entry_price: parseNum(b.entry_price),
    exit_price: parseNum(b.exit_price),
    pnl_percent: pnl,
    traded_at:
      typeof b.traded_at === "string" && b.traded_at
        ? new Date(b.traded_at).toISOString()
        : new Date().toISOString(),
    note: typeof b.note === "string" ? b.note.slice(0, 500) : null,
  };

  const { data, error } = await supabaseAdmin
    .from("trades")
    .insert(row)
    .select()
    .single();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ item: data });
}
