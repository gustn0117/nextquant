import type { Metadata } from "next";
import { isAuthorized } from "@/lib/admin-auth";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";
import { supabaseAdmin } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "어드민 | 넥스트퀀트",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!isAuthorized()) {
    return <LoginForm />;
  }

  const { data } = await supabaseAdmin
    .from("inquiries")
    .select("*")
    .order("created_at", { ascending: false });

  return <Dashboard initialItems={data ?? []} />;
}
