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
      setMsg({ ok: true, text: "설정이 저장되었습니다." });
    } catch {
      setMsg({ ok: false, text: "네트워크 오류" });
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={save} className="mx-auto max-w-2xl">
      {/* 다운로드 파일 */}
      <div className="rounded-xl border border-brand-line bg-white p-6 shadow-soft md:p-8">
        <h3 className="text-lg font-extrabold text-brand-text">
          프로그램 다운로드 파일
        </h3>
        <p className="mt-1.5 text-sm text-brand-muted">
          Windows 설치 파일을 직접 업로드하세요. 업로드 후 설정을 저장하면 ‘이용
          방법’ 페이지의 다운로드 버튼에 즉시 연결됩니다.
        </p>

        <div className="mt-6">
          <InstallerUploader
            value={form.download_windows}
            onChange={(v) => {
              set("download_windows", v);
              setMsg(null);
            }}
          />
        </div>

        <label className="mt-5 flex flex-col gap-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-muted">
            버전 표기
          </span>
          <input
            value={form.download_version}
            onChange={(e) => set("download_version", e.target.value)}
            placeholder="v2.0.0"
            className={inputCls}
          />
        </label>
      </div>

      {/* 실시간 성과 (유튜브) */}
      <div className="mt-6 rounded-xl border border-brand-line bg-white p-6 shadow-soft md:p-8">
        <h3 className="text-lg font-extrabold text-brand-text">
          실시간 성과 (유튜브 라이브)
        </h3>
        <p className="mt-1.5 text-sm text-brand-muted">
          유튜브 라이브 URL을 입력하면 ‘실시간 성과’ 페이지에 영상이 바로
          임베드됩니다. 비워두면 ‘준비 중’으로 표시됩니다.
        </p>
        <label className="mt-5 flex flex-col gap-2">
          <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-muted">
            <span className="text-[#FF0000]">
              <YoutubeIcon />
            </span>
            유튜브 라이브 URL
          </span>
          <input
            type="url"
            value={form.youtube_live_url}
            onChange={(e) => set("youtube_live_url", e.target.value)}
            placeholder="https://www.youtube.com/watch?v=..."
            className={inputCls}
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
    </form>
  );
}

/* 설치 파일 업로더 */
function InstallerUploader({
  value,
  onChange,
}: {
  value: string;
  onChange: (url: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  async function onSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setErr(null);
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("kind", "installer");
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        setErr(j.error || "업로드 실패");
        return;
      }
      const j = (await res.json()) as { url: string; name: string };
      onChange(j.url);
      setFileName(j.name);
    } catch {
      setErr("네트워크 오류");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-muted">
        <span className="text-brand-text">
          <WindowsIcon />
        </span>
        Windows 설치 파일
      </span>

      {value ? (
        <div className="flex items-center gap-3 rounded-md border border-brand-line bg-brand-subtle p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primarySoft text-brand-primary">
            <FileIcon />
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-bold text-brand-text">
              {fileName || "업로드된 설치 파일"}
            </div>
            <a
              href={value}
              className="text-xs text-brand-primary hover:underline"
            >
              다운로드 링크 확인
            </a>
          </div>
          <button
            type="button"
            onClick={() => {
              onChange("");
              setFileName(null);
            }}
            className="shrink-0 rounded-md border border-brand-line bg-white px-3 py-1.5 text-xs font-bold text-brand-subText hover:border-rose-300 hover:text-rose-500"
          >
            제거
          </button>
        </div>
      ) : (
        <label
          className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed border-brand-line bg-brand-subtle py-8 text-center transition-colors hover:border-brand-primary ${
            uploading ? "pointer-events-none opacity-60" : ""
          }`}
        >
          <input
            type="file"
            accept=".exe,.msi,.zip"
            onChange={onSelect}
            className="hidden"
          />
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-brand-primary">
            <UploadIcon />
          </span>
          <span className="text-sm font-semibold text-brand-subText">
            {uploading ? "업로드 중..." : "설치 파일 선택"}
          </span>
          <span className="text-[11px] text-brand-mutedSoft">
            EXE · MSI · ZIP / 최대 50MB
          </span>
        </label>
      )}
      {err && (
        <span className="text-xs font-semibold text-rose-500">{err}</span>
      )}
    </div>
  );
}

const inputCls =
  "w-full rounded-md border border-brand-line bg-white px-3 py-2.5 text-sm text-brand-text placeholder:text-brand-mutedSoft focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primarySoft";

function WindowsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 5.5L10.5 4.5V11.5H3V5.5ZM3 12.5H10.5V19.5L3 18.5V12.5ZM11.5 4.3L21 3V11.5H11.5V4.3ZM11.5 12.5H21V21L11.5 19.7V12.5Z" />
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  );
}
function FileIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}
function UploadIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}
