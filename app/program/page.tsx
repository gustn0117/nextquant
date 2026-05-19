import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "프로그램 소개 | 넥스트퀀트 NEXT QUANT",
  description:
    "백테스팅 데이터로 검증된 강력한 시스템 트레이딩 엔진. 정밀한 마켓 데이터 분석, 철저한 리스크 컨트롤, 직관적인 대시보드를 제공합니다.",
};

const ENGINE_IMG =
  "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=1400&q=80";
const ORDERBOOK_IMG =
  "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1200&q=80";
const RISK_IMG =
  "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80";
const DASHBOARD_IMG =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80";
const ARCH_IMG =
  "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1400&q=80";

export default function ProgramPage() {
  return (
    <>
      <ProgramHero />
      <CoreFeatures />
      <Architecture />
      <CompareTable />
      <CtaBand />
    </>
  );
}

function ProgramHero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line">
      <div className="absolute inset-0 bg-hero-soft" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="container-x relative section-padding pt-24 md:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">ABOUT PROGRAM</span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
            백테스팅으로 검증된
            <br />
            <span className="gradient-text">시스템 트레이딩 엔진</span>
          </h1>
          <p className="mt-7 section-sub">
            수년간 축적된 시장 데이터와 정교한 알고리즘이 결합된
            <br className="hidden md:block" />
            넥스트퀀트만의 트레이딩 엔진을 만나보세요.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border border-brand-line bg-white shadow-elevated">
          <img
            src={ENGINE_IMG}
            alt="트레이딩 엔진 시각화"
            className="aspect-[21/9] w-full object-cover"
            loading="eager"
          />
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
        "유동성 / 슬리피지 사전 점검",
        "변동성 구간 자동 인식",
      ],
      img: ORDERBOOK_IMG,
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
      img: RISK_IMG,
    },
    {
      idx: "03",
      label: "Dashboard",
      title: "직관적이고 강력한 대시보드 (UI)",
      desc: "복잡한 코딩이나 명령어 입력 없이, 마우스 클릭 몇 번만으로 자산 현황, 현재 포지션, 누적 수익률을 한눈에 파악할 수 있는 사용자 친화적 인터페이스를 제공합니다.",
      bullets: [
        "한 화면에서 모든 포지션 확인",
        "누적 수익률 / 승률 시각화",
        "전략별 ON/OFF 토글",
      ],
      img: DASHBOARD_IMG,
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold tracking-[0.18em] text-brand-primary">
            CORE FEATURES
          </span>
          <h2 className="mt-3 section-title">3가지 핵심 기술</h2>
          <p className="mt-5 section-sub">
            데이터 분석, 리스크 컨트롤, 사용자 경험. 트레이딩의 본질에
            집중했습니다.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {features.map((f, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={f.idx}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-3xl border border-brand-line bg-white shadow-card">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="aspect-[5/4] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-brand-primarySoft px-3 py-1 text-xs font-bold tracking-[0.2em] text-brand-primary">
                      {f.idx}
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-muted">
                      {f.label}
                    </span>
                  </div>
                  <h3 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                    {f.title}
                  </h3>
                  <p className="mt-5 text-base text-brand-muted md:text-lg">
                    {f.desc}
                  </p>
                  <ul className="mt-7 space-y-3 text-base text-brand-subText">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckIcon />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  const layers = [
    {
      tag: "DATA",
      title: "데이터 수집 레이어",
      desc: "다중 거래소의 오더북·체결·펀딩비 데이터를 밀리초 단위로 수집하여 정합성 검증 후 저장합니다.",
    },
    {
      tag: "STRATEGY",
      title: "전략 / 시그널 레이어",
      desc: "검증된 모멘텀·평균회귀·페어 트레이딩 룰셋을 조합. 백테스팅 → 페이퍼 트레이딩 → 실전 순으로 검증됩니다.",
    },
    {
      tag: "RISK",
      title: "리스크 매니지먼트 레이어",
      desc: "포지션 사이즈, MDD, 마진 비율, 슬리피지 한계를 모든 주문 직전에 체크. 한 건이라도 위반 시 즉시 차단.",
    },
    {
      tag: "EXEC",
      title: "주문 실행 레이어",
      desc: "분할 진입 / TWAP / 아이스버그 등의 실행 알고리즘으로 시장 충격을 최소화하며 주문을 처리합니다.",
    },
  ];
  return (
    <section className="border-y border-brand-line bg-brand-subtle section-padding">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
          <div>
            <span className="text-sm font-semibold tracking-[0.18em] text-brand-accent">
              ARCHITECTURE
            </span>
            <h2 className="mt-3 section-title">
              4-Layer 트레이딩 아키텍처
            </h2>
            <p className="mt-5 section-sub">
              데이터부터 주문 실행까지, 각 레이어가 독립적으로 검증되고 모니터링됩니다.
              어느 한 레이어에서 이상이 감지되면 전체 시스템이 안전하게 멈춥니다.
            </p>
            <div className="mt-8 overflow-hidden rounded-3xl border border-brand-line bg-white shadow-card">
              <img
                src={ARCH_IMG}
                alt="시스템 아키텍처"
                className="aspect-[5/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <ol className="space-y-4">
            {layers.map((l, i) => (
              <li
                key={l.tag}
                className="card-soft flex gap-5 p-6 transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primarySoft text-base font-extrabold text-brand-primary">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="text-xs font-bold tracking-[0.18em] text-brand-primary">
                    {l.tag}
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-brand-text">
                    {l.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-muted">{l.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function CompareTable() {
  const rows: [string, string, string][] = [
    ["진입/청산 판단 기준", "감정·뉴스·직감", "백테스팅으로 검증된 룰셋"],
    ["운용 시간", "깨어 있는 시간만", "24/7 무중단"],
    ["손절 실행 일관성", "낮음 (지연·회피)", "100% 자동 실행"],
    ["분할 진입", "수동 계산 필요", "사전 설정 기준으로 자동"],
    ["감정 비용", "매우 큼", "0"],
  ];
  return (
    <section className="section-padding">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold tracking-[0.18em] text-brand-primary">
            COMPARISON
          </span>
          <h2 className="mt-3 section-title">수동 매매 vs 넥스트퀀트</h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-brand-line bg-white shadow-card">
          <div className="grid grid-cols-3 bg-brand-subtle text-center text-sm font-bold text-brand-text">
            <div className="p-5 text-left">항목</div>
            <div className="border-l border-brand-line p-5 text-brand-muted">
              수동 매매
            </div>
            <div className="border-l border-brand-line p-5 text-brand-primary">
              넥스트퀀트
            </div>
          </div>
          {rows.map(([label, a, b], i) => (
            <div
              key={label}
              className={`grid grid-cols-3 text-sm ${
                i !== rows.length - 1 ? "border-b border-brand-lineSoft" : ""
              }`}
            >
              <div className="p-5 font-semibold text-brand-text">{label}</div>
              <div className="border-l border-brand-lineSoft p-5 text-brand-muted">
                {a}
              </div>
              <div className="border-l border-brand-lineSoft p-5 font-semibold text-brand-text">
                {b}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="pb-24">
      <div className="container-x">
        <div className="rounded-3xl border border-brand-line bg-white p-10 text-center shadow-card md:p-14">
          <h3 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            <span className="gradient-text">지금 바로</span> 시작해보세요.
          </h3>
          <p className="mt-4 text-base text-brand-muted md:text-lg">
            무료체험으로 넥스트퀀트의 엔진을 직접 경험해보세요.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/guide" className="btn-primary">
              무료체험 다운로드
            </Link>
            <Link href="/performance" className="btn-ghost">
              성과 데이터 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primarySoft text-brand-primary">
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
