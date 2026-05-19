import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "성과 | 넥스트퀀트 NEXT QUANT",
  description:
    "백테스팅 데이터와 실전 운용 결과 기반의 누적 수익률 · MDD · 승률 등 핵심 지표를 공개합니다.",
};

const COVER_IMG =
  "https://images.unsplash.com/photo-1554260570-9140fd3b7614?auto=format&fit=crop&w=1400&q=80";
const TEAM_IMG =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80";

export default function PerformancePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <EquityCurve />
      <MonthlyTable />
      <StrategyBreakdown />
      <Disclaimer />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line">
      <div className="absolute inset-0 bg-hero-soft" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="container-x relative section-padding pt-24 md:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <span className="eyebrow">PERFORMANCE</span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
              데이터로 증명하는
              <br />
              <span className="gradient-text">투명한 성과</span>
            </h1>
            <p className="mt-7 section-sub">
              지난 36개월간의 백테스팅 결과와 실전 운용 데이터를 가공 없이
              공개합니다. 모든 지표는 동일한 자본 기준으로 계산되었습니다.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-brand-line bg-white shadow-elevated">
            <img
              src={COVER_IMG}
              alt="성과 차트"
              className="aspect-[5/4] w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    { v: "+37.4%", label: "연 평균 수익률", tone: "primary" },
    { v: "-12.8%", label: "최대 낙폭(MDD)", tone: "warn" },
    { v: "63.1%", label: "전략 평균 승률", tone: "accent" },
    { v: "2.41", label: "샤프 지수", tone: "primary" },
  ];
  return (
    <section className="border-b border-brand-line bg-white section-padding">
      <div className="container-x">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-brand-lineSoft bg-white p-7"
            >
              <div className="text-4xl font-extrabold tracking-tight md:text-5xl">
                <span
                  className={
                    s.tone === "warn"
                      ? "text-rose-500"
                      : s.tone === "accent"
                        ? "text-brand-accent"
                        : "gradient-text"
                  }
                >
                  {s.v}
                </span>
              </div>
              <div className="mt-3 text-sm font-medium text-brand-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EquityCurve() {
  const points = [
    100, 102, 99, 104, 108, 111, 117, 121, 119, 126, 132, 130, 138, 142, 145,
    149, 155, 152, 160, 165, 168, 172, 176, 174, 181, 188, 193, 199, 203, 209,
    214, 219, 224, 229, 233, 237,
  ];
  const w = 1100;
  const h = 320;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - ((p - min) / (max - min)) * (h - 30) - 15;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;

  return (
    <section className="section-padding">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold tracking-[0.18em] text-brand-primary">
            EQUITY CURVE
          </span>
          <h2 className="mt-3 section-title">36개월 누적 수익 곡선</h2>
          <p className="mt-5 section-sub">
            동일 자본금 100을 기준으로 한 누적 자산 변화. 변동성에도 우상향
            추세를 유지합니다.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-brand-line bg-white p-6 shadow-card md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
                기간 수익
              </div>
              <div className="mt-1 text-4xl font-extrabold tracking-tight text-brand-text md:text-5xl">
                <span className="gradient-text">+137.0%</span>
              </div>
            </div>
            <div className="flex gap-2 text-xs">
              {["1M", "6M", "1Y", "3Y", "ALL"].map((t, i) => (
                <span
                  key={t}
                  className={`rounded-md px-3 py-1 font-bold ${
                    i === 3
                      ? "bg-brand-primary text-white"
                      : "bg-brand-subtle text-brand-muted"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <svg
              viewBox={`0 0 ${w} ${h}`}
              className="h-auto w-full min-w-[640px]"
            >
              <defs>
                <linearGradient id="eq-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00B783" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="#00B783" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0.25, 0.5, 0.75].map((g) => (
                <line
                  key={g}
                  x1="0"
                  x2={w}
                  y1={h * g}
                  y2={h * g}
                  stroke="#EEF1F6"
                  strokeWidth="1"
                />
              ))}
              <path d={area} fill="url(#eq-area)" />
              <path d={path} fill="none" stroke="#00B783" strokeWidth="2.5" />
            </svg>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-brand-muted">
            <span>2023.05</span>
            <span>2024.05</span>
            <span>2025.05</span>
            <span>2026.05</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MonthlyTable() {
  const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
  const data2024 = [2.3, -1.1, 3.4, 4.2, 2.8, -0.6, 5.1, 3.0, 2.2, 4.5, 1.8, 3.7];
  const data2025 = [3.1, 2.4, -0.9, 5.6, 4.0, 3.2, 1.8, 4.4, 2.1, -1.2, 3.6, 4.9];

  const yearTotal = (arr: number[]) =>
    arr.reduce((acc, v) => acc * (1 + v / 100), 1) * 100 - 100;

  return (
    <section className="border-y border-brand-line bg-brand-subtle section-padding">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold tracking-[0.18em] text-brand-accent">
            MONTHLY RETURNS
          </span>
          <h2 className="mt-3 section-title">월별 수익률</h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-brand-line bg-white shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className="bg-brand-subtle text-brand-muted">
                  <th className="p-4 text-left text-xs font-bold tracking-[0.18em]">
                    연도
                  </th>
                  {months.map((m) => (
                    <th
                      key={m}
                      className="p-4 text-center text-xs font-bold tracking-[0.1em]"
                    >
                      {m}
                    </th>
                  ))}
                  <th className="p-4 text-center text-xs font-bold tracking-[0.18em] text-brand-primary">
                    연간
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { y: "2024", d: data2024 },
                  { y: "2025", d: data2025 },
                ].map((row) => (
                  <tr key={row.y} className="border-t border-brand-lineSoft">
                    <td className="p-4 text-left font-bold text-brand-text">
                      {row.y}
                    </td>
                    {row.d.map((v, i) => (
                      <td
                        key={i}
                        className={`p-4 text-center font-semibold ${
                          v >= 0 ? "text-brand-primary" : "text-rose-500"
                        }`}
                      >
                        {v > 0 ? "+" : ""}
                        {v.toFixed(1)}%
                      </td>
                    ))}
                    <td className="p-4 text-center text-base font-extrabold text-brand-text">
                      +{yearTotal(row.d).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function StrategyBreakdown() {
  const strategies = [
    {
      name: "Momentum Pro",
      type: "추세 추종",
      ret: "+42.1%",
      mdd: "-14.2%",
      win: "61%",
    },
    {
      name: "Mean Reversion",
      type: "평균 회귀",
      ret: "+29.6%",
      mdd: "-9.4%",
      win: "68%",
    },
    {
      name: "Pair Trading",
      type: "페어 / 헷지",
      ret: "+33.8%",
      mdd: "-7.8%",
      win: "64%",
    },
    {
      name: "Volatility Edge",
      type: "변동성 활용",
      ret: "+38.4%",
      mdd: "-15.1%",
      win: "59%",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <span className="text-sm font-semibold tracking-[0.18em] text-brand-primary">
              STRATEGY MIX
            </span>
            <h2 className="mt-3 section-title">
              4가지 전략의 <br />
              상관관계가 낮은 조합
            </h2>
            <p className="mt-5 section-sub">
              서로 다른 시장 국면에서 작동하는 4가지 전략을 분산 배분하여,
              어떤 시장 상황에서도 안정적인 수익을 추구합니다.
            </p>
            <div className="mt-8 overflow-hidden rounded-xl border border-brand-line bg-white shadow-card">
              <img
                src={TEAM_IMG}
                alt="전략 운용팀"
                className="aspect-[5/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-brand-line bg-white shadow-card">
            <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] bg-brand-subtle text-xs font-bold tracking-[0.1em] text-brand-muted">
              <div className="p-4">전략</div>
              <div className="p-4 text-right text-brand-primary">3Y 수익</div>
              <div className="p-4 text-right">MDD</div>
              <div className="p-4 text-right">승률</div>
            </div>
            {strategies.map((s, i) => (
              <div
                key={s.name}
                className={`grid grid-cols-[1.4fr_1fr_1fr_1fr] items-center text-sm ${
                  i !== strategies.length - 1
                    ? "border-b border-brand-lineSoft"
                    : ""
                }`}
              >
                <div className="p-4">
                  <div className="font-bold text-brand-text">{s.name}</div>
                  <div className="mt-1 text-xs text-brand-muted">{s.type}</div>
                </div>
                <div className="p-4 text-right font-extrabold text-brand-primary">
                  {s.ret}
                </div>
                <div className="p-4 text-right font-semibold text-rose-500">
                  {s.mdd}
                </div>
                <div className="p-4 text-right font-semibold text-brand-text">
                  {s.win}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Disclaimer() {
  return (
    <section className="pb-24">
      <div className="container-x">
        <div className="mx-auto max-w-4xl rounded-xl border border-brand-line bg-brand-subtle p-7 text-sm text-brand-muted md:p-10">
          <p className="font-bold text-brand-text">⚠ 투자 유의 안내</p>
          <p className="mt-3">
            본 페이지에 표기된 수익률, MDD, 승률은 자체 백테스팅 및 실전 운용
            데이터에 기반한 결과로, 동일한 성과가 미래에도 재현됨을 보장하지
            않습니다. 모든 투자 결정의 책임은 사용자 본인에게 있으며,
            넥스트퀀트는 매매 신호 제공 도구로서의 역할만 수행합니다.
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
