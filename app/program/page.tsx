import Link from "next/link";
import type { Metadata } from "next";
import { ArtOrderbook, ArtRisk, ArtDashboard } from "@/components/Art";

export const metadata: Metadata = {
  title: "프로그램 소개 | 넥스트퀀트 NEXT QUANT",
  description:
    "백테스팅 데이터로 검증된 강력한 시스템 트레이딩 엔진. 정밀한 마켓 데이터 분석, 철저한 리스크 컨트롤, 직관적인 대시보드를 제공합니다.",
};

export default function ProgramPage() {
  return (
    <>
      <Hero />
      <PillarBar />
      <CoreFeatures />
      <Architecture />
      <CompareTable />
      <Security />
      <CtaBand />
    </>
  );
}

/* ─────────── Hero ─────────── */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/5">
      <div
        className="absolute inset-0 -z-20"
        style={{ background: "var(--ink)" }}
      />
      <div className="dot-grid-dark pointer-events-none absolute inset-0 -z-10" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32"
        style={{
          background: "linear-gradient(0deg, rgba(22,24,29,0.95), transparent)",
        }}
      />

      <div className="container-x relative pb-24 pt-32 text-center md:pb-32 md:pt-40">
        <h1 className="fade-up fade-up-1 mx-auto mt-7 max-w-4xl text-5xl font-extrabold tracking-tightest text-white md:text-7xl">
          백테스팅으로 검증된
          <br />
          <span className="text-brand-primary">시스템 트레이딩 엔진</span>
        </h1>

        <p className="fade-up fade-up-2 mx-auto mt-7 max-w-2xl text-base font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] md:text-xl">
          수년간 축적된 시장 데이터와 정교한 알고리즘이 결합된
          <br className="hidden md:block" />
          넥스트퀀트만의 트레이딩 엔진을 만나보세요.
        </p>

        <div className="fade-up fade-up-3 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/guide" className="btn-primary">
            무료체험 다운로드
          </Link>
          <Link href="/performance" className="btn-outline-light">
            수익 인증 보기
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Pillar bar ─────────── */
function PillarBar() {
  const pillars = [
    { v: "2.6M+", l: "분당 시장 데이터 포인트" },
    { v: "180ms", l: "평균 시그널 → 주문 지연" },
    { v: "12+", l: "동시 운용 전략" },
  ];
  return (
    <section className="border-b border-brand-line bg-white py-10">
      <div className="container-x grid grid-cols-1 divide-y divide-brand-line border-y border-brand-line md:grid-cols-3 md:divide-x md:divide-y-0">
        {pillars.map((p, i) => (
          <div
            key={p.l}
            className={`flex items-baseline gap-5 p-6 ${i === 0 ? "md:pl-0" : ""}`}
          >
            <div className="text-4xl font-extrabold tracking-tightest text-brand-primary tnum md:text-5xl">
              {p.v}
            </div>
            <div className="flex-1 text-sm font-medium text-brand-muted">
              {p.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────── Core Features ─────────── */
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
      Art: ArtOrderbook,
      badge: "1초당 2,600+ 틱 처리",
    },
    {
      idx: "02",
      label: "Risk Control",
      title: "철저한 리스크 컨트롤 시스템",
      desc: "실시간 마진 비율과 진입 가격 대비 시장 평균 가격 추이를 추적합니다. 사전에 설정한 MDD 기준에 따라 분할 진입 및 칼같은 손절로 자산 손실을 원천 차단합니다.",
      bullets: [
        "Mark Price · Entry Price 실시간 추적",
        "MDD 기준 자동 손절 / 분할 진입",
        "마진 비율 단계별 알림",
      ],
      Art: ArtRisk,
      badge: "위험 신호 0.18s 내 차단",
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
      Art: ArtDashboard,
      badge: "키보드 단축키 12종 지원",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 section-title">3가지 핵심 기술</h2>
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
                className={`grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="img-zoom relative overflow-hidden rounded-xl border border-brand-line bg-white shadow-depth">
                  <CornerMarker />
                  <f.Art className="aspect-[5/4] w-full" />
                  <div className="absolute left-5 top-5 flex items-center gap-2">
                    <span className="rounded-md bg-white/95 px-2.5 py-1 text-[10px] font-extrabold tracking-[0.22em] text-brand-primary shadow-soft backdrop-blur">
                      {f.idx}
                    </span>
                    <span className="rounded-md bg-brand-text/85 px-2.5 py-1 text-[10px] font-bold tracking-[0.18em] text-white backdrop-blur">
                      {f.label}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 inline-flex items-center gap-1.5 rounded-md bg-white/95 px-3 py-1.5 text-xs font-bold text-brand-text shadow-soft backdrop-blur">
                    <span className="live-dot" /> {f.badge}
                  </div>
                </div>
                <div>
                  <div className="num-display text-[72px] font-black leading-none text-brand-text/10 md:text-[112px]">
                    {f.idx}
                  </div>
                  <h3 className="-mt-8 text-3xl font-extrabold tracking-tight md:text-4xl">
                    {f.title}
                  </h3>
                  <p className="mt-5 text-base text-brand-muted md:text-lg">
                    {f.desc}
                  </p>
                  <ul className="mt-7 space-y-3 text-base text-brand-subText">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckBox /> <span>{b}</span>
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

/* ─────────── Architecture (dark) ─────────── */
function Architecture() {
  const layers = [
    {
      tag: "DATA",
      title: "데이터 수집 레이어",
      desc: "다중 거래소의 오더북·체결·펀딩비 데이터를 밀리초 단위로 수집하여 정합성 검증 후 저장합니다.",
      icon: <ServerIcon />,
    },
    {
      tag: "STRATEGY",
      title: "전략 / 시그널 레이어",
      desc: "검증된 모멘텀·평균회귀·페어 트레이딩 룰셋을 조합. 백테스팅 → 페이퍼 트레이딩 → 실전 순으로 검증됩니다.",
      icon: <BoltIcon />,
    },
    {
      tag: "RISK",
      title: "리스크 매니지먼트 레이어",
      desc: "포지션 사이즈, MDD, 마진 비율, 슬리피지 한계를 모든 주문 직전에 체크. 한 건이라도 위반 시 즉시 차단.",
      icon: <ShieldIcon />,
    },
    {
      tag: "EXEC",
      title: "주문 실행 레이어",
      desc: "분할 진입 실행 알고리즘으로 시장 충격을 최소화하며 주문을 처리합니다.",
      icon: <ZapIcon />,
    },
  ];
  return (
    <section
      className="relative isolate overflow-hidden border-y border-white/5 section-padding"
      style={{ background: "var(--ink)" }}
    >
      <div className="dot-grid-dark pointer-events-none absolute inset-0" />
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-16">
          <div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tightest text-white md:text-5xl">
              4-Layer
              <br />
              트레이딩 아키텍처
            </h2>
            <p className="mt-5 text-base text-white/85 md:text-lg">
              데이터부터 주문 실행까지, 각 레이어가 독립적으로 검증되고
              모니터링됩니다. 어느 한 레이어에서 이상이 감지되면 전체 시스템이
              안전하게 멈춥니다.
            </p>

            <div className="mt-8 card-dark p-5">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">
                System Health
              </div>
              <ul className="mt-3 space-y-2.5">
                {[
                  { l: "Market Data", v: "정상" },
                  { l: "Signal Engine", v: "정상" },
                  { l: "Risk Guard", v: "정상" },
                  { l: "Order Router", v: "정상" },
                ].map((r) => (
                  <li
                    key={r.l}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-white/80">{r.l}</span>
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary">
                      <span className="live-dot" /> {r.v}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ol className="space-y-4">
            {layers.map((l, i) => (
              <li key={l.tag} className="lift-dark card-dark flex gap-5 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/5 text-brand-primary">
                  {l.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-extrabold tracking-[0.22em] text-brand-primary">
                      LAYER {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-md border border-white/10 px-2 py-0.5 text-[10px] font-bold text-white/70">
                      {l.tag}
                    </span>
                  </div>
                  <h3 className="mt-1.5 text-lg font-bold text-white">
                    {l.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/65">{l.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Compare Table ─────────── */
function CompareTable() {
  const rows: [string, string, string][] = [
    ["진입/청산 판단 기준", "감정·뉴스·직감", "백테스팅으로 검증된 룰셋"],
    ["운용 시간", "깨어 있는 시간만", "24/7 무중단"],
    ["손절 실행 일관성", "낮음 (지연·회피)", "100% 자동 실행"],
    ["분할 진입", "수동 계산 필요", "사전 설정 기준으로 자동"],
    ["감정 비용", "매우 큼", "0"],
    ["월 평균 시그널 처리", "수십 건", "수천 건"],
  ];
  return (
    <section className="section-padding">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 section-title">수동 매매 vs 넥스트퀀트</h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-brand-line bg-white shadow-card">
          <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-brand-subtle text-sm font-bold text-brand-text">
            <div className="p-5 text-[11px] uppercase tracking-[0.2em] text-brand-muted">
              항목
            </div>
            <div className="border-l border-brand-line p-5 text-center text-brand-muted">
              <div className="text-[10px] uppercase tracking-[0.22em]">
                BEFORE
              </div>
              <div className="mt-1">수동 매매</div>
            </div>
            <div className="relative border-l border-brand-line p-5 text-center">
              <div className="text-[10px] uppercase tracking-[0.22em] text-brand-primary">
                AFTER
              </div>
              <div className="mt-1 text-brand-text">넥스트퀀트</div>
              <span className="absolute -top-px left-0 right-0 h-[2px] bg-brand-primary" />
            </div>
          </div>
          {rows.map(([label, a, b], i) => (
            <div
              key={label}
              className={`grid grid-cols-[1.2fr_1fr_1fr] text-sm transition-colors hover:bg-brand-subtle/40 ${
                i !== rows.length - 1 ? "border-b border-brand-lineSoft" : ""
              }`}
            >
              <div className="p-5 font-semibold text-brand-text">{label}</div>
              <div className="border-l border-brand-lineSoft p-5 text-brand-muted">
                <span className="inline-flex items-center gap-2">
                  <XMini /> {a}
                </span>
              </div>
              <div className="border-l border-brand-lineSoft p-5 font-semibold text-brand-text">
                <span className="inline-flex items-center gap-2">
                  <CheckMiniGreen /> {b}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Security ─────────── */
function Security() {
  const items = [
    {
      t: "출금 권한 X",
      d: "API 키 등록 단계에서 출금 권한이 부여된 키는 자동 거부됩니다.",
      icon: <ShieldIcon />,
    },
    {
      t: "로컬 암호화 저장",
      d: "API 키는 사용자 PC 내 암호화된 스토리지에만 저장. 서버 전송 X.",
      icon: <LockIcon />,
    },
    {
      t: "IP 화이트리스트",
      d: "거래소 측에서 IP 화이트리스트 설정 시 키 유출 시에도 안전.",
      icon: <NetIcon />,
    },
    {
      t: "이중 인증 (2FA)",
      d: "로그인과 중요 설정 변경 시 2FA로 추가 보호.",
      icon: <KeyIcon />,
    },
  ];
  return (
    <section className="border-y border-brand-line bg-brand-subtle section-padding">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 section-title">
            돈을 다루기에, <br />
            보안은 타협하지 않습니다.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.t} className="lift card-soft p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-primarySoft text-brand-primary">
                {it.icon}
              </div>
              <h3 className="mt-4 text-base font-extrabold text-brand-text">
                {it.t}
              </h3>
              <p className="mt-2 text-sm text-brand-muted">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── CTA band ─────────── */
function CtaBand() {
  return (
    <section className="pb-24 pt-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-xl border border-brand-line bg-white p-10 text-center shadow-card md:p-14">
          <div className="dot-grid-light pointer-events-none absolute inset-0 opacity-80" />
          <div className="relative">
            <h3 className="text-3xl font-extrabold tracking-tightest md:text-5xl">
              <span className="text-brand-primary">지금 바로</span> 시작해보세요
            </h3>
            <p className="mt-4 text-base text-brand-muted md:text-lg">
              무료체험으로 넥스트퀀트의 엔진을 직접 경험해보세요.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/guide" className="btn-primary">
                무료체험 다운로드
              </Link>
              <Link href="/performance" className="btn-ghost">
                수익 인증 보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── icons ─────────── */
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
function CheckBox() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-primarySoft text-brand-primary">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}
function CheckMiniGreen() {
  return (
    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}
function XMini() {
  return (
    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-500/15 text-rose-500">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </span>
  );
}
function ServerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
      <line x1="7" y1="17" x2="7.01" y2="17" />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function ZapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v8h6l-8 12v-8H4l8-12z" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 1 1 8 0v4" />
    </svg>
  );
}
function NetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}
function KeyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="14" r="4" />
      <path d="M11 11l9-9m-4 4l3 3" />
    </svg>
  );
}
