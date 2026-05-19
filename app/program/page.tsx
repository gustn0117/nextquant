import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "프로그램 소개 | 넥스트퀀트 NEXT QUANT",
  description:
    "백테스팅 데이터로 검증된 강력한 시스템 트레이딩 엔진. 정밀한 마켓 데이터 분석, 철저한 리스크 컨트롤, 직관적인 대시보드를 제공합니다.",
};

export default function ProgramPage() {
  return (
    <>
      <ProgramHero />
      <CoreFeatures />
      <Architecture />
      <CtaBand />
    </>
  );
}

function ProgramHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-80" />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="container-x relative section-padding pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold tracking-[0.18em] text-brand-primary">
            ABOUT PROGRAM
          </span>
          <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.15] tracking-tight md:text-6xl">
            백테스팅 데이터로 검증된
            <br />
            <span className="gradient-text">강력한 시스템 트레이딩 엔진</span>
          </h1>
          <p className="mt-7 section-sub">
            수년간 축적된 시장 데이터와 정교한 알고리즘이 결합된
            <br className="hidden md:block" />
            넥스트퀀트만의 트레이딩 엔진을 만나보세요.
          </p>
        </div>
      </div>
    </section>
  );
}

function CoreFeatures() {
  const features = [
    {
      idx: "01",
      label: "Market Analysis",
      title: "정밀한 마켓 데이터 분석 엔진",
      desc: "호가창의 실시간 매수/매도 잔량과 유동성을 분석하여 진입 포지션을 잡습니다. 시장의 왜곡을 포착하는 넥스트퀀트만의 알고리즘이 탑재되어 있습니다.",
      bullets: [
        "실시간 오더북 잔량 분석",
        "유동성/슬리피지 사전 점검",
        "변동성 구간 자동 인식",
      ],
      visual: <OrderBookVisual />,
    },
    {
      idx: "02",
      label: "Risk Control",
      title: "철저한 리스크 컨트롤 시스템",
      desc: "실시간 마진 비율과 진입 가격(Entry Price) 대비 시장 평균 가격(Mark Price) 추이를 추적합니다. 사전에 설정한 MDD(최대 낙폭) 기준에 따라 철저한 분할 진입 및 칼같은 손절로 자산 손실을 원천 차단합니다.",
      bullets: [
        "Mark Price · Entry Price 실시간 추적",
        "MDD 기준 자동 손절 / 분할 진입",
        "마진 비율 단계별 알림",
      ],
      visual: <RiskGaugeVisual />,
    },
    {
      idx: "03",
      label: "Dashboard",
      title: "직관적이고 강력한 대시보드 (UI)",
      desc: "복잡한 코딩이나 명령어 입력 없이, 마우스 클릭 몇 번만으로 자산 현황, 현재 포지션, 누적 수익률을 한눈에 파악할 수 있는 사용자 친화적 인터페이스를 제공합니다.",
      bullets: [
        "한 화면에서 모든 포지션 확인",
        "누적 수익률 / 승률 시각화",
        "원클릭 전략 전환",
      ],
      visual: <DashboardVisual />,
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-x">
        <div className="space-y-24 md:space-y-32">
          {features.map((f, i) => (
            <div
              key={f.idx}
              className={`grid items-center gap-12 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="gradient-text text-5xl font-black leading-none">
                    {f.idx}
                  </span>
                  <span className="text-xs font-bold tracking-[0.2em] text-brand-primary">
                    {f.label}
                  </span>
                </div>
                <h3 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
                  {f.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-brand-muted md:text-lg">
                  {f.desc}
                </p>
                <ul className="mt-7 space-y-3">
                  {f.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm md:text-base"
                    >
                      <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-brand-primary">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3 w-3"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-brand-text">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>{f.visual}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrderBookVisual() {
  const asks = [
    { p: "108,521", v: 0.45, w: 38 },
    { p: "108,510", v: 0.82, w: 64 },
    { p: "108,498", v: 0.36, w: 30 },
    { p: "108,487", v: 1.12, w: 86 },
    { p: "108,475", v: 0.58, w: 48 },
  ];
  const bids = [
    { p: "108,462", v: 0.92, w: 72 },
    { p: "108,451", v: 1.34, w: 96 },
    { p: "108,440", v: 0.41, w: 34 },
    { p: "108,428", v: 0.67, w: 54 },
    { p: "108,415", v: 0.28, w: 24 },
  ];

  return (
    <div className="glass-card rounded-2xl p-1">
      <div className="rounded-[14px] bg-brand-bg/80 p-5">
        <div className="flex items-center justify-between border-b border-brand-line pb-3">
          <span className="text-xs font-bold tracking-wider text-brand-muted">
            ORDER BOOK · BTC/USDT
          </span>
          <span className="rounded bg-brand-primary/15 px-2 py-0.5 text-[10px] font-bold text-brand-primary">
            REALTIME
          </span>
        </div>

        <div className="mt-4">
          <div className="grid grid-cols-3 gap-2 px-2 pb-2 text-[10px] font-semibold uppercase tracking-wider text-brand-muted">
            <span>Price</span>
            <span className="text-right">Amount</span>
            <span className="text-right">Total</span>
          </div>

          <div className="space-y-1">
            {asks.map((r) => (
              <div
                key={r.p}
                className="relative grid grid-cols-3 gap-2 rounded px-2 py-1 text-xs font-mono"
              >
                <div
                  className="absolute inset-y-0 right-0 rounded bg-red-400/15"
                  style={{ width: `${r.w}%` }}
                />
                <span className="relative text-red-400">{r.p}</span>
                <span className="relative text-right">{r.v}</span>
                <span className="relative text-right text-brand-muted">
                  {(parseFloat(r.p.replace(",", "")) * r.v).toFixed(0)}
                </span>
              </div>
            ))}
          </div>

          <div className="my-3 flex items-center justify-between rounded-lg border border-brand-primary/40 bg-brand-primary/5 px-3 py-2">
            <span className="text-sm font-extrabold text-brand-primary">
              108,468.50
            </span>
            <span className="text-[10px] font-semibold text-brand-muted">
              Spread 0.04%
            </span>
          </div>

          <div className="space-y-1">
            {bids.map((r) => (
              <div
                key={r.p}
                className="relative grid grid-cols-3 gap-2 rounded px-2 py-1 text-xs font-mono"
              >
                <div
                  className="absolute inset-y-0 right-0 rounded bg-brand-primary/15"
                  style={{ width: `${r.w}%` }}
                />
                <span className="relative text-brand-primary">{r.p}</span>
                <span className="relative text-right">{r.v}</span>
                <span className="relative text-right text-brand-muted">
                  {(parseFloat(r.p.replace(",", "")) * r.v).toFixed(0)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RiskGaugeVisual() {
  return (
    <div className="glass-card rounded-2xl p-1">
      <div className="rounded-[14px] bg-brand-bg/80 p-6">
        <div className="flex items-center justify-between border-b border-brand-line pb-3">
          <span className="text-xs font-bold tracking-wider text-brand-muted">
            RISK MONITOR
          </span>
          <span className="rounded bg-brand-primary/15 px-2 py-0.5 text-[10px] font-bold text-brand-primary">
            SAFE
          </span>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <div className="relative h-32 w-56">
            <svg viewBox="0 0 200 110" className="h-full w-full">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#00E5A8" />
                  <stop offset="60%" stopColor="#3D8BFF" />
                  <stop offset="100%" stopColor="#ff4d6d" />
                </linearGradient>
              </defs>
              <path
                d="M10,100 A90,90 0 0 1 190,100"
                fill="none"
                stroke="#1F2A44"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <path
                d="M10,100 A90,90 0 0 1 190,100"
                fill="none"
                stroke="url(#g1)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray="282.7"
                strokeDashoffset="120"
              />
              <circle cx="78" cy="42" r="6" fill="#fff" />
            </svg>
            <div className="absolute inset-x-0 bottom-2 text-center">
              <div className="text-2xl font-extrabold text-brand-primary">
                32%
              </div>
              <div className="text-[10px] font-semibold text-brand-muted">
                Margin Usage
              </div>
            </div>
          </div>

          <div className="mt-6 w-full grid grid-cols-3 gap-2">
            {[
              { l: "Entry", v: "$108,210", c: "text-brand-muted" },
              { l: "Mark", v: "$108,468", c: "text-brand-primary" },
              { l: "MDD", v: "-4.81%", c: "text-brand-text" },
            ].map((x) => (
              <div
                key={x.l}
                className="rounded-lg border border-brand-line bg-brand-card/50 px-3 py-2.5 text-center"
              >
                <div className="text-[10px] font-semibold text-brand-muted">
                  {x.l}
                </div>
                <div className={`mt-1 text-sm font-bold ${x.c}`}>{x.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 w-full rounded-lg border border-brand-line bg-brand-card/30 p-3">
            <div className="flex items-center justify-between text-[11px] font-semibold">
              <span className="text-brand-muted">자동 손절 트리거</span>
              <span className="text-brand-primary">-5.00% 도달 시</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-brand-line">
              <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-brand-primary to-brand-accent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardVisual() {
  return (
    <div className="glass-card rounded-2xl p-1">
      <div className="rounded-[14px] bg-brand-bg/80 p-5">
        <div className="flex items-center justify-between border-b border-brand-line pb-3">
          <span className="text-xs font-bold tracking-wider text-brand-muted">
            MY DASHBOARD
          </span>
          <span className="text-[10px] text-brand-muted">Today · 05.19</span>
        </div>

        <div className="mt-5 rounded-xl border border-brand-line bg-brand-card/50 p-5">
          <div className="text-xs text-brand-muted">총 자산</div>
          <div className="mt-1.5 flex items-end gap-3">
            <span className="text-3xl font-extrabold">$28,743.92</span>
            <span className="text-sm font-bold text-brand-primary">
              +12.4%
            </span>
          </div>

          <div className="mt-5 flex h-14 items-end gap-1">
            {[40, 55, 48, 62, 58, 70, 65, 80, 76, 88, 82, 95, 90].map(
              (h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-brand-primary/30 to-brand-primary"
                  style={{ height: `${h}%` }}
                />
              ),
            )}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-brand-line bg-brand-card/50 p-4">
            <div className="text-[10px] font-semibold text-brand-muted">
              승률 (30일)
            </div>
            <div className="mt-1 text-xl font-extrabold text-brand-primary">
              76.2%
            </div>
          </div>
          <div className="rounded-xl border border-brand-line bg-brand-card/50 p-4">
            <div className="text-[10px] font-semibold text-brand-muted">
              체결 횟수
            </div>
            <div className="mt-1 text-xl font-extrabold">412</div>
          </div>
        </div>

        <div className="mt-3 rounded-xl border border-brand-line bg-brand-card/50 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold text-brand-muted">
              활성 포지션
            </span>
            <span className="text-[10px] font-bold text-brand-primary">
              2 LIVE
            </span>
          </div>
          {[
            { s: "BTC/USDT", side: "LONG", pnl: "+$582.10", up: true },
            { s: "ETH/USDT", side: "SHORT", pnl: "+$214.05", up: true },
          ].map((p) => (
            <div
              key={p.s}
              className="flex items-center justify-between border-t border-brand-line py-2.5 first:border-0 first:pt-0"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">{p.s}</span>
                <span
                  className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                    p.side === "LONG"
                      ? "bg-brand-primary/15 text-brand-primary"
                      : "bg-red-400/15 text-red-400"
                  }`}
                >
                  {p.side}
                </span>
              </div>
              <span
                className={`text-sm font-bold ${
                  p.up ? "text-brand-primary" : "text-red-400"
                }`}
              >
                {p.pnl}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Architecture() {
  const tech = [
    { k: "Engine", v: "C++ / Rust 기반 저지연 매매 엔진" },
    { k: "Exchange", v: "Binance · Bybit · OKX API 연동" },
    { k: "Security", v: "출금 권한 분리 · AES-256 키 암호화" },
    { k: "Backtest", v: "5년치 틱 데이터 검증 시뮬레이션" },
  ];

  return (
    <section className="section-padding border-y border-brand-line bg-brand-surface/40">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold tracking-[0.18em] text-brand-primary">
            TECHNOLOGY
          </span>
          <h2 className="mt-4 section-title">
            검증된 기술 위에 만든
            <br />
            <span className="gradient-text">신뢰할 수 있는 엔진</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {tech.map((t) => (
            <div
              key={t.k}
              className="rounded-2xl border border-brand-line bg-brand-card/50 p-6"
            >
              <div className="text-xs font-bold tracking-[0.18em] text-brand-primary">
                {t.k.toUpperCase()}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-brand-text">
                {t.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="section-padding">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-brand-line bg-gradient-to-br from-brand-card to-brand-surface px-8 py-14 md:px-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-primary/20 blur-[100px]" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-bold md:text-3xl">
                지금 무료체험으로 직접 확인하세요.
              </h3>
              <p className="mt-2 text-brand-muted">
                간단한 회원가입 후 바로 다운로드, 단 1분이면 시작입니다.
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/guide" className="btn-primary">
                다운로드
              </Link>
              <Link href="/support" className="btn-ghost">
                문의
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
