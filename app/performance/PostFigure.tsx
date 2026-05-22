"use client";

import { useEffect, useState } from "react";

export default function PostFigure({
  label,
  src,
}: {
  label: string;
  src: string | null;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!src) {
    return (
      <figure className="flex aspect-[16/10] items-center justify-center bg-brand-subtle">
        <figcaption className="text-xs text-brand-mutedSoft">
          {label} — 이미지 없음
        </figcaption>
      </figure>
    );
  }

  return (
    <>
      <figure className="relative bg-brand-subtle">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group block w-full cursor-zoom-in"
          aria-label={`${label} 확대해서 보기`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={label}
            className="aspect-[16/10] w-full object-contain"
            loading="lazy"
          />
          <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-md bg-brand-text/80 px-2.5 py-1 text-[11px] font-bold text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
            <ZoomIcon /> 클릭하면 확대
          </span>
        </button>
        <figcaption className="pointer-events-none absolute left-4 top-4 rounded-md bg-brand-text/80 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur">
          {label}
        </figcaption>
      </figure>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm md:p-8"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${label} 확대 보기`}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6 md:top-6"
            aria-label="닫기"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={label}
            className="max-h-[88vh] max-w-[94vw] cursor-zoom-out rounded-lg object-contain shadow-2xl"
          />
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-md bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/85 backdrop-blur">
            {label} · 화면을 누르면 닫힙니다
          </span>
        </div>
      )}
    </>
  );
}

function ZoomIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}
