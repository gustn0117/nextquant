import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "고객지원 | 넥스트퀀트 NEXT QUANT",
  description:
    "FAQ, 이메일 문의, 1:1 채팅 등 다양한 채널로 신속하게 도와드립니다.",
};

export default function SupportPage() {
  return (
    <>
      <Hero />
      <ChannelCards />
      <FaqFull />
      <ContactSection />
    </>
  );
}

/* ─────────── Hero (dark) ─────────── */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/5">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--ink)" }}
      />
      <div className="dot-grid-dark pointer-events-none absolute inset-0 -z-10" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32"
        style={{
          background: "linear-gradient(0deg, rgba(8,15,30,0.95), transparent)",
        }}
      />

      <div className="container-x relative pb-24 pt-32 text-center md:pb-28 md:pt-40">
        <h1 className="fade-up fade-up-1 mt-6 text-5xl font-extrabold tracking-tightest text-white md:text-7xl">
          궁금한 점,
          <br />
          <span className="text-brand-primary">바로 답변드립니다.</span>
        </h1>
        <p className="fade-up fade-up-2 mx-auto mt-7 max-w-2xl text-base font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] md:text-xl">
          FAQ에서 답을 찾지 못했다면 이메일·채팅으로
          <br className="hidden md:block" />
          평일 10:00–18:00 안에 신속하게 답변드립니다.
        </p>
        <div className="fade-up fade-up-3 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="mailto:contact@nextquant.kr" className="btn-primary">
            이메일 문의
          </a>
          <a href="#faq" className="btn-outline-light">
            FAQ 먼저 보기
          </a>
        </div>

        <div className="fade-up fade-up-4 mx-auto mt-10 inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70">
          <span className="live-dot" /> 평균 응답 시간 4시간 이내 (지난 30일)
        </div>
      </div>
    </section>
  );
}

/* ─────────── Channels ─────────── */
function ChannelCards() {
  const channels = [
    {
      icon: <MailIcon />,
      label: "이메일",
      value: "contact@nextquant.kr",
      desc: "평일 24시간 내 답변",
      action: "메일 보내기",
      href: "mailto:contact@nextquant.kr",
    },
    {
      icon: <ChatIcon />,
      label: "1:1 채팅",
      value: "프로그램 내 채팅창",
      desc: "평일 10:00 - 18:00",
      action: "채팅 열기",
      href: "#",
    },
    {
      icon: <DocIcon />,
      label: "사용설명서",
      value: "온라인 매뉴얼",
      desc: "기능별 상세 가이드",
      action: "매뉴얼 보기",
      href: "#",
    },
  ];
  return (
    <section className="border-b border-brand-line bg-white section-padding">
      <div className="container-x">
        <div className="grid gap-5 md:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="lift group card-soft block p-7"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primarySoft text-brand-primary">
                  {c.icon}
                </div>
                <span className="text-brand-muted transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
              <div className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-muted">
                {c.label}
              </div>
              <div className="mt-1 text-lg font-extrabold text-brand-text">
                {c.value}
              </div>
              <p className="mt-3 text-sm text-brand-muted">{c.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary">
                {c.action}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── FAQ full ─────────── */
function FaqFull() {
  const items: { q: string; a: string }[] = [
    {
      q: "프로그램은 어디에서 실행되나요?",
      a: "사용자 본인의 PC에서 실행됩니다. 외부 서버를 거치지 않으며, API Key 역시 사용자 PC에만 저장됩니다.",
    },
    {
      q: "PC를 꺼두면 매매가 멈추나요?",
      a: "네. 프로그램이 실행 중일 때만 자동매매가 작동합니다. 24시간 가동을 원하시면 PC를 켜두시거나 VPS(원격 서버) 사용을 권장드립니다.",
    },
    {
      q: "바이낸스 외에 다른 거래소도 지원하나요?",
      a: "현재는 바이낸스 선물(Binance Futures)만 지원합니다.",
    },
    {
      q: "API Key에 출금 권한이 필요한가요?",
      a: "아닙니다. '읽기'와 '거래' 권한만 부여하시면 됩니다. 출금 권한은 절대 부여하지 마세요.",
    },
    {
      q: "라이센스는 어떻게 발급되나요?",
      a: "SMS 인증 후 자동으로 발급됩니다. 등록하신 휴대폰 번호로 인증 코드가 전송됩니다.",
    },
    {
      q: "무료 체험은 어떻게 신청하나요?",
      a: "홈페이지의 [무료 다운로드] 버튼을 통해 7일 체험판이 제공됩니다. 자동 결제는 없으며, 별도의 카드 등록도 필요하지 않습니다.",
    },
    {
      q: "환불 정책은 어떻게 되나요?",
      a: "「전자상거래 등에서의 소비자보호에 관한 법률」 제17조에 따라, 결제일로부터 7일 이내에는 청약철회(환불)가 가능합니다.",
    },
    {
      q: "손실이 나면 보상해주나요?",
      a: "보상해드리지 않습니다. 넥스트퀀트는 매매 실행을 자동화하는 도구이며, 투자의 최종 결정과 책임은 사용자 본인에게 있습니다.",
    },
    {
      q: "여러 PC에서 동시에 사용할 수 있나요?",
      a: "라이센스 1개당 1대의 PC에서만 사용 가능합니다. PC 교체가 필요하시면 고객센터를 통해 재발급을 요청해 주세요.",
    },
    {
      q: "회사의 레퍼럴 코드를 적용해야 하나요?",
      a: "강요하지 않습니다. 정상적인 자동매매 프로그램이라면 회사 측 레퍼럴 코드 가입을 강제하지 않습니다. 넥스트퀀트는 사용자가 직접 만든 바이낸스 계정에 API만 연결해 동작하므로, 어떤 계정으로 가입하셨는지는 운용에 영향을 주지 않습니다.",
    },
    {
      q: "설정값은 어떻게 정해야 하나요?",
      a: "기본값으로도 사용 가능하지만, 본인의 투자 성향(보수형 / 공격형)에 맞춰 슬라이더로 조정하실 수 있습니다. 권장 설정은 YouTube 가이드와 카카오톡 채널에서 안내해 드립니다.",
    },
  ];

  return (
    <section id="faq" className="bg-brand-subtle section-padding">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 section-title">자주 묻는 질문</h2>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="divide-y divide-brand-lineSoft overflow-hidden rounded-xl border border-brand-line bg-white shadow-soft">
            {items.map((f) => (
              <details key={f.q} className="group p-6 open:bg-brand-subtle">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-brand-text">
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-primarySoft text-[11px] font-extrabold text-brand-primary">
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
        </div>
      </div>
    </section>
  );
}

/* ─────────── Contact section ─────────── */
function ContactSection() {
  return (
    <section className="section-padding">
      <div className="container-x">
        <ContactForm />
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}
function DocIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  );
}
