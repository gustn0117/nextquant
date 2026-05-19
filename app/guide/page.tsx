import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용 방법 | 넥스트퀀트 NEXT QUANT",
  description:
    "다운로드부터 첫 매매까지 5분이면 충분합니다. 단계별 가이드와 자주 묻는 질문을 확인하세요.",
};

const STEP_IMG_1 =
  "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=1200&q=80";
const STEP_IMG_2 =
  "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80";
const STEP_IMG_3 =
  "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80";
const STEP_IMG_4 =
  "https://images.unsplash.com/photo-1554260570-9140fd3b7614?auto=format&fit=crop&w=1200&q=80";

export default function GuidePage() {
  return (
    <>
      <Hero />
      <QuickStrip />
      <StepGuide />
      <RequirementBox />
      <FaqMini />
      <Download />
    </>
  );
}

/* ─────────── Hero (light + dot grid) ─────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line bg-white">
      <div className="dot-grid-light pointer-events-none absolute inset-0 opacity-90" />
      <div className="container-x relative section-padding pt-24 md:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="fade-up flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
            <span className="h-px w-8 bg-brand-primary/40" />
            HOW TO START
            <span className="h-px w-8 bg-brand-primary/40" />
          </div>
          <h1 className="fade-up fade-up-1 mt-5 text-5xl font-extrabold tracking-tightest md:text-7xl">
            <span className="text-brand-primary">5분</span>이면 충분합니다
            <span className="text-brand-primary">.</span>
          </h1>
          <p className="fade-up fade-up-2 mt-7 section-sub">
            다운로드부터 첫 자동매매까지, 누구나 따라할 수 있는 단계별 가이드를
            준비했습니다.
          </p>
          <div className="fade-up fade-up-3 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#download" className="btn-primary btn-3d">
              지금 다운로드
            </a>
            <a href="#steps" className="btn-ghost">
              단계별 가이드 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Quick stat strip ─────────── */
