"use client";

import { useState } from "react";
import type { PerformancePost } from "@/lib/supabase";

function todayInput() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

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
  const [title, setTitle] = useState("");
  const [postedAt, setPostedAt] = useState(todayInput());
  const [note, setNote] = useState("");
  const [programImage, setProgramImage] = useState("");
  const [binanceImage, setBinanceImage] = useState("");
  const [saving, setSaving] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  function resetForm() {
    setTitle("");
    setPostedAt(todayInput());
    setNote("");
    setProgramImage("");
    setBinanceImage("");
  }

  async function addPost(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    if (!title.trim()) {
      setErr("제목을 입력해주세요.");
      return;
    }
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
          title,
          posted_at: postedAt,
          note,
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
      resetForm();
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
      {/* 작성 폼 */}
      <form
        onSubmit={addPost}
        className="rounded-xl border border-brand-line bg-white p-6 shadow-soft md:p-8"
      >
        <h3 className="text-base font-extrabold text-brand-text">
          성과 게시물 추가
        </h3>
        <p className="mt-1 text-xs text-brand-muted">
          프로그램 매매 내역과 실제 바이낸스 매매 내역 이미지를 함께 올릴 수
          있습니다. 등록 즉시 성과 페이지에 노출됩니다.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-muted">
              제목 *
            </span>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="예: 5월 20일 매매 결과"
              className={inputCls}
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-muted">
              게시일
            </span>
            <input
              type="date"
              value={postedAt}
              onChange={(e) => setPostedAt(e.target.value)}
              className={inputCls}
            />
          </label>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <ImageUploader
            label="프로그램 매매 내역 이미지"
            value={programImage}
            onChange={setProgramImage}
          />
          <ImageUploader
            label="실제 바이낸스 매매 내역 이미지"
            value={binanceImage}
            onChange={setBinanceImage}
          />
        </div>

        <label className="mt-4 flex flex-col gap-1.5">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-muted">
            메모 (선택)
          </span>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={2}
            placeholder="게시물에 함께 보여줄 설명"
            className={inputCls}
          />
        </label>

        {err && (
          <div className="mt-4 rounded-md border border-rose-300 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-600">
            {err}
          </div>
        )}

        <button
          type="submit"
          disabled={saving}
          className="btn-3d mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 text-sm font-bold text-white shadow-soft transition-all hover:bg-brand-primaryDim disabled:opacity-60"
        >
          {saving ? "등록 중..." : "+ 게시물 등록"}
        </button>
      </form>

      {/* 목록 */}
      <div className="mt-6">
        {items.length === 0 ? (
          <div className="rounded-xl border border-brand-line bg-white p-16 text-center shadow-soft">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-subtle text-brand-muted">
              <ImageIcon />
            </div>
            <h3 className="mt-4 text-base font-bold text-brand-text">
              등록된 게시물이 없습니다
            </h3>
            <p className="mt-1 text-sm text-brand-muted">
              위 폼으로 첫 성과 게시물을 등록해보세요.
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
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-extrabold text-brand-text">
                        {p.title}
                      </div>
                      <div className="mt-0.5 text-xs text-brand-muted tnum">
                        {fmtDate(p.posted_at)}
                      </div>
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
                  {p.note && (
                    <p className="mt-2 text-sm text-brand-muted">{p.note}</p>
                  )}
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
    e.target.value = ""; // 동일 파일 재선택 허용
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

const inputCls =
  "w-full rounded-md border border-brand-line bg-white px-3 py-2.5 text-sm text-brand-text placeholder:text-brand-mutedSoft focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primarySoft";
