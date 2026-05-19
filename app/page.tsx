import Link from "next/link";

const HERO_IMG =
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1800&q=80";
const PROBLEM_IMG =
  "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=1200&q=80";
const SOLUTION_IMG =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBar />
      <ProblemSection />
      <SolutionBento />
      <LivePreview />
      <StatSection />
      <ProcessSection />
      <TestimonialSection />
      <CtaSection />
    </>
  );
}

/* ──────────────────────────────────────────────────── */
/* Hero                                                 */
/* ──────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/5">
      {/* 배경 이미지 */}
      <img
        src={HERO_IMG}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="eager"
      />
      {/* 솔리드 다크 오버레이 */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "rgba(8,15,30,0.82)" }}
      />
      {/* 점 그리드 패턴 */}
      <div className="dot-grid-dark pointer-events-none absolute inset-0 -z-10" />
      {/* 위/아래 비네팅 */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,15,30,0.6), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40"
        style={{
          background: "linear-gradient(0deg, rgba(8,15,30,0.95), transparent)",
        }}
      />

      <div className="container-x relative pb-28 pt-28 md:pb-36 md:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <div className="fade-up flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
            <span className="h-px w-8 bg-white/20" />
            QUANT TRADING SYSTEM
            <span className="h-px w-8 bg-white/20" />
          </div>

          <h1 className="fade-up fade-up-1 mt-7 text-5xl font-extrabold tracking-tightest text-white md:text-7xl lg:text-[88px]">
            감정을 빼고,
            <br />
            원칙을 더하다
            <span className="text-brand-primary">.</span>
          </h1>

          <p className="fade-up fade-up-2 mx-auto mt-7 max-w-2xl text-base text-white/72 md:text-xl">
            시장의 변동성에 흔들리지 마세요. 데이터와 알고리즘이
            <br className="hidden md:block" />
            당신이 잠든 순간에도 정확한 타이밍에 진입하고 청산합니다.
          </p>

          <div className="fade-up fade-up-3 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/guide" className="btn-primary btn-3d group">
              무료체험 다운로드
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-y-0.5"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </Link>
            <Link href="/program" className="btn-outline-light">
              프로그램 자세히 보기
            </Link>
          </div>

          <p className="fade-up fade-up-4 mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/55">
            <span className="inline-flex items-center gap-1.5">
              <CheckMini /> 신용카드 등록 없이 시작
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckMini /> 1분 설치 · Win/macOS
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckMini /> 14일 무료체험
            </span>
          </p>
        </div>

        {/* Hero KPI 보드 */}
        <HeroDashboard />
      </div>
    </section>
  );
}

