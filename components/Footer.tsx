import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-brand-line bg-brand-surface/40">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="relative h-9 w-9 overflow-hidden rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent">
                <div className="absolute inset-[2px] flex items-center justify-center rounded-md bg-brand-bg text-lg font-black text-brand-primary">
                  N
                </div>
              </div>
              <div>
                <div className="text-base font-extrabold">NEXT QUANT</div>
                <div className="text-[11px] tracking-[0.18em] text-brand-muted">
                  넥스트퀀트
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-muted">
              감정을 빼고 원칙을 더하다.
              <br />
              철저한 데이터 분석과 정교한 알고리즘으로
              <br />
              24시간 멈추지 않는 자동매매를 경험하세요.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-brand-text">서비스</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-brand-muted">
              <li>
                <Link
                  href="/program"
                  className="transition-colors hover:text-brand-primary"
                >
                  프로그램 소개
                </Link>
              </li>
              <li>
                <Link
                  href="/guide"
                  className="transition-colors hover:text-brand-primary"
                >
                  이용 방법
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="transition-colors hover:text-brand-primary"
                >
                  고객지원
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-brand-text">고객지원</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-brand-muted">
              <li>평일 10:00 - 18:00</li>
              <li>contact@nextquant.kr</li>
              <li>
                <Link
                  href="/support"
                  className="transition-colors hover:text-brand-primary"
                >
                  자주 묻는 질문
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-brand-line pt-6 text-xs text-brand-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} NEXT QUANT. All rights reserved.</p>
          <p className="leading-relaxed md:text-right">
            본 서비스는 투자 결정을 보조하는 도구로, 투자에 대한 최종 책임은
            사용자 본인에게 있습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
