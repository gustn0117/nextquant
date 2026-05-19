"use client";

import { useState } from "react";

export default function LoginForm() {
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw }),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        setErr(j.error || "로그인 실패");
        setLoading(false);
        return;
      }
      window.location.href = "/admin";
    } catch {
      setErr("네트워크 오류");
      setLoading(false);
    }
  }

  return (
    <div
      className="flex min-h-screen items-center justify-center px-6"
      style={{ background: "var(--ink)" }}
    >
      <div className="dot-grid-dark pointer-events-none fixed inset-0" />
      <form
        onSubmit={onSubmit}
        className="card-dark-elevated relative w-full max-w-sm p-8"
      >
        <div className="flex items-center gap-3">
          <img
            src="/logo-brain.png"
            alt=""
            aria-hidden
            className="h-10 w-auto"
            draggable={false}
          />
          <div>
            <div className="text-base font-extrabold tracking-[0.04em] text-white">
              NEXT QUANT
            </div>
            <div className="text-[10px] font-medium tracking-[0.22em] text-white/55">
              ADMIN
            </div>
          </div>
        </div>

        <h1 className="mt-7 text-2xl font-extrabold text-white">
          관리자 로그인
        </h1>
        <p className="mt-2 text-sm text-white/60">
          문의 내역을 관리하려면 비밀번호를 입력하세요.
        </p>

        <label className="mt-6 flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/55">
          PASSWORD
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            autoFocus
            required
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base font-normal text-white placeholder:text-white/30 focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primary/20"
            placeholder="••••"
          />
        </label>

        {err && (
          <div className="mt-3 rounded-md border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-sm font-semibold text-rose-300">
            {err}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-3d mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3.5 text-base font-bold text-white shadow-soft transition-all hover:bg-brand-primaryDim disabled:opacity-60"
        >
          {loading ? "확인 중..." : "로그인"}
        </button>

        <a
          href="/"
          className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-white/55 hover:text-white"
        >
          ← 메인으로
        </a>
      </form>
    </div>
  );
}
