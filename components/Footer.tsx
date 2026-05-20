import Link from "next/link";

const NAV_GROUPS = [
  {
    title: "프로덕트",
    items: [
      { label: "프로그램 소개", href: "/program" },
      { label: "실시간 성과", href: "/live" },
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
    <footer className="relative border-t border-brand-line bg-white">
      <div className="container-x pb-12 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo-brain.png"
                alt=""
                aria-hidden
                className="h-10 w-auto select-none"
                draggable={false}
              />
              <div className="flex flex-col leading-none">
                <span className="text-base font-extrabold tracking-[0.04em] text-brand-text">
                  NEXT QUANT
                </span>
                <span className="mt-1 text-[10px] font-medium tracking-[0.22em] text-brand-muted">
                  넥스트퀀트
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-brand-muted">
              감정을 빼고, 원칙을 더하다.
              <br />
              데이터와 알고리즘으로 24시간 멈추지 않는 자동매매를 경험하세요.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Windows 10+", "API 화이트리스트"].map((t) => (
                <span key={t} className="stat-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {NAV_GROUPS.map((g) => (
              <div key={g.title}>
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-muted">
                  {g.title}
                </h4>
                <ul className="mt-4 space-y-3 text-sm">
                  {g.items.map((it) => (
                    <li key={it.label}>
                      <Link
                        href={it.href}
                        className="text-brand-subText transition-colors hover:text-brand-primary"
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

        <div className="mt-14 divider-dashed" />

        <div className="mt-6 flex flex-col gap-3 text-xs text-brand-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} NEXT QUANT. All rights reserved.</p>
          <p className="md:text-right">
            본 서비스는 투자 결정을 보조하는 도구이며, 투자의 최종 책임은 사용자
            본인에게 있습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
