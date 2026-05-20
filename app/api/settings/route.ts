import { NextResponse } from "next/server";
import { supabaseAdmin, rowsToSettings, DEFAULT_SETTINGS } from "@/lib/supabase";
import { isAuthorized } from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_KEYS = Object.keys(DEFAULT_SETTINGS);

export async function GET() {
  if (!isAuthorized()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { data, error } = await supabaseAdmin
    .from("settings")
    .select("key, value");
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ settings: rowsToSettings(data) });
}

export async function PATCH(req: Request) {
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

  const updates = ALLOWED_KEYS.filter(
    (k) => typeof b[k] === "string",
  ).map((k) => ({
    key: k,
    value: (b[k] as string).slice(0, 500),
    updated_at: new Date().toISOString(),
  }));

  if (updates.length === 0) {
    return NextResponse.json(
      { error: "변경할 항목이 없습니다." },
      { status: 400 },
    );
  }

  const { error } = await supabaseAdmin
    .from("settings")
    .upsert(updates, { onConflict: "key" });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const { data } = await supabaseAdmin.from("settings").select("key, value");
  return NextResponse.json({ settings: rowsToSettings(data) });
}
