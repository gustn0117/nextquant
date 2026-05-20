"use client";

import { useState } from "react";
import type { PerformancePost } from "@/lib/supabase";

function fmtDate(d: string) {
  const dt = new Date(d);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${dt.getFullYear()}.${pad(dt.getMonth() + 1)}.${pad(dt.getDate())}`;
}

export default function PostsTab({
  initialItems,
}: {
  initialItems: PerformancePost[];
}) {
  const [items, setItems] = useState<PerformancePost[]>(initialItems);
  const [programImage, setProgramImage] = useState("");
  const [binanceImage, setBinanceImage] = useState("");
  const [saving, setSaving] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [ok, setOk] = useState(false);

  async function addPost() {
    setErr(null);
    setOk(false);
    if (!programImage && !binanceImage) {
      setErr("이미지를 최소 한 장 이상 업로드해주세요.");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/performance-posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          program_image: programImage,
          binance_image: binanceImage,
        }),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        setErr(j.error || "등록 실패");
        return;
      }
      const j = (await res.json()) as { item: PerformancePost };
      setItems((prev) =>
        [j.item, ...prev].sort(
          (a, b) =>
            new Date(b.posted_at).getTime() - new Date(a.posted_at).getTime(),
        ),
      );
      setProgramImage("");
      setBinanceImage("");
      setOk(true);
    } finally {
      setSaving(false);
    }
  }

  async function deletePost(id: string) {
    if (!confirm("이 게시물을 삭제하시겠습니까?")) return;
    setBusyId(id);
    try {
      const res = await fetch(`/api/performance-posts/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        alert("삭제 실패");
        return;
      }
      setItems((prev) => prev.filter((p) => p.id !== id));
    } finally {
      setBusyId(null);
    }
  }

  return (
    <>
      {/* 업로드 영역 */}
      <div className="rounded-xl border border-brand-line bg-white p-6 shadow-soft md:p-8">
        <h3 className="text-base font-extrabold text-brand-text">
          성과 게시물 추가
        </h3>
        <p className="mt-1 text-xs text-brand-muted">
          프로그램 매매 내역과 실제 바이낸스 매매 내역 이미지를 업로드하세요.
          등록 즉시 성과 페이지에 노출되며, 게시일은 자동 기록됩니다.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <ImageUploader
            label="프로그램 매매 내역 이미지"
            value={programImage}
            onChange={(v) => {
              setProgramImage(v);
              setOk(false);
            }}
          />
          <ImageUploader
            label="실제 바이낸스 매매 내역 이미지"
            value={binanceImage}
            onChange={(v) => {
              setBinanceImage(v);
              setOk(false);
            }}
          />
        </div>

        {err && (
          <div className="mt-4 rounded-md border border-rose-300 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-600">
            {err}
          </div>
        )}
        {ok && (
          <div className="mt-4 rounded-md border border-brand-primary/30 bg-brand-primarySoft px-3 py-2 text-sm font-semibold text-brand-primary">
            ✓ 게시물이 등록되었습니다. 성과 페이지에서 확인하실 수 있습니다.
          </div>
        )}

        <button
          type="button"
          onClick={addPost}
          disabled={saving}
          className="btn-3d mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 text-sm font-bold text-white shadow-soft transition-all hover:bg-brand-primaryDim disabled:opacity-60"
        >
          {saving ? "등록 중..." : "+ 게시물 등록"}
        </button>
      </div>

      {/* 목록 */}
      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-brand-text">
            등록된 게시물
          </h3>
          <span className="text-xs text-brand-muted tnum">
            {items.length}건
          </span>
        </div>
        {items.length === 0 ? (
          <div className="rounded-xl border border-brand-line bg-white p-16 text-center shadow-soft">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-subtle text-brand-muted">
              <ImageIcon />
            </div>
            <h3 className="mt-4 text-base font-bold text-brand-text">
              등록된 게시물이 없습니다
            </h3>
            <p className="mt-1 text-sm text-brand-muted">
              위에서 이미지를 업로드하고 게시물을 등록해보세요.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {items.map((p) => (
              <div
                key={p.id}
                className="overflow-hidden rounded-xl border border-brand-line bg-white shadow-soft"
              >
                <div className="grid grid-cols-2 gap-px bg-brand-line">
                  <PostThumb label="프로그램" src={p.program_image} />
                  <PostThumb label="바이낸스" src={p.binance_image} />
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <div className="text-sm font-bold text-brand-text tnum">
                    {fmtDate(p.posted_at)}
                  </div>
                  <button
                    type="button"
                    disabled={busyId === p.id}
                    onClick={() => deletePost(p.id)}
                    className="shrink-0 rounded-md border border-rose-300 bg-white px-2.5 py-1.5 text-xs font-bold text-rose-500 transition-colors hover:bg-rose-50 disabled:opacity-50"
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

function PostThumb({
  label,
  src,
}: {
  label: string;
  src: string | null;
}) {
  return (
    <div className="relative aspect-[4/3] bg-brand-subtle">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`${label} 매매 내역`}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-xs text-brand-mutedSoft">
          이미지 없음
        </div>
      )}
      <span className="absolute left-2 top-2 rounded bg-brand-text/80 px-1.5 py-0.5 text-[10px] font-bold text-white">
        {label}
      </span>
    </div>
  );
}

function ImageUploader({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (url: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setErr(null);
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        setErr(j.error || "업로드 실패");
        return;
      }
      const j = (await res.json()) as { url: string };
      onChange(j.url);
    } catch {
      setErr("네트워크 오류");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-muted">
        {label}
      </span>
      {value ? (
        <div className="relative overflow-hidden rounded-md border border-brand-line">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={value}
            alt={label}
            className="aspect-[4/3] w-full object-cover"
          />
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute right-2 top-2 rounded-md bg-brand-text/85 px-2 py-1 text-[11px] font-bold text-white hover:bg-brand-text"
          >
            제거
          </button>
        </div>
      ) : (
        <label
          className={`flex aspect-[4/3] cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed border-brand-line bg-brand-subtle text-center transition-colors hover:border-brand-primary ${
            uploading ? "pointer-events-none opacity-60" : ""
          }`}
        >
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif"
            onChange={onSelect}
            className="hidden"
          />
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-brand-primary">
            <ImageIcon />
          </span>
          <span className="text-xs font-semibold text-brand-subText">
            {uploading ? "업로드 중..." : "이미지 선택"}
          </span>
          <span className="text-[10px] text-brand-mutedSoft">
            PNG · JPG · WEBP · GIF / 최대 10MB
          </span>
        </label>
      )}
      {err && (
        <span className="text-xs font-semibold text-rose-500">{err}</span>
      )}
    </div>
  );
}

function ImageIcon() {
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
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}
