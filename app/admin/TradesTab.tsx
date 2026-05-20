"use client";

import { useMemo, useState } from "react";
import type { Trade } from "@/lib/supabase";

function fmtDate(d: string) {
  const dt = new Date(d);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}`;
}

function todayInput() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

const EMPTY = {
  pair: "",
  side: "long" as "long" | "short",
  entry_price: "",
  exit_price: "",
  pnl_percent: "",
  traded_at: todayInput(),
  note: "",
};

export default function TradesTab({
  initialItems,
}: {
  initialItems: Trade[];
}) {
  const [items, setItems] = useState<Trade[]>(initialItems);
  const [form, setForm] = useState({ ...EMPTY });
  const [adding, setAdding] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const stats = useMemo(() => {
    const count = items.length;
    const wins = items.filter((t) => t.pnl_percent > 0).length;
    const winRate = count ? Math.round((wins / count) * 100) : 0;
    const avg = count
      ? items.reduce((a, t) => a + t.pnl_percent, 0) / count
      : 0;
    return { count, winRate, avg };
  }, [items]);

  function set<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((p) => ({ ...p, [k]: v }));
  }

  async function addTrade(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    if (!form.pair.trim()) {
      setErr("종목을 입력해주세요.");
      return;
    }
    if (form.pnl_percent === "" || Number.isNaN(Number(form.pnl_percent))) {
      setErr("수익률을 숫자로 입력해주세요.");
      return;
    }
    setAdding(true);
    try {
      const res = await fetch("/api/trades", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        setErr(j.error || "추가 실패");
        return;
      }
      const j = (await res.json()) as { item: Trade };
      setItems((prev) =>
        [j.item, ...prev].sort(
          (a, b) =>
            new Date(b.traded_at).getTime() - new Date(a.traded_at).getTime(),
        ),
      );
      setForm({ ...EMPTY, traded_at: todayInput() });
    } finally {
      setAdding(false);
    }
  }

  async function deleteTrade(id: string) {
    if (!confirm("이 매매내역을 삭제하시겠습니까?")) return;
    setBusyId(id);
    try {
      const res = await fetch(`/api/trades/${id}`, { method: "DELETE" });
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
      {/* 요약 */}
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="총 매매" value={`${stats.count}건`} />
        <StatCard label="승률" value={`${stats.winRate}%`} />
        <StatCard
          label="평균 수익률"
          value={`${stats.avg > 0 ? "+" : ""}${stats.avg.toFixed(2)}%`}
          tone={stats.avg >= 0 ? "up" : "down"}
        />
      </div>

      {/* 추가 폼 */}
      <form
        onSubmit={addTrade}
        className="mt-6 rounded-xl border border-brand-line bg-white p-6 shadow-soft"
      >
        <h3 className="text-base font-extrabold text-brand-text">
          매매내역 추가
        </h3>
        <p className="mt-1 text-xs text-brand-muted">
          입력한 내역은 성과 페이지의 ‘최근 매매내역’에 즉시 반영됩니다.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Field label="종목 *">
            <input
              value={form.pair}
              onChange={(e) => set("pair", e.target.value)}
              placeholder="BTC/USDT"
              className={inputCls}
            />
          </Field>
          <Field label="방향">
            <div className="flex gap-1.5">
              {(["long", "short"] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => set("side", s)}
                  className={`flex-1 rounded-md px-3 py-2.5 text-sm font-bold transition-colors ${
                    form.side === s
                      ? s === "long"
                        ? "bg-brand-primary text-white"
                        : "bg-rose-500 text-white"
                      : "border border-brand-line bg-white text-brand-subText"
                  }`}
                >
                  {s === "long" ? "롱 (매수)" : "숏 (매도)"}
                </button>
              ))}
            </div>
          </Field>
          <Field label="수익률 % *">
            <input
              value={form.pnl_percent}
              onChange={(e) => set("pnl_percent", e.target.value)}
              placeholder="2.41"
              inputMode="decimal"
              className={inputCls}
            />
          </Field>
          <Field label="진입가">
            <input
              value={form.entry_price}
              onChange={(e) => set("entry_price", e.target.value)}
              placeholder="68000"
              inputMode="decimal"
              className={inputCls}
            />
          </Field>
          <Field label="청산가">
            <input
              value={form.exit_price}
              onChange={(e) => set("exit_price", e.target.value)}
              placeholder="69640"
              inputMode="decimal"
              className={inputCls}
            />
          </Field>
          <Field label="매매일">
            <input
              type="date"
              value={form.traded_at}
              onChange={(e) => set("traded_at", e.target.value)}
              className={inputCls}
            />
          </Field>
          <div className="md:col-span-2 lg:col-span-3">
            <Field label="메모">
              <input
                value={form.note}
                onChange={(e) => set("note", e.target.value)}
                placeholder="전략명 / 비고 (선택)"
                className={inputCls}
              />
            </Field>
          </div>
        </div>

        {err && (
          <div className="mt-4 rounded-md border border-rose-300 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-600">
            {err}
          </div>
        )}

        <button
          type="submit"
          disabled={adding}
          className="btn-3d mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 text-sm font-bold text-white shadow-soft transition-all hover:bg-brand-primaryDim disabled:opacity-60"
        >
          {adding ? "추가 중..." : "+ 매매내역 추가"}
        </button>
      </form>

      {/* 목록 */}
      <div className="mt-6 overflow-hidden rounded-xl border border-brand-line bg-white shadow-soft">
        {items.length === 0 ? (
          <div className="p-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-subtle text-brand-muted">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3v18h18" />
                <path d="M7 14l4-4 4 4 5-6" />
              </svg>
            </div>
            <h3 className="mt-4 text-base font-bold text-brand-text">
              매매내역이 없습니다
            </h3>
            <p className="mt-1 text-sm text-brand-muted">
              위 폼으로 첫 매매내역을 추가해보세요.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b border-brand-line bg-brand-subtle text-[11px] font-bold uppercase tracking-[0.12em] text-brand-muted">
                  <th className="p-4 text-left">매매일</th>
                  <th className="p-4 text-left">종목</th>
                  <th className="p-4 text-center">방향</th>
                  <th className="p-4 text-right">진입가</th>
                  <th className="p-4 text-right">청산가</th>
                  <th className="p-4 text-right">수익률</th>
                  <th className="p-4 text-left">메모</th>
                  <th className="p-4" />
                </tr>
              </thead>
              <tbody>
                {items.map((t) => (
                  <tr
                    key={t.id}
                    className="border-b border-brand-lineSoft last:border-0 hover:bg-brand-subtle/40"
                  >
                    <td className="p-4 text-brand-muted tnum">
                      {fmtDate(t.traded_at)}
                    </td>
                    <td className="p-4 font-bold text-brand-text">{t.pair}</td>
                    <td className="p-4 text-center">
                      <span
                        className={`rounded-md px-2 py-1 text-[11px] font-extrabold ${
                          t.side === "long"
                            ? "bg-brand-primary/15 text-brand-primary"
                            : "bg-rose-500/15 text-rose-500"
                        }`}
                      >
                        {t.side === "long" ? "롱" : "숏"}
                      </span>
                    </td>
                    <td className="p-4 text-right text-brand-subText tnum">
                      {t.entry_price ?? "—"}
                    </td>
                    <td className="p-4 text-right text-brand-subText tnum">
                      {t.exit_price ?? "—"}
                    </td>
                    <td
                      className={`p-4 text-right font-extrabold tnum ${
                        t.pnl_percent >= 0
                          ? "text-brand-primary"
                          : "text-rose-500"
                      }`}
                    >
                      {t.pnl_percent > 0 ? "+" : ""}
                      {t.pnl_percent}%
                    </td>
                    <td className="max-w-[180px] truncate p-4 text-brand-muted">
                      {t.note || "—"}
                    </td>
                    <td className="p-4 text-right">
                      <button
                        type="button"
                        disabled={busyId === t.id}
                        onClick={() => deleteTrade(t.id)}
                        className="rounded-md border border-rose-300 bg-white px-2.5 py-1.5 text-xs font-bold text-rose-500 transition-colors hover:bg-rose-50 disabled:opacity-50"
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

const inputCls =
  "w-full rounded-md border border-brand-line bg-white px-3 py-2.5 text-sm text-brand-text placeholder:text-brand-mutedSoft focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primarySoft";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-muted">
        {label}
      </span>
      {children}
    </label>
  );
}

function StatCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "up" | "down";
}) {
  return (
    <div className="rounded-xl border border-brand-line bg-white p-5 shadow-soft">
      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-muted">
        {label}
      </div>
      <div
        className={`mt-2 text-3xl font-extrabold tracking-tightest tnum ${
          tone === "up"
            ? "text-brand-primary"
            : tone === "down"
              ? "text-rose-500"
              : "text-brand-text"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
