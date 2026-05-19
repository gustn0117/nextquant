import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용 방법 | 넥스트퀀트 NEXT QUANT",
  description:
    "복잡한 설정 없이 단 3단계, 1분 만에 시작하는 자동 매매. 넥스트퀀트 프로그램을 무료로 다운로드하세요.",
};

export default function GuidePage() {
  return (
    <>
      <GuideHero />
      <DownloadSection />
      <StepsPreview />
      <FaqShort />
    </>
  );
}

function GuideHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-80" />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="container-x relative section-padding pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold tracking-[0.18em] text-brand-primary">
            HOW TO USE
          </span>
          <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.15] tracking-tight md:text-6xl">
            복잡한 설정 없이 단 3단계,
            <br />
            <span className="gradient-text">1분 만에 시작</span>하는 자동 매매
          </h1>
          <p className="mt-7 section-sub">
            지금 바로 다운로드하고, 본인 환경에 맞게 설치한 뒤
            <br className="hidden md:block" />
            준비된 전략 템플릿으로 시작하세요.
          </p>
        </div>
      </div>
    </section>
  );
}

function DownloadSection() {
  const platforms = [
    {
      os: "Windows",
      sub: "Windows 10 / 11 (64-bit)",
      size: "약 78 MB",
      filename: "NextQuant-Setup-x64.exe",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
          <path d="M3 5.479 10.176 4.5v6.85H3V5.48Zm0 13.04V12.65h7.176v6.852L3 18.518Zm8.103-14.155L21 3v8.35h-9.897V4.365Zm0 16.27v-7.985H21V21l-9.897-1.365Z" />
        </svg>
      ),
    },
    {
      os: "macOS",
      sub: "macOS 12 Monterey 이상",
      size: "약 92 MB",
      filename: "NextQuant-Universal.dmg",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
          <path d="M16.365 1.43c0 1.14-.49 2.27-1.28 3.07-.86.86-2.24 1.52-3.36 1.43-.13-1.13.46-2.27 1.21-3.04.85-.87 2.31-1.5 3.43-1.46Zm3.79 17.66c-.62 1.36-.91 1.96-1.7 3.16-1.1 1.66-2.66 3.74-4.59 3.74-1.72 0-2.16-1.11-4.49-1.11-2.33 0-2.82 1.13-4.54 1.11-1.93-.04-3.4-1.91-4.5-3.57C-.99 18.4-2.6 12.1.78 8.5c1.6-1.7 3.83-2.78 6.05-2.78 1.73 0 3.36 1.16 4.43 1.16 1.06 0 3.07-1.42 5.19-1.21.88.04 3.35.36 4.94 2.69-.13.08-2.95 1.72-2.92 5.13.04 4.08 3.58 5.44 3.62 5.46 0 .04-.57 1.94-.94 2.74Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">
            <span className="gradient-text">무료체험</span> 다운로드
          </h2>
          <p className="mt-5 section-sub">
            본인 환경에 맞는 설치 파일을 선택하세요.
            <br />
            회원가입 후 라이선스 키와 함께 발송됩니다.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
          {platforms.map((p) => (
            <div
              key={p.os}
              className="group relative overflow-hidden rounded-2xl border border-brand-line bg-brand-card/40 p-8 transition-all hover:-translate-y-1 hover:border-brand-primary/60 hover:shadow-[0_30px_60px_-30px_rgba(0,229,168,0.4)]"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary ring-1 ring-inset ring-brand-primary/20">
                  {p.icon}
                </div>
                <span className="rounded-full bg-brand-primary/15 px-3 py-1 text-[10px] font-bold tracking-wider text-brand-primary">
                  FREE TRIAL
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-bold">{p.os}</h3>
              <p className="mt-1 text-sm text-brand-muted">{p.sub}</p>

              <div className="mt-5 rounded-lg border border-brand-line bg-brand-bg/60 p-3 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="truncate text-brand-text">{p.filename}</span>
                  <span className="ml-3 flex-shrink-0 text-brand-muted">
                    {p.size}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3.5 text-sm font-semibold text-brand-bg transition-all hover:bg-brand-primaryDim hover:shadow-[0_0_30px_rgba(0,229,168,0.45)]"
                aria-label={`${p.os}용 넥스트퀀트 다운로드`}
              >
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
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {p.os} 다운로드
              </button>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-brand-muted">
          ※ 다운로드 링크는 회원가입 완료 후 발급된 라이선스로 활성화됩니다.
          설치 중 보안 경고가 표시될 경우 가이드를 참고해주세요.
        </p>
      </div>
    </section>
  );
}

function StepsPreview() {
  const steps = [
    { n: "01", t: "회원가입 및 프로그램 다운로드" },
    { n: "02", t: "거래소 API 연동" },
    { n: "03", t: "투자 성향 선택 및 구동" },
  ];

  return (
    <section className="section-padding border-y border-brand-line bg-brand-surface/40">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold tracking-[0.18em] text-brand-primary">
            STEP BY STEP
          </span>
          <h2 className="mt-4 section-title">
            <span className="gradient-text">3단계</span>로 끝나는 시작
          </h2>
          <p className="mt-5 section-sub">
            자세한 단계별 안내 가이드는 곧 공개될 예정입니다.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-line to-transparent md:block" />
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="relative rounded-2xl border border-brand-line bg-brand-card/40 p-8 text-center"
              >
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-brand-primary/40 bg-brand-bg text-base font-extrabold text-brand-primary">
                  {s.n}
                </div>
                <h3 className="mt-5 text-lg font-bold leading-snug">{s.t}</h3>
                <p className="mt-3 text-sm text-brand-muted">
                  상세 안내 콘텐츠 준비 중
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-xl items-center gap-3 rounded-2xl border border-brand-primary/30 bg-brand-primary/5 p-5">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-brand-primary">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
          </div>
          <p className="text-sm leading-relaxed text-brand-text">
            <span className="font-semibold text-brand-primary">
              안내 공개 예정 ·
            </span>{" "}
            각 단계별 상세 가이드(스크린샷·API 키 등록 보안 가이드 포함)는 추후
            업데이트됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}

function FaqShort() {
  const faqs = [
    {
      q: "체험판은 정말 무료인가요?",
      a: "네, 회원가입만으로 모든 핵심 기능을 무료로 체험할 수 있습니다. 결제 정보 등록은 필요하지 않습니다.",
    },
    {
      q: "거래소 API 키는 안전한가요?",
      a: "출금 권한은 제외하고 조회·매매 권한만 사용하며, AES-256으로 암호화되어 로컬에 저장됩니다. 자세한 보안 가이드는 회원가입 후 안내드립니다.",
    },
    {
      q: "어떤 거래소를 지원하나요?",
      a: "Binance, Bybit, OKX 등 주요 글로벌 거래소를 지원하며, 지속적으로 연동 거래소를 확대하고 있습니다.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-x">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="section-title">자주 묻는 질문</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-brand-line bg-brand-card/40 p-5 open:border-brand-primary/40 open:bg-brand-card/70"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold">
                  <span>{f.q}</span>
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-brand-line text-brand-primary transition-transform group-open:rotate-45">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="h-3.5 w-3.5"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/support" className="btn-ghost">
              더 많은 질문 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
