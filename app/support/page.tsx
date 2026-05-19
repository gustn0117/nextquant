import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "고객지원 | 넥스트퀀트 NEXT QUANT",
  description:
    "넥스트퀀트 고객지원 — 자주 묻는 질문, 1:1 문의, 운영 시간 안내. 빠르고 정확하게 도와드립니다.",
};

export default function SupportPage() {
  return (
    <>
      <SupportHero />
      <ChannelGrid />
      <Faq />
      <ContactForm />
    </>
  );
}

function SupportHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-80" />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="container-x relative section-padding pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold tracking-[0.18em] text-brand-primary">
            CUSTOMER SUPPORT
          </span>
          <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.15] tracking-tight md:text-6xl">
            궁금한 점, <span className="gradient-text">언제든 물어보세요.</span>
          </h1>
          <p className="mt-7 section-sub">
            넥스트퀀트 전담팀이 빠르고 정확하게 안내드립니다.
            <br className="hidden md:block" />
            평일 10:00–18:00 운영, 평균 응답 시간 2시간 이내.
          </p>
        </div>
      </div>
    </section>
  );
}

function ChannelGrid() {
  const channels = [
    {
      label: "이메일 문의",
      value: "contact@nextquant.kr",
      desc: "기능 / 결제 / 환불 등 모든 문의를 받습니다.",
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
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
    {
      label: "1:1 채팅",
      value: "평일 10:00 – 18:00",
      desc: "상담사 연결, 점심시간(12–13시) 제외.",
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
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      label: "공지사항",
      value: "업데이트 · 점검 안내",
      desc: "프로그램 업데이트와 거래소 점검 일정 안내.",
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
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-x">
        <div className="grid gap-5 md:grid-cols-3">
          {channels.map((c) => (
            <div
              key={c.label}
              className="rounded-2xl border border-brand-line bg-brand-card/40 p-7 transition-all hover:-translate-y-1 hover:border-brand-primary/60"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary ring-1 ring-inset ring-brand-primary/20">
                {c.icon}
              </div>
              <div className="mt-5 text-xs font-bold tracking-[0.18em] text-brand-primary">
                {c.label.toUpperCase()}
              </div>
              <div className="mt-2 text-xl font-bold">{c.value}</div>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const groups: { title: string; items: { q: string; a: string }[] }[] = [
    {
      title: "서비스",
      items: [
        {
          q: "체험판과 정식 버전의 차이가 있나요?",
          a: "체험판은 핵심 기능을 모두 제공하지만, 동시 운용 가능한 전략 수 등 일부 한도가 적용됩니다. 정식 버전 안내는 추후 공지됩니다.",
        },
        {
          q: "어떤 거래소를 지원하나요?",
          a: "Binance, Bybit, OKX 등 글로벌 주요 거래소를 지원하며, 점진적으로 확장 예정입니다.",
        },
        {
          q: "운영체제는 어떤 것이 지원되나요?",
          a: "Windows 10 / 11(64-bit), macOS 12 Monterey 이상에서 정상 동작합니다.",
        },
      ],
    },
    {
      title: "보안",
      items: [
        {
          q: "API 키는 어디에 저장되나요?",
          a: "API 키는 사용자의 로컬 디스크에 AES-256으로 암호화되어 저장됩니다. 넥스트퀀트 서버로 전송되지 않습니다.",
        },
        {
          q: "출금이 가능한가요?",
          a: "보안을 위해 API 키 등록 시 출금 권한은 반드시 제외해야 합니다. 프로그램은 조회·매매 권한만 사용합니다.",
        },
        {
          q: "내 자산을 운영하는 주체는 누구인가요?",
          a: "프로그램은 사용자 PC에서 사용자 명의의 거래소 계정으로 직접 매매를 수행합니다. 넥스트퀀트가 자금을 위탁받지 않습니다.",
        },
      ],
    },
    {
      title: "리스크 및 운영",
      items: [
        {
          q: "수익은 보장되나요?",
          a: "어떠한 트레이딩 시스템도 수익을 보장하지 않습니다. 넥스트퀀트는 검증된 전략과 리스크 컨트롤을 제공할 뿐이며, 최종 손익은 시장 상황에 따라 달라집니다.",
        },
        {
          q: "갑작스러운 시장 폭락이 발생하면 어떻게 되나요?",
          a: "사전에 설정된 MDD 기준에 따라 자동으로 분할 진입/손절이 수행되며, 마진 비율 위험 단계에 도달하면 자동으로 포지션을 축소합니다.",
        },
        {
          q: "PC를 꺼도 매매가 진행되나요?",
          a: "프로그램이 실행 중인 동안에만 매매가 동작합니다. 24시간 운영을 위해서는 PC가 켜져 있어야 하며, 향후 클라우드 모드 지원이 예정되어 있습니다.",
        },
      ],
    },
  ];

  return (
    <section className="section-padding border-y border-brand-line bg-brand-surface/40">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold tracking-[0.18em] text-brand-primary">
            FAQ
          </span>
          <h2 className="mt-4 section-title">자주 묻는 질문</h2>
          <p className="mt-5 section-sub">
            답변이 보이지 않는다면 아래 폼으로 문의를 남겨주세요.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-10">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="mb-4 inline-block rounded-full border border-brand-primary/40 bg-brand-primary/10 px-4 py-1 text-sm font-bold text-brand-primary">
                {g.title}
              </h3>
              <div className="space-y-3">
                {g.items.map((f) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-x">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-sm font-semibold tracking-[0.18em] text-brand-primary">
              CONTACT
            </span>
            <h2 className="mt-4 section-title">1:1 문의 남기기</h2>
            <p className="mt-5 section-sub">
              아래 양식을 작성해주시면 영업일 기준 24시간 이내 회신드립니다.
            </p>
          </div>

          <form
            className="mt-12 space-y-5 rounded-3xl border border-brand-line bg-brand-card/40 p-7 md:p-10"
            aria-label="고객 문의 양식"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="이름" name="name" placeholder="홍길동" />
              <Field
                label="이메일"
                name="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">
                문의 유형
                <select
                  name="category"
                  className="mt-2 block w-full rounded-xl border border-brand-line bg-brand-bg/60 px-4 py-3 text-sm text-brand-text outline-none transition-colors focus:border-brand-primary"
                  defaultValue=""
                >
                  <option value="" disabled>
                    선택해주세요
                  </option>
                  <option value="service">서비스 / 기능 문의</option>
                  <option value="install">설치 / 사용 문의</option>
                  <option value="security">보안 / API 키 관련</option>
                  <option value="billing">결제 / 라이선스</option>
                  <option value="etc">기타</option>
                </select>
              </label>
            </div>

            <div>
              <label className="block text-sm font-semibold">
                문의 내용
                <textarea
                  name="message"
                  rows={6}
                  placeholder="문의하실 내용을 자세히 작성해주세요."
                  className="mt-2 block w-full resize-none rounded-xl border border-brand-line bg-brand-bg/60 px-4 py-3 text-sm text-brand-text outline-none transition-colors placeholder:text-brand-muted/70 focus:border-brand-primary"
                />
              </label>
            </div>

            <div className="flex items-start gap-2.5 text-sm text-brand-muted">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                className="mt-0.5 h-4 w-4 accent-brand-primary"
              />
              <label htmlFor="agree" className="leading-relaxed">
                개인정보 수집·이용에 동의합니다. 수집된 정보는 문의 응대
                목적으로만 이용되며, 처리 완료 후 즉시 파기됩니다.
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-brand-primary py-4 text-base font-bold text-brand-bg transition-all hover:bg-brand-primaryDim hover:shadow-[0_0_30px_rgba(0,229,168,0.45)]"
            >
              문의 보내기
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-brand-muted">
            긴급한 문의는{" "}
            <a
              href="mailto:contact@nextquant.kr"
              className="font-semibold text-brand-primary hover:underline"
            >
              contact@nextquant.kr
            </a>
            로 직접 보내주세요.
          </p>

          <div className="mt-10 text-center">
            <Link href="/" className="btn-ghost">
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 block w-full rounded-xl border border-brand-line bg-brand-bg/60 px-4 py-3 text-sm text-brand-text outline-none transition-colors placeholder:text-brand-muted/70 focus:border-brand-primary"
      />
    </label>
  );
}
