import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <ProblemSection />
      <BenefitSection />
      <StatSection />
      <CtaSection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-grid opacity-60" />

      <div className="container-x relative section-padding pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-line bg-brand-card/60 px-4 py-1.5 text-xs font-medium text-brand-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-primary" />
            </span>
            24시간 실시간 자동매매 시스템 가동 중
          </div>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.15] tracking-tight md:text-6xl lg:text-7xl">
            감정을 빼고
            <br />
            <span className="gradient-text">원칙을 더하다.</span>
          </h1>

          <p className="mt-7 text-pretty text-base leading-relaxed text-brand-muted md:text-xl">
            시장의 변동성에 흔들리지 마세요.
            <br className="hidden md:block" />
            철저한 데이터 분석과 정교한 알고리즘이 당신이 잠든 순간에도
            <br className="hidden md:block" />
            완벽한 타이밍에 기계적으로 진입하고 청산합니다.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/guide" className="btn-primary group">
              무료체험 다운로드
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
            <Link href="/program" className="btn-ghost">
              프로그램 자세히 보기
            </Link>
          </div>

          <p className="mt-5 text-xs text-brand-muted">
            Windows / macOS 지원 · 신용카드 등록 없이 시작
          </p>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const candles = [
    { h: 40, body: 18, up: true },
    { h: 56, body: 32, up: false },
    { h: 48, body: 22, up: true },
    { h: 64, body: 40, up: true },
    { h: 52, body: 26, up: false },
    { h: 72, body: 46, up: true },
    { h: 60, body: 36, up: true },
    { h: 80, body: 52, up: true },
    { h: 68, body: 38, up: false },
    { h: 86, body: 60, up: true },
    { h: 76, body: 42, up: true },
    { h: 92, body: 64, up: true },
  ];

  return (
    <div className="relative mx-auto mt-16 max-w-5xl">
      <div className="glass-card relative overflow-hidden rounded-2xl p-1 shadow-[0_30px_80px_-30px_rgba(0,229,168,0.45)]">
        <div className="rounded-[14px] bg-brand-bg/80 p-5 md:p-7">
          <div className="flex items-center justify-between border-b border-brand-line pb-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>
              <span className="text-sm font-semibold tracking-tight">
                NextQuant Terminal
              </span>
            </div>
            <span className="rounded-full bg-brand-primary/15 px-2.5 py-1 text-[10px] font-bold tracking-wider text-brand-primary">
              ● LIVE
            </span>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-xs text-brand-muted">BTC / USDT</div>
                  <div className="mt-1 text-2xl font-extrabold md:text-3xl">
                    $108,452.20
                  </div>
                  <div className="mt-1 text-xs font-semibold text-brand-primary">
                    +2.84% (+$3,002.10)
                  </div>
                </div>
                <div className="hidden gap-1.5 md:flex">
                  {["1m", "5m", "15m", "1H", "4H", "1D"].map((t, i) => (
                    <span
                      key={t}
                      className={`rounded-md px-2 py-1 text-[10px] font-semibold ${
                        i === 3
                          ? "bg-brand-primary/15 text-brand-primary"
                          : "text-brand-muted"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mt-5 flex h-44 items-end gap-1.5 md:gap-2">
                {candles.map((c, i) => (
                  <div
                    key={i}
                    className="relative flex flex-1 items-end justify-center"
                  >
                    <div
                      className="absolute w-px bg-brand-muted/40"
                      style={{
                        height: `${c.h + 12}%`,
                        bottom: `${Math.max(0, c.h - c.body - 4)}%`,
                      }}
                    />
                    <div
                      className={`relative w-full rounded-sm ${
                        c.up
                          ? "bg-brand-primary shadow-[0_0_12px_rgba(0,229,168,0.4)]"
                          : "bg-red-400/80"
                      }`}
                      style={{ height: `${c.body}%` }}
                    />
                  </div>
                ))}
                <svg
                  className="pointer-events-none absolute inset-0"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M0,75 C15,68 25,72 35,60 S55,40 70,28 85,22 100,15"
                    fill="none"
                    stroke="rgba(61,139,255,0.6)"
                    strokeWidth="0.6"
                    strokeDasharray="1.5 1.5"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-3">
              <StatRow label="누적 수익률" value="+187.4%" positive />
              <StatRow label="승률 (30일)" value="76.2%" positive />
              <StatRow label="MDD" value="-4.81%" />
              <StatRow label="가동 시간" value="24h 03m" />
              <div className="mt-4 rounded-xl border border-brand-primary/40 bg-brand-primary/5 p-4">
                <div className="text-[10px] font-bold uppercase tracking-wider text-brand-primary">
                  Auto Strategy
                </div>
                <div className="mt-1.5 text-sm font-semibold">
                  Mean Reversion · 보수적
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-brand-line">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-brand-primary to-brand-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -left-12 top-12 hidden h-24 w-24 rounded-full bg-brand-primary/30 blur-3xl md:block" />
      <div className="absolute -right-12 bottom-12 hidden h-32 w-32 rounded-full bg-brand-accent/30 blur-3xl md:block" />
    </div>
  );
}

function StatRow({
  label,
  value,
  positive = false,
}: {
  label: string;
  value: string;
  positive?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-brand-line bg-brand-card/40 px-4 py-3">
      <span className="text-xs text-brand-muted">{label}</span>
      <span
        className={`text-sm font-bold ${
          positive ? "text-brand-primary" : "text-brand-text"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function Ticker() {
  const items = [
    "BTC +2.84%",
    "ETH +1.92%",
    "SOL +5.41%",
    "XRP +0.74%",
    "BNB +1.18%",
    "ADA -0.32%",
    "DOGE +3.07%",
    "AVAX +2.21%",
    "DOT +0.89%",
    "LINK +1.55%",
  ];
  const list = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-brand-line bg-brand-surface/40 py-3">
      <div className="flex animate-ticker gap-10 whitespace-nowrap text-sm font-semibold tracking-wide">
        {list.map((t, i) => {
          const isUp = !t.includes("-");
          return (
            <span
              key={i}
              className={`inline-flex items-center gap-2 ${
                isUp ? "text-brand-primary" : "text-red-400/90"
              }`}
            >
              <span className="text-brand-text/70">{t.split(" ")[0]}</span>
              <span>{t.split(" ")[1]}</span>
              <span className="text-brand-muted/40">·</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

function ProblemSection() {
  return (
    <section className="section-padding">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold tracking-[0.18em] text-brand-primary">
            WHY NEXTQUANT
          </span>
          <h2 className="mt-4 section-title">
            아직도 <span className="gradient-text">감정에 이끌려</span>
            <br />
            매매하시나요?
          </h2>
          <p className="mt-6 section-sub">
            확신과 불안 사이, 차트 앞에서 흘려보낸 시간들.
            <br />
            넥스트퀀트는 사람의 망설임을 시스템의 원칙으로 대체합니다.
          </p>
        </div>
      </div>
    </section>
  );
}

function BenefitSection() {
  const benefits = [
    {
      tag: "01",
      title: "뇌동매매 방지",
      desc: "정해진 손절가와 익절 원칙을 0.001초의 오차도 없이 기계적으로 수행합니다.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
        >
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      ),
    },
    {
      tag: "02",
      title: "24시간 리스크 관리",
      desc: "실시간 마진 비율과 시장 유동성을 모니터링하여 갑작스러운 폭락에도 자산을 안전하게 보호합니다.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      tag: "03",
      title: "시간의 자유",
      desc: "온종일 차트 앞에 얽매여 있던 일상에서 벗어나, 완벽하게 자동화된 자산 증식을 경험하세요.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative section-padding">
      <div className="container-x">
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <article
              key={b.tag}
              className="group relative overflow-hidden rounded-2xl border border-brand-line bg-brand-card/40 p-8 transition-all hover:-translate-y-1 hover:border-brand-primary/60 hover:shadow-[0_30px_60px_-30px_rgba(0,229,168,0.4)]"
            >
              <div className="absolute right-6 top-6 text-5xl font-black text-brand-line/80 transition-colors group-hover:text-brand-primary/30">
                {b.tag}
              </div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary ring-1 ring-inset ring-brand-primary/20">
                {b.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold leading-tight md:text-2xl">
                {b.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {b.desc}
              </p>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatSection() {
  const stats = [
    { value: "24/7", label: "무중단 실시간 매매" },
    { value: "0.001s", label: "주문 평균 실행 속도" },
    { value: "99.97%", label: "시스템 가동률" },
    { value: "MDD", label: "기준 자동 리스크 차단" },
  ];

  return (
    <section className="section-padding">
      <div className="container-x">
        <div className="glass-card relative overflow-hidden rounded-3xl px-8 py-14 md:px-14">
          <div className="absolute inset-0 bg-hero-glow opacity-50" />
          <div className="relative grid gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="gradient-text text-4xl font-extrabold md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-brand-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="section-padding">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-brand-line bg-gradient-to-br from-brand-card to-brand-surface px-8 py-16 text-center md:px-14 md:py-20">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-primary/20 blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand-accent/20 blur-[100px]" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="section-title">
              지금, 원칙이 만드는
              <br />
              <span className="gradient-text">새로운 투자</span>를 시작하세요.
            </h2>
            <p className="mt-5 section-sub">
              회원가입 후 1분이면 충분합니다. 무료체험으로 직접 확인하세요.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/guide" className="btn-primary">
                무료체험 다운로드
              </Link>
              <Link href="/support" className="btn-ghost">
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
