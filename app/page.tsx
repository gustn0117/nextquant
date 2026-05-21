import Link from "next/link";
import { supabaseAdmin, rowsToSettings } from "@/lib/supabase";
import { toYoutubeEmbed } from "@/lib/youtube";
import { Reveal } from "@/components/Fx";
import {
  ArtDashboard,
  ArtInstall,
  ArtApiKey,
  ArtStrategy,
} from "@/components/Art";

export const dynamic = "force-dynamic";

const HERO_BG = "/hero-crypto.jpg";

export default async function HomePage() {
  let videoEmbed: string | null = null;
  try {
    const { data } = await supabaseAdmin.from("settings").select("key, value");
    videoEmbed = toYoutubeEmbed(rowsToSettings(data).youtube_live_url);
  } catch {
    videoEmbed = null;
  }

  return (
    <>
      <Hero videoEmbed={videoEmbed} />
      <ExchangeSection />
      <ProblemSection />
      <SolutionBento />
      <LivePreview />
      <ProcessSection />
      <CtaSection />
    </>
  );
}

/* ──────────────────────────────────────────────────── */
/* Hero                                                 */
/* ──────────────────────────────────────────────────── */

function Hero({ videoEmbed }: { videoEmbed: string | null }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/5">
      <img
        src={HERO_BG}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="eager"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "rgba(8,15,30,0.84)" }}
      />
      <div className="dot-grid-dark pointer-events-none absolute inset-0 -z-10" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40"
        style={{
          background: "linear-gradient(180deg, rgba(8,15,30,0.6), transparent)",
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
          <h1 className="fade-up fade-up-1 mt-7 text-5xl font-extrabold tracking-tightest text-white md:text-7xl lg:text-[88px]">
            감정을 빼고,
            <br />
            원칙을 더하다
            <span className="text-brand-primary">.</span>
          </h1>

          <p className="fade-up fade-up-2 mx-auto mt-7 max-w-2xl text-base font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] md:text-xl">
            바이낸스 선물에서 24시간 자동으로 매매하는
            <br className="hidden md:block" />
            시스템 트레이딩 프로그램입니다.
          </p>

          {/* 무료 다운로드 — 단일 강조 버튼 */}
          <div className="fade-up fade-up-3 mt-11 flex justify-center">
            <Link
              href="/guide"
              className="group inline-flex items-center gap-2.5 bg-brand-primary px-10 py-5 text-lg font-extrabold text-white shadow-soft transition-colors hover:bg-brand-primaryDim"
            >
              무료 다운로드
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-y-0.5"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* 광고 영상 */}
        <div className="fade-up fade-up-4 relative mx-auto mt-16 max-w-5xl">
          <div className="card-dark-elevated relative overflow-hidden">
            <CornerMarkerDark />
            {videoEmbed ? (
              <div className="relative aspect-video w-full">
                <iframe
                  src={videoEmbed}
                  title="넥스트퀀트 광고영상"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex aspect-video w-full flex-col items-center justify-center px-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-brand-primary">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="6 4 20 12 6 20 6 4" />
                  </svg>
                </div>
                <h2 className="mt-5 text-xl font-extrabold text-white">
                  광고영상 준비 중입니다
                </h2>
                <p className="mt-2 max-w-md text-sm text-white/60">
                  넥스트퀀트를 소개하는 영상을 준비하고 있습니다. 곧 이곳에서
                  만나보실 수 있습니다.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────── */
/* Exchange — 바이낸스 선물 단일 연동                    */
/* ──────────────────────────────────────────────────── */

function ExchangeSection() {
  return (
    <section className="border-b border-brand-line bg-white section-padding">
      <div className="container-x">
        <Reveal className="mx-auto flex max-w-md flex-col items-center text-center">
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-brand-text md:text-3xl">
            연동 거래소
          </h2>
        </Reveal>

        <Reveal variant="scale" delay={120} className="mx-auto mt-8 max-w-md">
          <div className="w-full rounded-xl border border-brand-line bg-white p-8 shadow-card">
            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0B0E11]">
                <BinanceLogo />
              </div>
              <div className="mt-4 text-xl font-extrabold tracking-tight text-brand-text">
                Binance Futures
              </div>
              <div className="mt-1 text-sm font-semibold text-brand-muted">
                바이낸스 선물
              </div>
            </div>

            <div className="mt-6 space-y-2 border-t border-brand-lineSoft pt-5 text-sm">
              <p className="flex items-center justify-center gap-2 text-brand-subText">
                <CheckMiniGreen /> 바이낸스 선물 API Key 한 번 등록
              </p>
              <p className="flex items-center justify-center gap-2 text-brand-subText">
                <CheckMiniGreen /> 출금 권한은 절대 부여하지 않습니다
              </p>
            </div>
          </div>
        </Reveal>
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
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">수동 매매와 무엇이 다른가</h2>
          <p className="mt-5 section-sub">
            감정, 시간, 일관성. 수동 매매에서 흔들리기 쉬운 부분을 정해진
            규칙으로 대신합니다.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal variant="left" className="h-full">
            <div className="relative h-full overflow-hidden rounded-xl border border-brand-line bg-brand-subtle p-8">
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
          </Reveal>

          <Reveal variant="right" delay={120} className="h-full">
            <div className="lift relative h-full overflow-hidden rounded-xl border border-brand-primary/30 bg-white p-8 shadow-soft">
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
                    "정해진 룰셋이 모든 매매를 결정",
                    "24시간 자동으로 시장을 모니터링",
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
          </Reveal>
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
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end lg:gap-16">
          <div>
            <h2 className="section-title">프로그램이 하는 일</h2>
          </div>
          <p className="section-sub lg:max-w-md">
            시장 데이터 확인, 리스크 관리, 주문 실행을 자동으로 처리합니다.
            전략을 고르고 START 버튼을 누르면 됩니다.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          {/* Big 1 — Market */}
          <Reveal variant="scale" className="md:col-span-2 md:row-span-2">
            <div className="relative h-full overflow-hidden rounded-xl border border-brand-line bg-white p-7">
              <div className="topline" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-brand-primary">
                01 · MARKET
              </span>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-brand-text md:text-3xl">
                시장 상황을 한눈에 보여드립니다.
              </h3>
              <p className="mt-4 max-w-xl text-sm text-brand-muted">
                공포탐욕지수, 비트코인 도미넌스, 알트시즌 지수, 24시간
                시가총액, 펀딩비, 미결제약정, 24시간 거래량, 스테이블코인
                도미넌스까지 대시보드 한 화면에서 확인하실 수 있습니다.
              </p>
              <IndicatorGrid />
            </div>
          </Reveal>

          {/* Right top — Risk */}
          <Reveal variant="scale" delay={120}>
            <div className="relative h-full overflow-hidden rounded-xl border border-brand-line bg-white p-6">
              <div className="topline" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-brand-primary">
                02 · RISK
              </span>
              <h3 className="mt-2.5 text-lg font-extrabold text-brand-text">
                MDD 기반 자동 손절
              </h3>
              <p className="mt-2 text-sm text-brand-muted">
                사전 설정한 최대 낙폭에 닿으면 100% 자동 손절. 감정이 끼어들
                틈을 차단합니다.
              </p>
              <RiskGaugeMini />
            </div>
          </Reveal>

          {/* Right bottom — Execution */}
          <Reveal variant="scale" delay={240}>
            <div className="relative h-full overflow-hidden rounded-xl border border-brand-line bg-white p-6">
              <div className="topline" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-brand-primary">
                03 · EXECUTION
              </span>
              <h3 className="mt-2.5 text-lg font-extrabold text-brand-text">
                분할 진입 / 청산
              </h3>
              <p className="mt-2 text-sm text-brand-muted">
                한 번에 다 사지 않습니다. 분할 비율을 조절하여 시장 충격을
                최소화 합니다.
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function IndicatorGrid() {
  const items = [
    "공포탐욕지수",
    "비트코인 도미넌스",
    "알트시즌 지수",
    "24h 시가총액",
    "펀딩비",
    "미결제약정",
    "24h 거래량",
    "스테이블코인 도미넌스",
  ];
  return (
    <div className="mt-8">
      <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-muted">
        대시보드 인디케이터 8종
      </div>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {items.map((name) => (
          <div
            key={name}
            className="rounded-lg border border-brand-line bg-brand-subtle p-3"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-brand-primary">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3v18h18" />
                <path d="M7 14l3.5-4 3.5 3 4.5-6" />
              </svg>
            </div>
            <div className="mt-2 text-xs font-bold leading-snug text-brand-text">
              {name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RiskGaugeMini() {
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-muted">
          MDD 게이지
        </span>
        <span className="rounded border border-brand-line bg-brand-subtle px-1.5 py-0.5 text-[10px] font-bold text-brand-muted">
          예시
        </span>
      </div>
      <div className="relative mt-2 h-2 w-full overflow-hidden rounded-full bg-brand-lineSoft">
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
          <Reveal variant="left">
            <h2 className="mt-4 section-title">
              한 화면에서
              <br />
              모든 게 끝납니다.
            </h2>
            <p className="mt-5 section-sub">
              복잡한 코딩이나 명령어 없이, 마우스 클릭 몇 번이면 됩니다. 활성
              포지션, 누적 손익, MDD를 한눈에. 전략 ON/OFF, 분할 기준, 익절
              슬라이더까지 즉시 조정 가능.
            </p>

            <ul className="mt-7 space-y-3 text-sm text-brand-subText">
              {[
                "한 화면에서 전 전략 포지션 통합",
                "전략별 ON / OFF 토글",
                "MDD · 분할 · 익절 슬라이더 실시간 조정",
                "일별 손익 차트와 거래 기록 자동 저장",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckBox /> <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link href="/program" className="btn-ghost">
                기능 자세히 보기
              </Link>
            </div>
          </Reveal>

          <Reveal variant="right" delay={140}>
            <div className="relative overflow-hidden rounded-xl border border-brand-line bg-white shadow-depth">
              <CornerMarkerDark />
              <ArtDashboard className="aspect-[16/10] w-full" />
            </div>
          </Reveal>
        </div>
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
      d: "Windows 인스톨러로 1분 설치하고, SMS 인증을 거치면 7일 체험판이 바로 발급됩니다.",
      Art: ArtInstall,
    },
    {
      n: 2,
      t: "거래소 API 연결",
      d: "바이낸스 선물 API 키를 등록합니다. 출금 권한은 부여하지 않으셔도 됩니다.",
      Art: ArtApiKey,
    },
    {
      n: 3,
      t: "전략 선택 & START",
      d: "전략을 선택하고 슬라이더로 본인 성향에 맞게 조정하신 뒤 START 버튼만 눌러주세요.",
      Art: ArtStrategy,
    },
  ];
  return (
    <section className="section-padding">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 section-title">3단계, 5분이면 충분합니다</h2>
          <p className="mt-5 section-sub">
            복잡한 코딩이나 시장 분석 없이, 누구나 5분이면 시작할 수 있습니다.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-brand-line lg:block" />
          <ol className="space-y-12">
            {steps.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <Reveal
                  as="li"
                  key={s.n}
                  variant={right ? "right" : "left"}
                  className={`relative grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                    right ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-primary bg-white text-base font-extrabold text-brand-primary shadow-card lg:flex">
                    {s.n}
                  </div>

                  <div className="relative overflow-hidden rounded-xl border border-brand-line bg-white shadow-soft">
                    <s.Art className="aspect-[16/10] w-full" />
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
                </Reveal>
              );
            })}
          </ol>
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
        <Reveal variant="scale">
          <div
            className="relative isolate overflow-hidden rounded-xl border border-white/5 p-10 md:p-16"
            style={{ background: "var(--ink)" }}
          >
            <div className="line-grid-dark pointer-events-none absolute inset-0" />

            <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tightest text-white md:text-6xl">
                  감정 대신 데이터로,
                  <br />
                  <span className="text-brand-primary">지금</span> 시작하세요.
                </h2>
                <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
                  1분 설치와 SMS 인증으로 24시간 자동매매를 바로 경험해보세요.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-xs text-white/65">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckMini /> 7일 무료
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckMini /> SMS 인증으로 발급
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckMini /> 자동 결제 없음
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:items-end">
                <Link
                  href="/guide"
                  className="group inline-flex w-full items-center justify-center gap-2.5 bg-brand-primary px-8 py-4 text-base font-extrabold text-white shadow-soft transition-colors hover:bg-brand-primaryDim lg:w-auto"
                >
                  무료 다운로드
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-y-0.5"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────── */
/* Icons / Decorations                                  */
/* ──────────────────────────────────────────────────── */

function BinanceLogo() {
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11" aria-hidden>
      <g fill="#F0B90B">
        <rect
          x="19"
          y="4"
          width="10"
          height="10"
          rx="1.5"
          transform="rotate(45 24 9)"
        />
        <rect
          x="4"
          y="19"
          width="10"
          height="10"
          rx="1.5"
          transform="rotate(45 9 24)"
        />
        <rect
          x="34"
          y="19"
          width="10"
          height="10"
          rx="1.5"
          transform="rotate(45 39 24)"
        />
        <rect
          x="19"
          y="34"
          width="10"
          height="10"
          rx="1.5"
          transform="rotate(45 24 39)"
        />
        <rect
          x="19"
          y="19"
          width="10"
          height="10"
          rx="1.5"
          transform="rotate(45 24 24)"
        />
      </g>
    </svg>
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
    <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white">
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