function QuickStrip() {
  const items = [
    { v: "1분", l: "설치 시간" },
    { v: "5분", l: "설정 완료" },
    { v: "14일", l: "무료 체험" },
    { v: "24/7", l: "자동 운용" },
  ];
  return (
    <section className="border-b border-brand-line bg-white">
      <div className="container-x grid grid-cols-2 divide-x divide-brand-line border-y border-brand-line md:grid-cols-4">
        {items.map((it) => (
          <div key={it.l} className="p-6 text-center">
            <div className="text-3xl font-extrabold tracking-tightest text-brand-primary tnum md:text-4xl">
              {it.v}
            </div>
            <div className="mt-2 text-xs font-medium text-brand-muted">
              {it.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────── Step guide (timeline) ─────────── */
function StepGuide() {
  const steps = [
    {
      n: "01",
      title: "프로그램 다운로드 & 설치",
      desc: "공식 사이트에서 OS에 맞는 설치파일을 받아 1분이면 설치가 끝납니다. 회원가입은 이메일과 비밀번호만으로 완료됩니다.",
      bullets: [
        "Windows 10 이상 · macOS 12 이상 지원",
        "신용카드 등록 없이 무료체험",
        "설치 즉시 데모 계좌로 미리 체험 가능",
      ],
      img: STEP_IMG_1,
      time: "약 1분",
    },
    {
      n: "02",
      title: "거래소 API 키 발급 & 연결",
      desc: "이용 중인 거래소에서 API 키를 생성한 뒤 넥스트퀀트에 안전하게 등록합니다. 출금 권한은 절대 부여하지 않아 자산 이체가 불가능합니다.",
      bullets: [
        "Binance · Bybit · Upbit · OKX 등 주요 거래소 지원",
        "IP 화이트리스트 설정 권장",
        "출금 권한 OFF · 거래 권한만 ON",
      ],
      img: STEP_IMG_2,
      time: "약 2분",
    },
    {
      n: "03",
      title: "전략 선택 & 리스크 설정",
      desc: "기본 제공되는 검증된 전략 프리셋(보수 / 표준 / 공격) 중 본인의 성향에 맞는 것을 고르고, 슬라이더로 MDD와 분할 진입 기준을 조정합니다.",
      bullets: [
        "보수 / 표준 / 공격 3가지 프리셋",
        "MDD · 익절 · 손절 슬라이더 조정",
        "1종목당 최대 사용 금액 직접 설정",
      ],
      img: STEP_IMG_3,
      time: "약 2분",
    },
    {
      n: "04",
      title: "자동매매 ON & 모니터링",
      desc: "ON 버튼 하나로 봇이 24시간 시장을 모니터링하기 시작합니다. 대시보드에서 활성 포지션, 누적 수익률, MDD를 한눈에 확인할 수 있습니다.",
      bullets: [
        "원클릭 ON / OFF",
        "실시간 푸시 알림 · 카카오 알림",
        "주간 / 월간 리포트 자동 생성",
      ],
      img: STEP_IMG_4,
      time: "1초",
    },
  ];

  return (
    <section id="steps" className="section-padding">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
            Step-by-Step
          </span>
          <h2 className="mt-4 section-title">4단계 시작 가이드</h2>
          <p className="mt-5 section-sub">
            각 단계는 명확합니다. 막힐 일은 없습니다.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-brand-line lg:block" />
          <ol className="space-y-16">
            {steps.map((s, i) => {
              const reverse = i % 2 === 1;
              return (
                <li
                  key={s.n}
                  className={`relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-primary bg-white text-base font-extrabold text-brand-primary shadow-card lg:flex">
                    {parseInt(s.n)}
                  </div>

                  <div className="img-zoom relative overflow-hidden rounded-xl border border-brand-line bg-white shadow-depth">
                    <CornerMarker />
                    <img
                      src={s.img}
                      alt={s.title}
                      className="aspect-[5/4] w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-md bg-white/95 px-3 py-1.5 text-[11px] font-extrabold tracking-[0.22em] text-brand-primary shadow-soft backdrop-blur">
                      STEP {s.n}
                    </div>
                    <div className="absolute bottom-5 right-5 inline-flex items-center gap-1.5 rounded-md bg-brand-text/85 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur">
                      ⏱ {s.time}
                    </div>
                  </div>

                  <div>
                    <div className="num-display text-[72px] font-black leading-none text-brand-text/10 md:text-[112px]">
                      {s.n}
                    </div>
                    <h3 className="-mt-8 text-3xl font-extrabold tracking-tight md:text-4xl">
                      {s.title}
                    </h3>
                    <p className="mt-5 text-base text-brand-muted md:text-lg">
                      {s.desc}
                    </p>
                    <ul className="mt-7 space-y-3 text-base text-brand-subText">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <CheckBox /> <span>{b}</span>
                        </li>
                      ))}
                    </ul>
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

/* ─────────── Requirements ─────────── */
function RequirementBox() {
  return (
    <section className="border-y border-brand-line bg-brand-subtle section-padding">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
            Requirements
          </span>
          <h2 className="mt-4 section-title">시스템 요구사항</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="lift card-soft p-7">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-primarySoft text-brand-primary">
                  <WindowsIcon />
                </div>
                <h3 className="text-lg font-bold text-brand-text">Windows</h3>
              </div>
              <span className="stat-chip">Win 10+</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-brand-subText">
              {[
                "Windows 10 이상 (64-bit)",
                "메모리 4GB 이상 (권장 8GB)",
                "안정적인 인터넷 연결 (유선 권장)",
                "디스크 여유 공간 1GB",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckMini /> <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lift card-soft p-7">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-primarySoft text-brand-primary">
                  <AppleIcon />
                </div>
                <h3 className="text-lg font-bold text-brand-text">macOS</h3>
              </div>
              <span className="stat-chip">macOS 12+</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-brand-subText">
              {[
                "macOS 12 (Monterey) 이상",
                "Apple Silicon (M1/M2/M3) 및 Intel 모두 지원",
                "메모리 4GB 이상",
                "디스크 여유 공간 1GB",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckMini /> <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── FAQ mini ─────────── */
function FaqMini() {
  const faqs = [
    {
      q: "API 키는 안전한가요?",
      a: "출금 권한을 부여하지 않은 키만 등록 가능합니다. 자산은 항상 거래소에 보관되며, 넥스트퀀트는 매매 신호만 보냅니다.",
    },
    {
      q: "컴퓨터를 켜두지 않아도 동작하나요?",
      a: "예. 봇은 클라우드 기반으로 동작하므로 PC를 꺼두어도 24시간 자동매매가 유지됩니다.",
    },
    {
      q: "체험판은 얼마나 사용할 수 있나요?",
      a: "기본 14일 무료체험을 제공합니다. 체험 기간 동안 모든 핵심 기능을 제한 없이 사용할 수 있습니다.",
    },
  ];
  return (
    <section className="section-padding">
      <div className="container-x">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
              Quick FAQ
            </span>
            <h2 className="mt-4 section-title">자주 묻는 질문</h2>
          </div>
          <div className="mt-10 divide-y divide-brand-lineSoft overflow-hidden rounded-xl border border-brand-line bg-white shadow-soft">
            {faqs.map((f) => (
              <details key={f.q} className="group p-6 open:bg-brand-subtle">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-brand-text">
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand-primarySoft text-[11px] font-extrabold text-brand-primary">
                      Q
                    </span>
                    {f.q}
                  </span>
                  <span className="text-brand-muted transition-transform group-open:rotate-180">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 pl-9 text-sm text-brand-muted">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/support"
              className="text-sm font-semibold text-brand-primary hover:underline"
            >
              모든 FAQ 보기 →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Download (dark) ─────────── */
function Download() {
  return (
    <section
      id="download"
      className="relative isolate overflow-hidden border-y border-white/5 section-padding"
      style={{ background: "var(--ink)" }}
    >
      <div className="line-grid-dark pointer-events-none absolute inset-0" />
      <div className="container-x relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
              Download
            </span>
            <h3 className="mt-4 text-4xl font-extrabold tracking-tightest text-white md:text-6xl">
              지금 다운로드,
              <br />
              <span className="text-brand-primary">14일 무료체험</span>
            </h3>
            <p className="mt-5 text-base text-white/70 md:text-lg">
              신용카드 등록 없이 시작. 1분 설치, 5분이면 첫 자동매매를 경험할 수
              있습니다.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="stat-chip !bg-white/5 !text-white !border-white/10">
                ✓ 14일 무료
              </span>
              <span className="stat-chip !bg-white/5 !text-white !border-white/10">
                ✓ 카드 등록 X
              </span>
              <span className="stat-chip !bg-white/5 !text-white !border-white/10">
                ✓ 언제든 해지
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="lift-dark card-dark group flex items-center gap-4 p-5 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-brand-text">
                <WindowsIcon />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                  Windows 10+
                </div>
                <div className="mt-1 text-base font-extrabold text-white">
                  Windows 다운로드
                </div>
              </div>
              <span className="text-white/40 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#"
              className="lift-dark card-dark group flex items-center gap-4 p-5 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-brand-text">
                <AppleIcon />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                  macOS 12+
                </div>
                <div className="mt-1 text-base font-extrabold text-white">
                  macOS 다운로드
                </div>
              </div>
              <span className="text-white/40 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <p className="mt-2 text-xs text-white/45">
              v2.4.1 · 32MB · 2026-05-12 업데이트
            </p>
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
function CheckMini() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-brand-primary">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function WindowsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 5.5L10.5 4.5V11.5H3V5.5ZM3 12.5H10.5V19.5L3 18.5V12.5ZM11.5 4.3L21 3V11.5H11.5V4.3ZM11.5 12.5H21V21L11.5 19.7V12.5Z" />
    </svg>
  );
}
function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 12.04c-.03-2.99 2.45-4.43 2.56-4.5-1.4-2.05-3.58-2.33-4.35-2.36-1.85-.19-3.62 1.09-4.56 1.09-.95 0-2.4-1.07-3.95-1.04-2.03.03-3.91 1.18-4.96 3-2.12 3.67-.54 9.1 1.52 12.07 1 1.46 2.19 3.1 3.75 3.04 1.51-.06 2.08-.97 3.91-.97 1.83 0 2.34.97 3.94.94 1.63-.03 2.66-1.48 3.66-2.95 1.15-1.69 1.62-3.34 1.65-3.43-.04-.02-3.17-1.22-3.2-4.83zM14.2 3.97c.84-1.02 1.41-2.43 1.25-3.84-1.21.05-2.67.81-3.54 1.83-.78.91-1.46 2.35-1.28 3.74 1.36.1 2.74-.69 3.57-1.73z" />
    </svg>
  );
}
