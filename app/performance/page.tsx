import Link from "next/link";
import type { Metadata } from "next";
import { supabaseAdmin, type Trade } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "성과 | 넥스트퀀트 NEXT QUANT",
  description:
    "넥스트퀀트 엔진이 체결한 실제 매매 내역을 가공 없이 공개합니다.",
};

export const dynamic = "force-dynamic";

const COVER_IMG =
  "https://images.unsplash.com/photo-1554260570-9140fd3b7614?auto=format&fit=crop&w=1400&q=80";

export default async function PerformancePage() {
  let trades: Trade[] = [];
  try {
    const { data } = await supabaseAdmin
      .from("trades")
      .select("*")
      .order("traded_at", { ascending: false })
      .limit(100);
    trades = data ?? [];
  } catch {
    trades = [];
  }

  return (
    <>
      <Hero hasTrades={trades.length > 0} />
      <TradeLog trades={trades} />
      <Disclaimer />
    </>
  );
}

function fmtTradeDate(d: string) {
  const dt = new Date(d);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${dt.getFullYear()}.${pad(dt.getMonth() + 1)}.${pad(dt.getDate())}`;
}

/* ─────────── Hero ─────────── */
function Hero({ hasTrades }: { hasTrades: boolean }) {
  return (
    <section className="relative overflow-hidden border-b border-brand-line bg-white">
      <div className="dot-grid-light pointer-events-none absolute inset-0 opacity-90" />
      <div className="container-x relative section-padding pt-24 md:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
              <span className="h-px w-8 bg-brand-primary/40" />
              PERFORMANCE
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tightest md:text-6xl">
              엔진이 체결한
              <br />
              <span className="accent-underline">실제 매매 내역</span>
            </h1>
            <p className="mt-7 section-sub">
              넥스트퀀트 엔진이 실제로 체결한 매매 내역을 가공 없이 공개합니다.
              모든 기록은 관리자가 직접 검수한 데이터입니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="stat-chip">바이낸스 선물 기준</span>
              <span className="stat-chip">
                {hasTrades ? "매매 내역 공개 중" : "데이터 준비 중"}
              </span>
            </div>
          </div>
          <div className="img-zoom relative overflow-hidden rounded-xl border border-brand-line bg-white shadow-depth">
            <CornerMarker />
            <img
              src={COVER_IMG}
              alt="매매 기록"
              className="aspect-[5/4] w-full object-cover"
              loading="eager"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 65%, rgba(0,0,0,0.3) 100%)",
              }}
            />
            <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-md bg-white/95 px-3 py-1.5 text-xs font-bold text-brand-text backdrop-blur">
              Trade Log
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CornerMarker() {
  const C = ({ className }: { className: string }) => (
    <span className={`absolute z-10 h-3 w-3 border-white/70 ${className}`} />
  );
  return (
    <>
      <C className="left-3 top-3 border-l border-t" />
      <C className="right-3 top-3 border-r border-t" />
      <C className="bottom-3 left-3 border-b border-l" />
      <C className="bottom-3 right-3 border-b border-r" />
    </>
  );
}

/* ─────────── Trade Log ─────────── */
function TradeLog({ trades }: { trades: Trade[] }) {
  const hasTrades = trades.length > 0;
  const wins = trades.filter((t) => t.pnl_percent > 0).length;
  const winRate = hasTrades ? Math.round((wins / trades.length) * 100) : 0;
  const avg = hasTrades
    ? trades.reduce((a, t) => a + t.pnl_percent, 0) / trades.length
    : 0;

  return (
    <section className="section-padding">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
              Trade Log
            </span>
            <h2 className="mt-4 section-title">매매 내역</h2>
            <p className="mt-5 section-sub">
              최근 체결된 매매 기록입니다. 가공 없이 공개합니다.
            </p>
          </div>
          {hasTrades && (
            <div className="flex gap-3">
              <MiniStat label="공개 매매" value={`${trades.length}건`} />
              <MiniStat label="승률" value={`${winRate}%`} />
              <MiniStat
                label="평균"
                value={`${avg > 0 ? "+" : ""}${avg.toFixed(2)}%`}
                tone={avg >= 0 ? "up" : "down"}
              />
            </div>
          )}
        </div>

        {hasTrades ? (
          <div className="mt-10 overflow-hidden rounded-xl border border-brand-line shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="bg-brand-subtle text-[11px] font-bold uppercase tracking-[0.12em] text-brand-muted">
                    <th className="p-4 text-left">매매일</th>
                    <th className="p-4 text-left">종목</th>
                    <th className="p-4 text-center">방향</th>
                    <th className="p-4 text-right">진입가</th>
                    <th className="p-4 text-right">청산가</th>
                    <th className="p-4 text-right">수익률</th>
                  </tr>
                </thead>
                <tbody>
                  {trades.map((t) => (
                    <tr
                      key={t.id}
                      className="border-t border-brand-lineSoft transition-colors hover:bg-brand-subtle/40"
                    >
                      <td className="p-4 text-brand-muted tnum">
                        {fmtTradeDate(t.traded_at)}
                      </td>
                      <td className="p-4 font-bold text-brand-text">
                        {t.pair}
                      </td>
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-brand-line bg-white p-16 text-center shadow-soft">
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
              아직 공개된 매매 내역이 없습니다
            </h3>
            <p className="mt-1 text-sm text-brand-muted">
              매매 내역이 등록되면 이곳에 표시됩니다.
            </p>
          </div>
        )}

        <p className="mt-4 text-xs text-brand-muted">
          * 과거의 매매 성과가 미래 수익을 보장하지 않습니다.
        </p>
      </div>
    </section>
  );
}

function MiniStat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "up" | "down";
}) {
  return (
    <div className="rounded-lg border border-brand-line bg-white px-4 py-3 text-center">
      <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-muted">
        {label}
      </div>
      <div
        className={`mt-1 text-lg font-extrabold tnum ${
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

/* ─────────── Disclaimer ─────────── */
function Disclaimer() {
  return (
    <section className="pb-24">
      <div className="container-x">
        <div className="mx-auto max-w-4xl rounded-xl border border-brand-line bg-brand-subtle p-7 text-sm text-brand-muted md:p-10">
          <p className="font-bold text-brand-text">⚠ 투자 유의 안내</p>
          <p className="mt-3">
            본 페이지의 매매 내역은 실제 운용 기록이나, 과거의 성과가 미래의
            수익을 보장하지 않습니다. 모든 투자 결정의 책임은 사용자 본인에게
            있으며, 넥스트퀀트는 매매를 보조하는 도구로서의 역할만 수행합니다.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide" className="btn-primary">
              무료체험 시작
            </Link>
            <Link href="/program" className="btn-ghost">
              프로그램 자세히 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
