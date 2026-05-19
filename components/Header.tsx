"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "메인" },
  { href: "/program", label: "프로그램 소개" },
  { href: "/performance", label: "성과" },
  { href: "/guide", label: "이용 방법" },
  { href: "/support", label: "고객지원" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-brand-line/80 bg-white/80 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-white/50 backdrop-blur-md"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="넥스트퀀트 홈"
        >
          <img
            src="/logo-brain.png"
            alt=""
            aria-hidden
            className="h-9 w-auto select-none"
            draggable={false}
          />
          <div className="flex flex-col leading-none">
            <span className="text-[15px] font-extrabold tracking-[0.04em] text-brand-text">
              NEXT QUANT
            </span>
            <span className="mt-1 text-[10px] font-medium tracking-[0.22em] text-brand-muted">
              넥스트퀀트
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group/nav relative rounded-md px-3.5 py-2 text-sm font-semibold transition-colors lg:px-4 ${
                  active
                    ? "text-brand-text"
                    : "text-brand-subText hover:text-brand-text"
                }`}
              >
                {item.label}
                <span
                  className={`pointer-events-none absolute inset-x-3.5 -bottom-[3px] h-[2px] origin-left rounded-full bg-brand-primary transition-transform duration-300 lg:inset-x-4 ${
                    active
                      ? "scale-x-100"
                      : "scale-x-0 group-hover/nav:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/performance"
            className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold text-brand-subText transition-colors hover:text-brand-primary lg:inline-flex"
          >
            <span className="live-dot" /> 실시간 성과
          </Link>
          <Link
            href="/guide"
            className="btn-3d inline-flex items-center gap-1.5 rounded-md bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-brand-primaryDim hover:shadow-[0_10px_22px_-8px_rgba(0,183,131,0.55)]"
          >
            무료 다운로드
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-line bg-white md:hidden"
          aria-label="메뉴 열기"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-full rounded bg-brand-text transition-transform ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-[2px] w-full rounded bg-brand-text transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-[2px] w-full rounded bg-brand-text transition-transform ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-line bg-white md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-brand-primarySoft text-brand-primary"
                      : "text-brand-subText hover:bg-brand-subtle"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/guide"
              className="mt-2 rounded-md bg-brand-primary px-5 py-3 text-center text-sm font-semibold text-white"
            >
              무료 다운로드
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
