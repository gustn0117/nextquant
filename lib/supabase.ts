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
