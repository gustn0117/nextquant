import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "고객지원 | 넥스트퀀트 NEXT QUANT",
  description:
    "FAQ, 이메일 문의, 1:1 채팅 등 다양한 채널로 신속하게 도와드립니다.",
};

const SUPPORT_IMG =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80";

export default function SupportPage() {
  return (
    <>
      <SupportHero />
      <ChannelCards />
      <FaqFull />
      <ContactForm />
    </>
  );
}

function SupportHero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line">
      <div className="absolute inset-0 bg-hero-soft" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="container-x relative section-padding pt-24 md:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <span className="eyebrow">SUPPORT</span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
              궁금한 점, <br />
              <span className="gradient-text">바로 답변드립니다.</span>
            </h1>
            <p className="mt-7 section-sub">
              FAQ에서 답을 찾지 못했다면 이메일·채팅으로 평일 10:00–18:00 안에
              신속하게 답변드립니다.
            </p>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
              <a href="mailto:contact@nextquant.kr" className="btn-primary">
                이메일 문의
              </a>
              <a href="#faq" className="btn-ghost">
                FAQ 먼저 보기
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-brand-line bg-white shadow-elevated">
            <img
              src={SUPPORT_IMG}
              alt="고객지원 이미지"
              className="aspect-[5/4] w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ChannelCards() {
  const channels = [
    {
      icon: <MailIcon />,
      label: "이메일",
      value: "contact@nextquant.kr",
      desc: "평일 24시간 내 답변",
    },
    {
      icon: <ChatIcon />,
      label: "1:1 채팅",
      value: "프로그램 내 채팅창",
      desc: "평일 10:00 - 18:00",
    },
    {
      icon: <DocIcon />,
      label: "사용설명서",
      value: "온라인 매뉴얼",
      desc: "기능별 상세 가이드",
    },
  ];
  return (
    <section className="section-padding">
      <div className="container-x">
        <div className="grid gap-6 md:grid-cols-3">
          {channels.map((c) => (
            <div key={c.label} className="card-soft p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primarySoft text-brand-primary">
                {c.icon}
              </div>
              <div className="mt-5 text-sm font-semibold tracking-[0.18em] text-brand-muted">
                {c.label}
              </div>
              <div className="mt-1 text-lg font-bold text-brand-text">
                {c.value}
              </div>
              <p className="mt-3 text-sm text-brand-muted">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqFull() {
  const groups: { tag: string; items: { q: string; a: string }[] }[] = [
    {
      tag: "이용 / 설치",
      items: [
        {
          q: "체험판은 어떻게 시작하나요?",
          a: "홈페이지에서 OS에 맞는 설치 파일을 받고, 이메일로 가입하면 14일 무료체험이 자동으로 시작됩니다.",
        },
        {
          q: "구매 후에도 환불이 가능한가요?",
          a: "결제일로부터 7일 이내, 실거래가 발생하지 않은 경우 100% 환불 가능합니다. 자세한 내용은 약관을 확인해주세요.",
        },
        {
          q: "여러 대의 PC에서 동시에 사용 가능한가요?",
          a: "1개 계정으로 최대 2대까지 등록 가능하며, 동시 매매는 1대에서만 가능합니다.",
        },
      ],
    },
    {
      tag: "보안 / API",
      items: [
        {
          q: "API 키는 어디에 저장되나요?",
          a: "사용자 PC 내 암호화된 로컬 스토리지에 저장되며, 넥스트퀀트 서버에는 전송되지 않습니다.",
        },
        {
          q: "출금이 가능한 권한도 등록할 수 있나요?",
          a: "출금 권한이 부여된 API 키는 등록 단계에서 거부됩니다. 거래 권한만 활성화된 키만 사용 가능합니다.",
        },
        {
          q: "IP 화이트리스트 설정이 필수인가요?",
          a: "강력히 권장합니다. 거래소에서 IP 화이트리스트를 설정하면 키가 유출되어도 자산 안전성이 크게 높아집니다.",
        },
      ],
    },
    {
      tag: "전략 / 수익",
      items: [
        {
          q: "수익을 보장하나요?",
          a: "어떠한 자동매매 프로그램도 수익을 보장할 수 없습니다. 넥스트퀀트는 검증된 룰셋으로 일관성 있는 매매를 지원합니다.",
        },
        {
          q: "전략을 직접 만들 수 있나요?",
          a: "Pro 플랜에서 지표·진입조건·청산조건을 시각적으로 조합하는 전략 빌더를 제공합니다.",
        },
        {
          q: "백테스팅은 어디까지 가능한가요?",
          a: "거래소별로 최대 5년치 분봉 데이터까지 백테스팅 가능합니다.",
        },
      ],
    },
  ];

  return (
    <section
      id="faq"
      className="border-y border-brand-line bg-brand-subtle section-padding"
    >
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold tracking-[0.18em] text-brand-primary">
            FAQ
          </span>
          <h2 className="mt-3 section-title">자주 묻는 질문</h2>
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-10">
          {groups.map((g) => (
            <div key={g.tag}>
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-brand-primarySoft px-3 py-1 text-xs font-bold tracking-[0.18em] text-brand-primary">
                  {g.tag}
                </span>
                <span className="h-px flex-1 bg-brand-line" />
              </div>
              <div className="divide-y divide-brand-lineSoft overflow-hidden rounded-2xl border border-brand-line bg-white">
                {g.items.map((f) => (
                  <details
                    key={f.q}
                    className="group p-6 open:bg-brand-subtle"
                  >
                    <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-brand-text">
                      {f.q}
                      <span className="text-brand-muted transition-transform group-open:rotate-180">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-brand-muted">{f.a}</p>
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
    <section className="section-padding">
      <div className="container-x">
        <div className="mx-auto grid max-w-5xl gap-10 rounded-3xl border border-brand-line bg-white p-8 shadow-card md:p-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="text-sm font-semibold tracking-[0.18em] text-brand-accent">
              CONTACT
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              아직 답을 못 찾으셨나요?
            </h2>
            <p className="mt-5 text-base text-brand-muted">
              아래 폼을 작성해주시면 담당자가 직접 답변드립니다.
              <br />
              평일 기준 24시간 내 회신을 목표로 합니다.
            </p>
            <div className="mt-8 space-y-3 text-sm text-brand-subText">
              <div className="flex items-center gap-3">
                <MailIcon /> contact@nextquant.kr
              </div>
              <div className="flex items-center gap-3">
                <ClockIcon /> 평일 10:00 - 18:00 (점심 12:00-13:00)
              </div>
            </div>
          </div>

          <form className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="이름" placeholder="홍길동" />
              <Field
                label="이메일"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <Field label="제목" placeholder="문의 제목을 입력해주세요" />
            <label className="flex flex-col gap-2 text-sm font-semibold text-brand-text">
              내용
              <textarea
                rows={6}
                placeholder="문의 내용을 입력해주세요"
                className="rounded-xl border border-brand-line bg-white px-4 py-3 text-base font-normal text-brand-text placeholder:text-brand-mutedSoft focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primarySoft"
              />
            </label>
            <button
              type="button"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3.5 text-base font-bold text-white shadow-soft transition-all hover:bg-brand-primaryDim hover:shadow-[0_10px_28px_-10px_rgba(0,183,131,0.55)]"
            >
              문의 보내기
            </button>
            <p className="text-xs text-brand-muted">
              · 작성하신 정보는 문의 처리 목적으로만 사용되며, 처리 완료 후
              안전하게 폐기됩니다.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm font-semibold text-brand-text">
      {label}
      <input
        type={type}
        placeholder={placeholder}
        className="rounded-xl border border-brand-line bg-white px-4 py-3 text-base font-normal text-brand-text placeholder:text-brand-mutedSoft focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primarySoft"
      />
    </label>
  );
}

function MailIcon() {
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
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function ChatIcon() {
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
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function DocIcon() {
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
