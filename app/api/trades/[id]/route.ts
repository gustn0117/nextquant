import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { isAuthorized } from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function parseNum(v: unknown): number | null {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
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
  const update: Record<string, unknown> = {};

  if (typeof b.pair === "string") update.pair = b.pair.trim().slice(0, 40);
  if (b.side === "long" || b.side === "short") update.side = b.side;
  if ("entry_price" in b) update.entry_price = parseNum(b.entry_price);
  if ("exit_price" in b) update.exit_price = parseNum(b.exit_price);
  if ("pnl_percent" in b) {
    const p = parseNum(b.pnl_percent);
    if (p === null) {
      return NextResponse.json(
        { error: "수익률은 숫자여야 합니다." },
        { status: 400 },
      );
    }
    update.pnl_percent = p;
  }
  if (typeof b.traded_at === "string" && b.traded_at) {
    update.traded_at = new Date(b.traded_at).toISOString();
  }
  if ("note" in b) {
    update.note = typeof b.note === "string" ? b.note.slice(0, 500) : null;
  }
  if (Object.keys(update).length === 0) {
    return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from("trades")
    .update(update)
    .eq("id", params.id)
    .select()
    .single();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ item: data });
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } },
) {
  if (!isAuthorized()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { error } = await supabaseAdmin
    .from("trades")
    .delete()
    .eq("id", params.id);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
