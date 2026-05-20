"use client";

import { useState } from "react";
import type { SiteSettings } from "@/lib/supabase";

export default function SettingsTab({
  initial,
}: {
  initial: SiteSettings;
}) {
  const [form, setForm] = useState<SiteSettings>(initial);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  function set<K extends keyof SiteSettings>(k: K, v: string) {
    setForm((p) => ({ ...p, [k]: v }));
  }

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    setSaving(true);
    try {
      const res = await fetch("/api/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        setMsg({ ok: false, text: j.error || "저장 실패" });
        return;
      }
      const j = (await res.json()) as { settings: SiteSettings };
      setForm(j.settings);
      setMsg({ ok: true, text: "다운로드 설정이 저장되었습니다." });
    } catch {
      setMsg({ ok: false, text: "네트워크 오류" });
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={save} className="mx-auto max-w-2xl">
      <div className="rounded-xl border border-brand-line bg-white p-6 shadow-soft md:p-8">
        <h3 className="text-lg font-extrabold text-brand-text">
          다운로드 링크 설정
        </h3>
        <p className="mt-1.5 text-sm text-brand-muted">
          여기서 설정한 링크가 ‘이용 방법’ 페이지의 Windows / macOS 다운로드
          버튼에 즉시 반영됩니다.
        </p>

        <div className="mt-6 space-y-5">
          <LinkField
            label="Windows 다운로드 URL"
            icon={<WindowsIcon />}
            value={form.download_windows}
            onChange={(v) => set("download_windows", v)}
            placeholder="https://example.com/nextquant-win.exe"
          />
          <LinkField
            label="macOS 다운로드 URL"
            icon={<AppleIcon />}
            value={form.download_macos}
            onChange={(v) => set("download_macos", v)}
            placeholder="https://example.com/nextquant-mac.dmg"
          />
          <label className="flex flex-col gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-muted">
              버전 표기
            </span>
            <input
              value={form.download_version}
              onChange={(e) => set("download_version", e.target.value)}
              placeholder="v2.4.1"
              className="w-full rounded-md border border-brand-line bg-white px-3 py-2.5 text-sm text-brand-text placeholder:text-brand-mutedSoft focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primarySoft"
            />
          </label>
        </div>

        {msg && (
          <div
            className={`mt-5 rounded-md border px-3 py-2.5 text-sm font-semibold ${
              msg.ok
                ? "border-brand-primary/30 bg-brand-primarySoft text-brand-primary"
                : "border-rose-300 bg-rose-50 text-rose-600"
            }`}
          >
            {msg.ok ? "✓ " : ""}
            {msg.text}
          </div>
        )}

        <button
          type="submit"
          disabled={saving}
          className="btn-3d mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 text-sm font-bold text-white shadow-soft transition-all hover:bg-brand-primaryDim disabled:opacity-60"
        >
          {saving ? "저장 중..." : "설정 저장"}
        </button>
      </div>

      <p className="mt-4 px-1 text-xs text-brand-muted">
        · URL을 비워두면 해당 버튼은 ‘준비 중’ 상태로 표시됩니다.
      </p>
    </form>
  );
}

function LinkField({
  label,
  icon,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-muted">
        <span className="text-brand-text">{icon}</span>
        {label}
      </span>
      <input
        type="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-brand-line bg-white px-3 py-2.5 text-sm text-brand-text placeholder:text-brand-mutedSoft focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primarySoft"
      />
    </label>
  );
}

function WindowsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 5.5L10.5 4.5V11.5H3V5.5ZM3 12.5H10.5V19.5L3 18.5V12.5ZM11.5 4.3L21 3V11.5H11.5V4.3ZM11.5 12.5H21V21L11.5 19.7V12.5Z" />
    </svg>
  );
}
function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 12.04c-.03-2.99 2.45-4.43 2.56-4.5-1.4-2.05-3.58-2.33-4.35-2.36-1.85-.19-3.62 1.09-4.56 1.09-.95 0-2.4-1.07-3.95-1.04-2.03.03-3.91 1.18-4.96 3-2.12 3.67-.54 9.1 1.52 12.07 1 1.46 2.19 3.1 3.75 3.04 1.51-.06 2.08-.97 3.91-.97 1.83 0 2.34.97 3.94.94 1.63-.03 2.66-1.48 3.66-2.95 1.15-1.69 1.62-3.34 1.65-3.43-.04-.02-3.17-1.22-3.2-4.83zM14.2 3.97c.84-1.02 1.41-2.43 1.25-3.84-1.21.05-2.67.81-3.54 1.83-.78.91-1.46 2.35-1.28 3.74 1.36.1 2.74-.69 3.57-1.73z" />
    </svg>
  );
}
