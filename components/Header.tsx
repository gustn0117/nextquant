"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "메인" },
  { href: "/program", label: "프로그램 소개" },
  { href: "/guide", label: "이용 방법" },
  { href: "/support", label: "고객지원" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-line/80 bg-brand-bg/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="넥스트퀀트 홈"
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent">
            <div className="absolute inset-[2px] flex items-center justify-center rounded-md bg-brand-bg font-black text-brand-primary">
              N
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[15px] font-extrabold tracking-tight">
              NEXT QUANT
            </span>
            <span className="text-[10px] font-medium tracking-[0.18em] text-brand-muted">
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
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-brand-primary"
                    : "text-brand-text/80 hover:text-brand-text"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-brand-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/guide"
            className="rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-brand-bg transition-all hover:bg-brand-primaryDim hover:shadow-[0_0_24px_rgba(0,229,168,0.4)]"
          >
            무료 다운로드
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-line md:hidden"
          aria-label="메뉴 열기"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-current transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-px w-full bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-line bg-brand-bg/95 backdrop-blur-xl md:hidden">
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
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    active
                      ? "bg-brand-card text-brand-primary"
                      : "text-brand-text/80 hover:bg-brand-card hover:text-brand-text"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/guide"
              className="mt-2 rounded-full bg-brand-primary px-5 py-3 text-center text-sm font-semibold text-brand-bg"
            >
              무료 다운로드
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
