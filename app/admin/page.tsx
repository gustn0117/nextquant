import type { Metadata } from "next";
import { isAuthorized } from "@/lib/admin-auth";
import LoginForm from "./LoginForm";
import AdminShell from "./AdminShell";
import { supabaseAdmin, rowsToSettings } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "어드민 | 넥스트퀀트",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!isAuthorized()) {
    return <LoginForm />;
  }

  const [inquiriesRes, tradesRes, settingsRes] = await Promise.all([
    supabaseAdmin
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false }),
    supabaseAdmin
      .from("trades")
      .select("*")
      .order("traded_at", { ascending: false }),
    supabaseAdmin.from("settings").select("key, value"),
  ]);

  return (
    <AdminShell
      inquiries={inquiriesRes.data ?? []}
      trades={tradesRes.data ?? []}
      settings={rowsToSettings(settingsRes.data)}
    />
  );
}
