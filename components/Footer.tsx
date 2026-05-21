import Link from "next/link";

const NAV_GROUPS = [
  {
    title: "프로덕트",
    items: [
      { label: "프로그램 소개", href: "/program" },
      { label: "수익인증", href: "/performance" },
      { label: "이용 방법", href: "/guide" },
    ],
  },
  {
    title: "리소스",
    items: [
      { label: "자주 묻는 질문", href: "/support" },
      { label: "사용 가이드", href: "/guide" },
    ],
  },
  {
    title: "회사",
    items: [
      { label: "이메일 문의", href: "mailto:contact@nextquant.kr" },
      { label: "이용약관", href: "#" },
      { label: "개인정보 처리방침", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="relative text-white"
      style={{ background: "var(--ink-2)" }}
    >
      <div className="dot-grid-dark pointer-events-none absolute inset-0 opacity-50" />
      <div className="container-x relative pb-12 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center bg-brand-primary text-base font-black text-white">
                N
              </span>
              <div className="flex flex-col leading-none">
                <span className="text-base font-extrabold tracking-[0.02em] text-white">
                  NEXT QUANT
                </span>
                <span className="mt-1 text-[10px] font-bold tracking-[0.22em] text-white/45">
                  넥스트퀀트
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">
              감정을 빼고, 원칙을 더하다.
              <br />
              데이터와 알고리즘으로 24시간 멈추지 않는 자동매매를 경험하세요.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Windows 10+", "API 화이트리스트"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-sm border border-white/12 bg-white/5 px-2.5 py-1 text-xs font-bold text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {NAV_GROUPS.map((g) => (
              <div key={g.title}>
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                  {g.title}
                </h4>
                <ul className="mt-4 space-y-3 text-sm">
                  {g.items.map((it) => (
                    <li key={it.label}>
                      <Link
                        href={it.href}
                        className="font-medium text-white/65 transition-colors hover:text-brand-primary"
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-white/10" />

        <div className="mt-6 flex flex-col gap-3 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} NEXT QUANT. All rights reserved.</p>
          <p className="leading-relaxed md:text-right">
            본 서비스는 투자 결정을 보조하는 도구이며, 투자의 최종 책임은 사용자
            본인에게 있습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