function HeroDashboard() {
  return (
    <div className="relative mx-auto mt-20 hidden max-w-5xl md:block">
      <div className="card-dark-elevated relative overflow-hidden p-6 lg:p-8">
        {/* 코너 마커 (다크) */}
        <CornerMarkerWhite />

        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
              <span className="live-dot" /> 누적 수익률 · LIVE
            </div>
            <div className="mt-2 flex items-baseline gap-2 num-display">
              <span className="text-5xl font-extrabold text-white md:text-6xl">
                +37.4
              </span>
              <span className="text-2xl font-bold text-brand-primary">%</span>
              <span className="ml-3 inline-flex items-center gap-1 text-sm font-bold text-brand-primary tnum">
                <ArrowUpTiny /> +2.41% (24H)
              </span>
            </div>
          </div>

          <div className="hidden gap-1.5 text-[11px] sm:flex">
            {["1M", "6M", "1Y", "3Y", "ALL"].map((t, i) => (
              <span
                key={t}
                className={`rounded-md px-2.5 py-1 font-bold ${
                  i === 3
                    ? "bg-brand-primary text-white"
                    : "border border-white/10 text-white/55"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <HeroChart />

        {/* 하단 stat 바 */}
        <div className="mt-6 grid grid-cols-4 divide-x divide-white/10 border-t border-white/10 pt-5 text-center">
          {[
            { l: "샤프", v: "2.41" },
            { l: "MDD", v: "-12.8%" },
            { l: "승률", v: "63.1%" },
            { l: "평균 보유", v: "4.2h" },
          ].map((s) => (
            <div key={s.l} className="px-2">
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
                {s.l}
              </div>
              <div className="mt-1.5 text-base font-extrabold text-white tnum">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 좌 떠 있는 카드 */}
      <div className="card-dark absolute -left-10 -top-10 hidden w-56 p-4 shadow-darkDepth lg:block">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
          <span className="live-dot" /> 활성 포지션
        </div>
        <ul className="mt-3 space-y-2 text-sm">
          {[
            { sym: "BTC/USDT", pnl: "+2.41%", up: true },
            { sym: "ETH/USDT", pnl: "+1.08%", up: true },
            { sym: "SOL/USDT", pnl: "-0.32%", up: false },
          ].map((r) => (
            <li key={r.sym} className="flex items-center justify-between">
              <span className="font-medium text-white">{r.sym}</span>
              <span
                className={`font-bold tnum ${
                  r.up ? "text-brand-primary" : "text-rose-400"
                }`}
              >
                {r.pnl}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 우 떠 있는 카드 */}
      <div className="card-dark absolute -right-8 -bottom-10 hidden w-56 p-4 shadow-darkDepth lg:block">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
          오늘의 시그널
        </div>
        <div className="mt-3 space-y-2 text-sm">
          {[
            { t: "LONG", s: "BTC/USDT", time: "13분 전" },
            { t: "EXIT", s: "ETH/USDT", time: "27분 전" },
            { t: "LONG", s: "ADA/USDT", time: "1시간 전" },
          ].map((r, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={`rounded-sm px-1.5 py-0.5 text-[10px] font-extrabold ${
                    r.t === "LONG"
                      ? "bg-brand-primary/20 text-brand-primary"
                      : "bg-white/10 text-white/70"
                  }`}
                >
                  {r.t}
                </span>
                <span className="font-medium text-white">{r.s}</span>
              </div>
              <span className="text-xs text-white/45">{r.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroChart() {
  const points = [
    32, 36, 30, 42, 50, 46, 56, 62, 58, 70, 78, 72, 86, 92, 88, 100, 110, 118,
    124, 132, 140, 138, 150, 162, 158, 170,
  ];
  const w = 1000;
  const h = 160;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - ((p - min) / (max - min)) * (h - 24) - 12;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-6 h-32 w-full md:h-40">
      <defs>
        <linearGradient id="hc-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00B783" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#00B783" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* baseline */}
      {[0.25, 0.5, 0.75].map((g) => (
        <line
          key={g}
          x1="0"
          x2={w}
          y1={h * g}
          y2={h * g}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      ))}
      <path d={area} fill="url(#hc-area)" />
      <path
        d={path}
        fill="none"
        stroke="#00B783"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 마지막 점 */}
      <circle
        cx={w}
        cy={h - ((points[points.length - 1] - min) / (max - min)) * (h - 24) - 12}
        r="4"
        fill="#00B783"
      />
      <circle
        cx={w}
        cy={h - ((points[points.length - 1] - min) / (max - min)) * (h - 24) - 12}
        r="8"
        fill="#00B783"
        opacity="0.25"
      />
    </svg>
  );
}

/* ──────────────────────────────────────────────────── */
/* Marquee Bar — 거래소 + 기능                          */
/* ──────────────────────────────────────────────────── */

function MarqueeBar() {
  const exchanges = [
    "Binance",
    "Upbit",
    "Bybit",
    "OKX",
    "Bithumb",
    "Coinbase",
    "Kraken",
    "Bitget",
  ];
  return (
    <section className="relative border-b border-brand-line bg-white py-10">
      <div className="container-x mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
          <span className="h-px w-8 bg-brand-line" />
          연동 거래소
        </div>
        <div className="hidden text-xs text-brand-muted md:block">
          API Key 한 번 등록 · 출금 권한은 절대 부여 X
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-track gap-12 px-6">
          {[...exchanges, ...exchanges, ...exchanges].map((name, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-2 text-2xl font-extrabold tracking-tight text-brand-text/40 transition-colors hover:text-brand-text md:text-3xl"
            >
              <ExchangeDot />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────── */
/* Problem - 대비형                                     */
/* ──────────────────────────────────────────────────── */

function ProblemSection() {
  return (
    <section className="border-b border-brand-line section-padding">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
            The Problem
          </span>
          <h2 className="mt-4 section-title">
            개인 투자자가 늘 지는 이유,
            <br />
            대부분 <span className="accent-underline">‘사람’</span> 이라서입니다.
          </h2>
          <p className="mt-5 section-sub">
            감정, 시간, 경험. 셋 중 하나라도 부족하면 시장은 가차없습니다. 우리는
            이 세 가지를 알고리즘으로 대체합니다.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* 수동 매매 */}
          <div className="relative overflow-hidden rounded-xl border border-brand-line bg-brand-subtle p-8">
            <div className="stripes pointer-events-none absolute inset-0 opacity-40" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-md border border-rose-300/50 bg-white px-3 py-1 text-xs font-bold text-rose-500">
                <XCircle /> 수동 매매
              </div>
              <h3 className="mt-4 text-2xl font-extrabold text-brand-text">
                감정에 흔들리는 매매
              </h3>
              <ul className="mt-6 space-y-3 text-sm text-brand-subText">
                {[
                  "공포에 손절, 욕심에 추격매수",
                  "PC 앞에 앉아 있어야만 가능",
                  "야간/주말엔 시장 못 봄",
                  "일관성 없는 진입/청산 기준",
                  "지표 분석에 매주 수십 시간 소모",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <XMini /> <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 넥스트퀀트 */}
          <div className="lift relative overflow-hidden rounded-xl border border-brand-primary/30 bg-white p-8 shadow-soft">
            <div className="topline" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-md border border-brand-primary/40 bg-brand-primarySoft px-3 py-1 text-xs font-bold text-brand-primary">
                <CheckCircle /> 넥스트퀀트
              </div>
              <h3 className="mt-4 text-2xl font-extrabold text-brand-text">
                원칙대로 움직이는 알고리즘
              </h3>
              <ul className="mt-6 space-y-3 text-sm text-brand-subText">
                {[
                  "백테스팅으로 검증된 룰셋이 모든 매매 결정",
                  "PC 꺼져 있어도 클라우드 봇이 24시간 가동",
                  "야간·새벽 변동성도 놓치지 않음",
                  "MDD · 분할 진입 · 익절 기준이 항상 일관",
                  "전략 셋업 5분, 이후 클릭만으로 운용",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <CheckMiniGreen /> <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────── */
/* Solution Bento Grid                                  */
/* ──────────────────────────────────────────────────── */

function SolutionBento() {
  return (
    <section className="section-padding">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
              Solution
            </span>
            <h2 className="mt-4 section-title">
              데이터로 매매하고,
              <br />
              <span className="text-brand-muted">사람으로 살아갑니다.</span>
            </h2>
          </div>
          <p className="section-sub lg:max-w-md">
            넥스트퀀트는 시장 데이터 수집, 시그널, 리스크, 주문 실행까지의 모든
            과정을 자동화합니다. 당신이 해야 할 일은 단 하나 ㅡ ‘ON’ 버튼.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          {/* Big 1 */}
          <div className="lift relative overflow-hidden rounded-xl border border-brand-line bg-white p-7 md:col-span-2 md:row-span-2">
            <div className="topline" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-brand-primary">
              01 · MARKET ANALYSIS
            </span>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-brand-text md:text-3xl">
              실시간 오더북·유동성 분석으로
              <br />
              가장 안전한 진입 지점을 포착합니다.
            </h3>
            <p className="mt-4 max-w-xl text-sm text-brand-muted">
              호가창의 매수/매도 잔량, 슬리피지, 펀딩비를 1초 단위로 분석.
              시장의 미세한 왜곡을 포착해 가장 비용 효율적인 진입을 만듭니다.
            </p>

            <OrderbookMini />
          </div>

          {/* Right top */}
          <div className="lift relative overflow-hidden rounded-xl border border-brand-line bg-white p-6">
            <div className="topline" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-brand-primary">
              02 · RISK
            </span>
            <h3 className="mt-2.5 text-lg font-extrabold text-brand-text">
              MDD 기반 자동 손절
            </h3>
            <p className="mt-2 text-sm text-brand-muted">
              사전 설정한 최대 낙폭에 닿으면 100% 자동 손절. 감정이 끼어들 틈을
              차단합니다.
            </p>
            <RiskGaugeMini />
          </div>

          {/* Right bottom */}
          <div className="lift relative overflow-hidden rounded-xl border border-brand-line bg-white p-6">
            <div className="topline" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-brand-primary">
              03 · EXECUTION
            </span>
            <h3 className="mt-2.5 text-lg font-extrabold text-brand-text">
              분할 진입 / 청산
            </h3>
            <p className="mt-2 text-sm text-brand-muted">
              한 번에 다 사지 않습니다. TWAP / 아이스버그 알고리즘으로 시장
              충격을 최소화.
            </p>
            <div className="mt-4 flex items-end gap-1.5">
              {[14, 22, 30, 38, 28, 44, 36, 52, 44, 60].map((h, i) => (
                <span
                  key={i}
                  className="w-2 rounded-sm bg-brand-primary"
                  style={{ height: `${h}px`, opacity: 0.35 + i * 0.06 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OrderbookMini() {
  const asks = [
    { p: 68420, q: 0.42 },
    { p: 68410, q: 0.91 },
    { p: 68400, q: 1.45 },
    { p: 68390, q: 0.66 },
  ];
  const bids = [
    { p: 68380, q: 1.12 },
    { p: 68370, q: 0.83 },
    { p: 68360, q: 1.74 },
    { p: 68350, q: 0.55 },
  ];
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      <div className="rounded-lg border border-brand-line bg-brand-subtle p-4">
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.16em] text-brand-muted">
          <span>매도 호가</span>
          <span>수량 (BTC)</span>
        </div>
        <ul className="mt-2 space-y-1.5">
          {asks.map((r) => (
            <li
              key={r.p}
              className="relative flex items-center justify-between text-xs font-semibold tnum"
            >
              <span
                className="absolute inset-y-0 right-0 rounded-sm bg-rose-500/10"
                style={{ width: `${r.q * 32}%` }}
              />
              <span className="relative text-rose-500">${r.p}</span>
              <span className="relative text-brand-subText">{r.q}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border border-brand-line bg-brand-subtle p-4">
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.16em] text-brand-muted">
          <span>매수 호가</span>
          <span>수량 (BTC)</span>
        </div>
        <ul className="mt-2 space-y-1.5">
          {bids.map((r) => (
            <li
              key={r.p}
              className="relative flex items-center justify-between text-xs font-semibold tnum"
            >
              <span
                className="absolute inset-y-0 right-0 rounded-sm bg-brand-primary/15"
                style={{ width: `${r.q * 32}%` }}
              />
              <span className="relative text-brand-primary">${r.p}</span>
              <span className="relative text-brand-subText">{r.q}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function RiskGaugeMini() {
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.16em] text-brand-muted">
        <span>안전</span>
        <span>경고</span>
      </div>
      <div className="relative mt-1.5 h-2 w-full overflow-hidden rounded-full bg-brand-lineSoft">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-brand-primary"
          style={{ width: "32%" }}
        />
      </div>
      <div className="mt-3 flex items-baseline justify-between">
        <div>
          <div className="text-xs text-brand-muted">현재 MDD</div>
          <div className="text-2xl font-extrabold text-brand-text tnum">
            -3.2%
          </div>
        </div>
        <div className="text-right text-xs">
          <div className="text-brand-muted">한계</div>
          <div className="font-bold text-brand-text tnum">-10.0%</div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────── */
/* Live Preview - 대시보드 강조                          */
/* ──────────────────────────────────────────────────── */

function LivePreview() {
  return (
    <section className="border-y border-brand-line bg-brand-subtle section-padding">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
              Dashboard
            </span>
            <h2 className="mt-4 section-title">
              한 화면에서
              <br />
              모든 게 끝납니다.
            </h2>
            <p className="mt-5 section-sub">
              복잡한 코딩이나 명령어 없이, 마우스 클릭 몇 번이면 됩니다. 활성
              포지션, 누적 수익률, 승률, MDD를 한눈에. 전략 ON/OFF, 분할 기준,
              익절 슬라이더까지 즉시 조정 가능.
            </p>

            <ul className="mt-7 space-y-3 text-sm text-brand-subText">
              {[
                "한 화면에서 전 거래소 포지션 통합",
                "전략별 ON / OFF 토글",
                "MDD · 분할 · 익절 슬라이더 실시간 조정",
                "주간/월간 자동 리포트 생성",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckBox /> <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3">
              <Link href="/program" className="btn-ghost">
                기능 자세히 보기
              </Link>
              <div className="hidden items-center gap-2 text-xs text-brand-muted md:flex">
                <span className="kbd">⌘</span>
                <span className="kbd">K</span>
                <span>로 빠른 명령</span>
              </div>
            </div>
          </div>

          <div className="img-zoom relative overflow-hidden rounded-xl border border-brand-line bg-white shadow-depth">
            <CornerMarkerDark />
            <img
              src={SOLUTION_IMG}
              alt="대시보드 미리보기"
              className="aspect-[16/10] w-full object-cover"
              loading="lazy"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.35) 100%)",
              }}
            />
            {/* 떠 있는 stat */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div className="text-white">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                  Live Portfolio
                </div>
                <div className="mt-1 text-2xl font-extrabold tnum">
                  ₩ 24,310,820
                </div>
              </div>
              <span className="inline-flex items-center gap-2 rounded-md bg-brand-primary px-3 py-1.5 text-xs font-bold text-white">
                <span className="live-dot" /> 운용중
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────── */
/* Stats - dark, large numbers                          */
/* ──────────────────────────────────────────────────── */

function StatSection() {
  const stats = [
    { v: "+37.4%", l: "백테스팅 평균 연 수익률" },
    { v: "24/7", l: "무중단 실행 시간" },
    { v: "0.18s", l: "평균 시그널 응답" },
    { v: "8,200+", l: "누적 사용자" },
  ];
  return (
    <section
      className="relative isolate overflow-hidden border-y border-white/5 section-padding"
      style={{ background: "var(--ink)" }}
    >
      <div className="dot-grid-dark pointer-events-none absolute inset-0" />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
            By the numbers
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            숫자로 보는 <span className="text-brand-primary">넥스트퀀트</span>
          </h2>
        </div>

        <div className="mt-14 grid divide-x divide-white/10 border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className={`p-8 text-center ${i === 0 ? "sm:border-l-0" : ""}`}
            >
              <div className="text-5xl font-extrabold tracking-tightest text-white md:text-6xl num-display">
                {s.v}
              </div>
              <div className="mt-3 text-sm font-medium text-white/60">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/45">
          * 위 수치는 자체 백테스팅 결과 및 내부 통계 기준이며, 실제 수익률을
          보장하지 않습니다.
        </p>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────── */
/* Process - timeline                                   */
/* ──────────────────────────────────────────────────── */

function ProcessSection() {
  const steps = [
    {
      n: 1,
      t: "다운로드 & 설치",
      d: "Windows / macOS 1분 설치. 회원가입 후 즉시 무료체험을 시작할 수 있습니다.",
      img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=900&q=80",
    },
    {
      n: 2,
      t: "거래소 API 연결",
      d: "보유 거래소 API 키를 안전하게 연결. 출금 권한은 절대 부여하지 않습니다.",
      img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=900&q=80",
    },
    {
      n: 3,
      t: "전략 선택 & ON",
      d: "검증된 프리셋을 고르거나 슬라이더로 본인 성향에 맞게 조정 후 ON 버튼만.",
      img: "https://images.unsplash.com/photo-1554260570-9140fd3b7614?auto=format&fit=crop&w=900&q=80",
    },
  ];
  return (
    <section className="section-padding">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
            How it works
          </span>
          <h2 className="mt-4 section-title">3단계, 5분이면 충분합니다</h2>
          <p className="mt-5 section-sub">
            복잡한 코딩이나 시장 분석 없이, 누구나 5분이면 시작할 수 있습니다.
          </p>
        </div>

        <div className="relative mt-16">
          {/* timeline rail */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-brand-line lg:block" />
          <ol className="space-y-12">
            {steps.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <li
                  key={s.n}
                  className={`relative grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                    right ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* number node on rail */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-primary bg-white text-base font-extrabold text-brand-primary shadow-card lg:flex">
                    {s.n}
                  </div>

                  <div className="img-zoom relative overflow-hidden rounded-xl border border-brand-line bg-white shadow-soft">
                    <img
                      src={s.img}
                      alt={s.t}
                      className="aspect-[16/10] w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-bold tracking-[0.18em] text-brand-primary shadow-soft backdrop-blur">
                      STEP {String(s.n).padStart(2, "0")}
                    </div>
                  </div>

                  <div>
                    <div className="num-display text-[68px] font-black leading-none text-brand-text/10 md:text-[96px]">
                      0{s.n}
                    </div>
                    <h3 className="-mt-6 text-2xl font-extrabold tracking-tight text-brand-text md:text-3xl">
                      {s.t}
                    </h3>
                    <p className="mt-4 max-w-lg text-base text-brand-muted">
                      {s.d}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────── */
/* Testimonials                                         */
/* ──────────────────────────────────────────────────── */

function TestimonialSection() {
  const items = [
    {
      initial: "김",
      grad: ["#00B783", "#1FB8AB"] as const,
      name: "김민수",
      role: "직장인 / 35세",
      quote:
        "출근 전에 한 번, 퇴근 후에 한 번 확인만 합니다. 자는 사이에도 봇이 매매를 하니까 마음이 훨씬 편해졌어요.",
    },
    {
      initial: "이",
      grad: ["#3B82F6", "#6366F1"] as const,
      name: "이수진",
      role: "프리랜서 / 29세",
      quote:
        "감정적으로 손절하고 추격매수하던 습관이 사라졌습니다. 룰셋이 정해져 있으니 흔들릴 일이 없어요.",
    },
    {
      initial: "박",
      grad: ["#0F172A", "#334155"] as const,
      name: "박재호",
      role: "자영업자 / 41세",
      quote:
        "MDD 기반 자동 손절 덕분에 큰 손실을 피할 수 있었어요. 가게 일에 집중하면서도 자산을 운용할 수 있어 좋습니다.",
    },
  ];
  return (
    <section className="border-y border-brand-line bg-white section-padding">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
            Reviews
          </span>
          <h2 className="mt-4 section-title">실제 사용자들의 이야기</h2>
          <div className="mt-5 flex items-center justify-center gap-2 text-sm text-brand-muted">
            <div className="flex gap-0.5 text-brand-warn">
              {[1, 2, 3, 4, 5].map((s) => (
                <StarIcon key={s} />
              ))}
            </div>
            <span className="font-semibold text-brand-text tnum">4.9</span>
            <span>· 평균 만족도 (2,400+ 리뷰)</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <div
              key={t.name}
              className="lift card-soft relative flex h-full flex-col p-7"
            >
              <QuoteIcon />
              <p className="mt-4 text-[15px] text-brand-subText">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-brand-lineSoft pt-5">
                <Avatar
                  initial={t.initial}
                  from={t.grad[0]}
                  to={t.grad[1]}
                  id={i}
                />
                <div>
                  <div className="text-sm font-bold text-brand-text">
                    {t.name}
                  </div>
                  <div className="text-xs text-brand-muted">{t.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5 text-brand-warn">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <StarIcon key={s} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────── */
/* CTA                                                  */
/* ──────────────────────────────────────────────────── */

function CtaSection() {
  return (
    <section className="section-padding">
      <div className="container-x">
        <div
          className="relative isolate overflow-hidden rounded-xl border border-white/5 p-10 md:p-16"
          style={{ background: "var(--ink)" }}
        >
          <div className="line-grid-dark pointer-events-none absolute inset-0" />

          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
                Get started
              </span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tightest text-white md:text-6xl">
                감정 대신 데이터로,
                <br />
                <span className="text-brand-primary">지금</span> 시작하세요.
              </h2>
              <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg">
                신용카드 등록 없이 무료체험. 1분 설치로 24시간 자동매매를 바로
                경험해보세요.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-xs text-white/65">
                <span className="inline-flex items-center gap-1.5">
                  <CheckMini /> 14일 무료
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckMini /> 신용카드 불필요
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckMini /> 언제든 해지
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <Link
                href="/guide"
                className="btn-3d inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-primary px-8 py-4 text-base font-bold text-white shadow-glow transition-all hover:bg-brand-primaryDim lg:w-auto"
              >
                무료체험 다운로드
              </Link>
              <Link
                href="/performance"
                className="btn-outline-light w-full lg:w-auto"
              >
                실 운용 성과 보기
              </Link>
              <div className="mt-2 hidden items-center gap-3 text-xs text-white/55 lg:flex">
                <span className="kbd !bg-white/10 !text-white/80 !border-white/20">
                  ↵
                </span>
                <span>Enter로 다운로드 시작</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────── */
/* Icons / Decorations                                  */
/* ──────────────────────────────────────────────────── */

function Avatar({
  initial,
  from,
  to,
  id,
}: {
  initial: string;
  from: string;
  to: string;
  id: number;
}) {
  const gid = `avatar-grad-${id}`;
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12 shrink-0" aria-hidden>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="24" fill={`url(#${gid})`} />
      <text
        x="24"
        y="24"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="20"
        fontWeight="800"
        fill="#fff"
        fontFamily="Pretendard, sans-serif"
        letterSpacing="-0.5"
      >
        {initial}
      </text>
    </svg>
  );
}

function CornerMarkerWhite() {
  const C = ({ className }: { className: string }) => (
    <span
      className={`absolute h-3 w-3 border-white/35 ${className}`}
      aria-hidden
    />
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

function CornerMarkerDark() {
  const C = ({ className }: { className: string }) => (
    <span
      className={`absolute z-10 h-3 w-3 border-white/60 ${className}`}
      aria-hidden
    />
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

function CheckMini() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-brand-primary"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CheckMiniGreen() {
  return (
    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white">
      <svg
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

function CheckBox() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-primarySoft text-brand-primary">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

function XMini() {
  return (
    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-500/15 text-rose-500">
      <svg
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </span>
  );
}

function CheckCircle() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function XCircle() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <line x1="9" y1="9" x2="15" y2="15" />
      <line x1="15" y1="9" x2="9" y2="15" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-brand-primary/80"
    >
      <path d="M9 11H6.5C5.7 11 5 11.7 5 12.5V18c0 .6.4 1 1 1h5c.6 0 1-.4 1-1v-5c0-2.2-1.8-4-4-4V7c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1h2zM20 11h-2.5c-.8 0-1.5.7-1.5 1.5V18c0 .6.4 1 1 1h5c.6 0 1-.4 1-1v-5c0-2.2-1.8-4-4-4V7c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1h2z" />
    </svg>
  );
}

function ArrowUpTiny() {
  return (
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
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

function ExchangeDot() {
  return (
    <span
      className="inline-block h-2 w-2 rounded-full bg-brand-primary/70"
      aria-hidden
    />
  );
}
