import Link from "next/link";

const HERO_IMG =
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1800&q=80";
const PROBLEM_IMG =
  "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=1200&q=80";
const SOLUTION_IMG =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <StatSection />
      <HowItWorks />
      <TestimonialSection />
      <CtaSection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-brand-line">
      <img
        src={HERO_IMG}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="eager"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "rgba(8,15,30,0.78)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="container-x relative pb-32 pt-32 text-center md:pb-48 md:pt-44">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-[88px]">
            감정을 빼고
            <br />
            <span className="gradient-text-bright">원칙을 더하다.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base text-white/75 md:text-xl">
            시장의 변동성에 흔들리지 마세요.
            <br className="hidden md:block" />
            데이터와 알고리즘이 당신이 잠든 순간에도
            <br className="hidden md:block" />
            완벽한 타이밍에 기계적으로 진입하고 청산합니다.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

          <p className="mt-6 text-xs text-white/55">
            Windows / macOS 지원 · 신용카드 등록 없이 시작 · 1분 설치
          </p>
        </div>

        {/* Floating dashboard preview */}
        <FloatingStats />
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/40 md:block">
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em]">
          Scroll
          <span className="block h-8 w-px animate-pulse bg-white/40" />
        </div>
      </div>
    </section>
  );
}

function FloatingStats() {
  return (
    <div className="relative mx-auto mt-20 hidden max-w-5xl md:block">
      {/* center card: live equity chart */}
      <div className="glass-dark relative overflow-hidden rounded-xl p-6 text-left">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
              누적 수익률
            </div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-white md:text-5xl">
                +37.4
              </span>
              <span className="text-xl font-bold text-brand-primary">%</span>
              <span className="ml-2 inline-flex items-center gap-1.5 rounded-md bg-brand-primary/15 px-2 py-0.5 text-[11px] font-bold text-brand-primary">
                <span className="live-dot" /> LIVE
              </span>
            </div>
          </div>
          <div className="hidden gap-1.5 text-[11px] sm:flex">
            {["1M", "6M", "1Y", "3Y"].map((t, i) => (
              <span
                key={t}
                className={`rounded-md px-2.5 py-1 font-bold ${
                  i === 3
                    ? "bg-brand-primary text-white"
                    : "bg-white/5 text-white/55"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <MiniChart />
      </div>

      {/* floating mini cards */}
      <div className="glass-dark absolute -left-10 -top-10 hidden w-56 rounded-lg p-4 animate-float lg:block">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
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
                className={`text-xs font-bold ${
                  r.up ? "text-brand-primary" : "text-rose-400"
                }`}
              >
                {r.pnl}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="glass-dark absolute -right-8 -bottom-12 hidden w-52 rounded-lg p-4 animate-float-slow lg:block"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
          승률 / 평균 보유
        </div>
        <div className="mt-2 flex items-end justify-between">
          <div>
            <div className="text-3xl font-extrabold text-white">63.1%</div>
            <div className="text-[11px] text-white/55">최근 30일</div>
          </div>
          <div className="text-right">
            <div className="text-base font-bold text-brand-primary">4.2h</div>
            <div className="text-[11px] text-white/55">평균 보유</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniChart() {
  const points = [
    32, 36, 30, 42, 50, 46, 56, 62, 58, 70, 78, 72, 86, 92, 88, 100, 110, 118,
  ];
  const w = 1000;
  const h = 140;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - ((p - min) / (max - min)) * (h - 20) - 10;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-6 h-32 w-full">
      <defs>
        <linearGradient id="hero-chart-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00B783" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#00B783" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hero-chart-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6EE7C2" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#hero-chart-area)" />
      <path
        d={path}
        fill="none"
        stroke="url(#hero-chart-stroke)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TrustBar() {
  const items = [
    "실시간 오더북 분석",
    "MDD 기반 자동 손절",
    "분할 진입 / 청산",
    "백테스팅 검증 알고리즘",
    "다중 거래소 연동",
    "직관적인 대시보드",
    "24/7 모니터링",
    "전략 커스터마이징",
  ];
  return (
    <section className="border-b border-brand-line bg-white">
      <div className="container-x flex items-center gap-6 overflow-hidden py-5">
        <span className="hidden shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted md:inline">
          KEY FEATURES
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex w-max animate-ticker gap-10">
            {[...items, ...items].map((it, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-2 text-sm font-medium text-brand-subText"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-primary" />
                {it}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    {
      title: "감정에 흔들리는 매매",
      desc: "공포에 손절하고, 욕심에 추격매수합니다. 사람의 감정은 가장 비싼 비용입니다.",
      icon: <EmotionIcon />,
    },
    {
      title: "잠 못 드는 24시간 시장",
      desc: "암호화폐와 글로벌 시장은 멈추지 않지만, 당신은 잠들어야 합니다. 결정적 순간을 놓칩니다.",
      icon: <MoonIcon />,
    },
    {
      title: "복잡한 진입/청산 타이밍",
      desc: "수백 개 지표와 차트 패턴, 그러나 일관된 매매 기준 없이는 결국 운에 맡기게 됩니다.",
      icon: <TargetIcon />,
    },
  ];
  return (
    <section className="border-b border-brand-line section-padding">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-xl border border-brand-line bg-white shadow-card">
              <img
                src={PROBLEM_IMG}
                alt="복잡한 시장 차트"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, rgba(8,15,30,0.45) 100%)",
                }}
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                    Market Volatility
                  </div>
                  <div className="mt-1 text-lg font-bold">
                    예측 불가능한 시장
                  </div>
                </div>
                <span className="rounded-md bg-rose-500/90 px-2.5 py-1 text-xs font-bold">
                  -8.4%
                </span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold tracking-[0.18em] text-brand-primary">
              WHY AUTO-TRADING
            </span>
            <h2 className="mt-3 section-title">
              개인 투자자가 늘 지는 이유,
              <br />
              <span className="text-brand-muted">
                대부분 ‘사람’이라서입니다.
              </span>
            </h2>
            <ul className="mt-8 space-y-4">
              {problems.map((p) => (
                <li
                  key={p.title}
                  className="lift flex gap-4 rounded-lg border border-brand-lineSoft bg-white p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-primarySoft text-brand-primary">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-text">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-brand-muted">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const cards = [
    {
      tag: "01",
      title: "원칙 기반 시그널",
      desc: "수년간 백테스팅으로 검증된 진입/청산 룰셋. 모든 매매는 사람의 판단이 아닌, 검증된 알고리즘 위에서 일어납니다.",
      icon: <BoltIcon />,
    },
    {
      tag: "02",
      title: "리스크 컨트롤",
      desc: "MDD 기반 자동 손절, 분할 진입, 마진 비율 단계 알림으로 손실은 최소화하고 수익은 끝까지 따라갑니다.",
      icon: <ShieldIcon />,
    },
    {
      tag: "03",
      title: "24시간 무중단 실행",
      desc: "당신이 잠든 새벽에도 봇이 시장을 본다. 결정적 순간의 변동성을 놓치지 않습니다.",
      icon: <ClockGlyphIcon />,
    },
  ];
  return (
    <section className="relative overflow-hidden bg-white section-padding">
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold tracking-[0.18em] text-brand-primary">
            SOLUTION
          </span>
          <h2 className="mt-3 section-title">
            그래서 우리는 <span className="gradient-text">알고리즘</span>에
            맡깁니다.
          </h2>
          <p className="mt-5 section-sub">
            철저한 데이터 분석과 정교한 알고리즘이 결합된 넥스트퀀트의 트레이딩
            엔진을 만나보세요.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.tag}
              className="gradient-border lift relative bg-white p-7"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-brand-primarySoft px-3 py-1 text-xs font-bold tracking-[0.18em] text-brand-primary">
                  {c.tag}
                </span>
                <span className="h-px flex-1 bg-brand-lineSoft" />
              </div>
              <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary text-white shadow-soft">
                {c.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold text-brand-text">
                {c.title}
              </h3>
              <p className="mt-3 text-sm text-brand-muted">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="lift mt-14 grid gap-10 rounded-xl border border-brand-line bg-white p-8 shadow-card lg:grid-cols-[1.1fr_1fr] lg:items-center lg:p-10">
          <div className="relative overflow-hidden rounded-lg border border-brand-line">
            <img
              src={SOLUTION_IMG}
              alt="대시보드 사용 이미지"
              className="aspect-[16/10] w-full object-cover"
              loading="lazy"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.25) 100%)",
              }}
            />
          </div>
          <div>
            <span className="text-sm font-semibold tracking-[0.18em] text-brand-accent">
              DASHBOARD
            </span>
            <h3 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              복잡한 코딩 없이,
              <br />
              <span className="text-brand-primary">클릭 몇 번으로</span>
            </h3>
            <p className="mt-5 text-base text-brand-muted">
              현재 포지션, 누적 수익률, 승률을 한 화면에서. 마우스 클릭 몇
              번이면 전략의 ON/OFF, 분할 진입 기준까지 즉시 조정할 수 있는
              직관적 인터페이스를 제공합니다.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-brand-subText">
              {[
                "실시간 자산 / 포지션 통합 뷰",
                "전략별 ON/OFF 토글",
                "MDD · 분할 진입 · 익절 기준 슬라이더",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckIcon />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatSection() {
  const stats = [
    { v: "+37.4%", label: "백테스팅 평균 연 수익률" },
    { v: "24/7", label: "무중단 실행 시간" },
    { v: "0.18s", label: "평균 시그널 응답" },
    { v: "8,200+", label: "누적 사용자" },
  ];
  return (
    <section
      className="relative isolate overflow-hidden border-y border-brand-line section-padding"
      style={{ background: "#0b1426" }}
    >
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-[0.18em] text-brand-primary">
            BY THE NUMBERS
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            숫자로 보는 <span className="text-brand-primary">넥스트퀀트</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass-dark lift rounded-xl p-7 text-center"
            >
              <div className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                {s.v}
              </div>
              <div className="mt-3 text-sm font-medium text-white/65">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-white/50">
          * 위 수치는 자체 백테스팅 결과 및 내부 통계 기준이며, 실제 수익률을
          보장하지 않습니다.
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "STEP 01",
      title: "다운로드 & 설치",
      desc: "Windows / macOS 1분 설치. 회원가입 후 즉시 무료체험을 시작할 수 있습니다.",
      icon: <DownloadGlyphIcon />,
    },
    {
      n: "STEP 02",
      title: "거래소 API 연결",
      desc: "보유 거래소(Binance, Upbit, Bybit 등) API 키를 안전하게 연결합니다. 출금 권한은 절대 부여하지 않습니다.",
      icon: <LinkIcon />,
    },
    {
      n: "STEP 03",
      title: "전략 선택 & 시작",
      desc: "검증된 프리셋 전략을 선택하거나, 슬라이더로 본인의 리스크 성향에 맞게 조정 후 ON 버튼만 누르세요.",
      icon: <PowerIcon />,
    },
  ];
  return (
    <section className="section-padding">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold tracking-[0.18em] text-brand-accent">
            HOW IT WORKS
          </span>
          <h2 className="mt-3 section-title">
            3단계로 시작하는 자동매매
          </h2>
          <p className="mt-5 section-sub">
            복잡한 코딩이나 시장 분석 없이, 누구나 5분이면 시작할 수 있습니다.
          </p>
        </div>

        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-brand-line to-transparent md:block" />
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="lift relative overflow-hidden rounded-xl border border-brand-line bg-white p-7 shadow-soft"
            >
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-primary bg-white text-sm font-extrabold text-brand-primary">
                    {i + 1}
                  </div>
                  <div className="text-brand-primary">{s.icon}</div>
                </div>
                <div className="mt-5 text-xs font-bold tracking-[0.18em] text-brand-primary">
                  {s.n}
                </div>
                <h3 className="mt-2 text-xl font-bold text-brand-text">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-brand-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  const items = [
    {
      initial: "김",
      gradient: ["#00B783", "#1FB8AB"] as const,
      name: "김민수",
      role: "직장인 / 35세",
      quote:
        "출근 전에 한 번, 퇴근 후에 한 번 확인만 합니다. 자는 사이에도 봇이 매매를 하니까 마음이 훨씬 편해졌어요.",
    },
    {
      initial: "이",
      gradient: ["#3B82F6", "#6366F1"] as const,
      name: "이수진",
      role: "프리랜서 / 29세",
      quote:
        "감정적으로 손절하고 추격매수하던 습관이 사라졌습니다. 룰셋이 정해져 있으니 흔들릴 일이 없어요.",
    },
    {
      initial: "박",
      gradient: ["#0F172A", "#334155"] as const,
      name: "박재호",
      role: "자영업자 / 41세",
      quote:
        "MDD 기반 자동 손절 덕분에 큰 손실을 피할 수 있었어요. 가게 일에 집중하면서도 자산을 운용할 수 있어 좋습니다.",
    },
  ];
  return (
    <section className="border-y border-brand-line bg-brand-subtle section-padding">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold tracking-[0.18em] text-brand-primary">
            REVIEWS
          </span>
          <h2 className="mt-3 section-title">실제 사용자들의 이야기</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <div
              key={t.name}
              className="gradient-border lift relative flex h-full flex-col bg-white p-7"
            >
              <QuoteIcon />
              <p className="mt-4 text-sm text-brand-subText">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-brand-lineSoft pt-5">
                <Avatar
                  initial={t.initial}
                  from={t.gradient[0]}
                  to={t.gradient[1]}
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

function CtaSection() {
  return (
    <section className="section-padding">
      <div className="container-x">
        <div
          className="relative isolate overflow-hidden rounded-xl border border-brand-line p-10 md:p-16"
          style={{ background: "#0b1426" }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold tracking-[0.18em] text-brand-primary">
                GET STARTED
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                감정 대신 데이터로,
                <br />
                <span className="text-brand-primary">지금 바로 시작하세요.</span>
              </h2>
              <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg">
                신용카드 등록 없이 무료체험. 1분 설치로 24시간 자동매매를 바로
                경험해보세요.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-xs text-white/55">
                <span className="inline-flex items-center gap-1.5">
                  <CheckIcon small /> 14일 무료
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckIcon small /> 신용카드 불필요
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckIcon small /> 언제든 해지
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
                href="/program"
                className="btn-outline-light w-full lg:w-auto"
              >
                프로그램 자세히 보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- icons & avatar ---- */

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

function CheckIcon({ small = false }: { small?: boolean }) {
  if (small) {
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
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primarySoft text-brand-primary">
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

function QuoteIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-brand-primary/85"
    >
      <path d="M9 11H6.5C5.7 11 5 11.7 5 12.5V18c0 .6.4 1 1 1h5c.6 0 1-.4 1-1v-5c0-2.2-1.8-4-4-4V7c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1h2zM20 11h-2.5c-.8 0-1.5.7-1.5 1.5V18c0 .6.4 1 1 1h5c.6 0 1-.4 1-1v-5c0-2.2-1.8-4-4-4V7c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1h2z" />
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

function EmotionIcon() {
  return (
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
      <circle cx="12" cy="12" r="9" />
      <path d="M8 15s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}

function MoonIcon() {
  return (
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
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function TargetIcon() {
  return (
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
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ClockGlyphIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </svg>
  );
}

function DownloadGlyphIcon() {
  return (
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function LinkIcon() {
  return (
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
      <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07L11 5" />
      <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07L13 19" />
    </svg>
  );
}

function PowerIcon() {
  return (
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
      <path d="M18.36 6.64A9 9 0 1 1 5.64 6.64" />
      <line x1="12" y1="2" x2="12" y2="12" />
    </svg>
  );
}
