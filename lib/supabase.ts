import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const schema = process.env.SUPABASE_SCHEMA || "nextquant";

// 익명 키 클라이언트 (공개 INSERT 전용 — RLS 정책으로 보호)
export const supabasePublic = createClient(url, anonKey, {
  db: { schema },
  auth: { persistSession: false },
});

// 서비스 롤 클라이언트 (서버 전용 — 모든 권한, RLS 우회)
export const supabaseAdmin = createClient(url, serviceKey, {
  db: { schema },
  auth: { persistSession: false },
});

export type Inquiry = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "new" | "in_progress" | "resolved";
  admin_note: string | null;
  created_at: string;
  updated_at: string;
};

export type Trade = {
  id: string;
  pair: string;
  side: "long" | "short";
  entry_price: number | null;
  exit_price: number | null;
  pnl_percent: number;
  traded_at: string;
  note: string | null;
  created_at: string;
};

export type PerformancePost = {
  id: string;
  title: string;
  posted_at: string;
  program_image: string | null;
  binance_image: string | null;
  note: string | null;
  created_at: string;
};

export type SiteSettings = {
  download_windows: string;
  download_version: string;
  youtube_live_url: string;
};

export const DEFAULT_SETTINGS: SiteSettings = {
  download_windows: "",
  download_version: "v2.0.0",
  youtube_live_url: "",
};

// settings 행 배열 → 객체로 변환
export function rowsToSettings(
  rows: { key: string; value: string }[] | null | undefined,
): SiteSettings {
  const s: SiteSettings = { ...DEFAULT_SETTINGS };
  (rows ?? []).forEach((r) => {
    if (r.key in s) {
      s[r.key as keyof SiteSettings] = r.value;
    }
  });
  return s;
}
