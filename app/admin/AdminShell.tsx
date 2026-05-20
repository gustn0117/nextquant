"use client";

import { useState } from "react";
import type { Inquiry, Trade, SiteSettings } from "@/lib/supabase";
import InquiriesTab from "./InquiriesTab";
import TradesTab from "./TradesTab";
import SettingsTab from "./SettingsTab";

type Tab = "inquiries" | "trades" | "settings";

export default function AdminShell({
  inquiries,
  trades,
  settings,
}: {
  inquiries: Inquiry[];
  trades: Trade[];
  settings: SiteSettings;
}) {
  const [tab, setTab] = useState<Tab>("inquiries");

  const newCount = inquiries.filter((i) => i.status === "new").length;

  const tabs: { key: Tab; label: string; badge?: number }[] = [
    { key: "inquiries", label: "문의 내역", badge: newCount || undefined },
    { key: "trades", label: "매매 내역" },
    { key: "settings", label: "다운로드 설정" },
  ];

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin";
  }

  return (
    <div className="min-h-screen bg-brand-bg">
      <header className="sticky top-0 z-20 border-b border-brand-line bg-white/85 backdrop-blur-xl">
        <div className="container-x flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo-brain.png"
              alt=""
              aria-hidden
              className="h-9 w-auto"
              draggable={false}
            />
            <div className="leading-none">
              <div className="text-[15px] font-extrabold tracking-[0.04em] text-brand-text">
                NEXT QUANT
              </div>
              <div className="mt-1 text-[10px] font-medium tracking-[0.22em] text-brand-muted">
                ADMIN CONSOLE
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="hidden text-sm font-semibold text-brand-subText hover:text-brand-primary sm:inline"
            >
              사이트로
            </a>
            <button
              type="button"
              onClick={logout}
              className="rounded-md border border-brand-line bg-white px-4 py-2 text-sm font-semibold text-brand-text hover:border-brand-primary hover:text-brand-primary"
            >
              로그아웃
            </button>
          </div>
        </div>

        {/* 탭 */}
        <div className="container-x flex gap-1 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={`relative shrink-0 px-4 py-3 text-sm font-semibold transition-colors ${
                tab === t.key
                  ? "text-brand-primary"
                  : "text-brand-subText hover:text-brand-text"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                {t.label}
                {t.badge ? (
                  <span className="inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-brand-primary px-1.5 text-[11px] font-bold text-white">
                    {t.badge}
                  </span>
                ) : null}
              </span>
              {tab === t.key && (
                <span className="absolute inset-x-3 -bottom-px h-[2px] rounded-full bg-brand-primary" />
              )}
            </button>
          ))}
        </div>
      </header>

      <main className="container-x py-10">
        {tab === "inquiries" && <InquiriesTab initialItems={inquiries} />}
        {tab === "trades" && <TradesTab initialItems={trades} />}
        {tab === "settings" && <SettingsTab initial={settings} />}
      </main>
    </div>
  );
}
