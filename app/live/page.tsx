import Link from "next/link";
import type { Metadata } from "next";
import { supabaseAdmin, rowsToSettings } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "실시간 성과 | 넥스트퀀트 NEXT QUANT",
  description:
    "넥스트퀀트 프로그램이 실제로 구동되는 모습을 유튜브 라이브로 확인하세요.",
};

export const dynamic = "force-dynamic";

/** 유튜브 URL을 embed src로 변환 (watch / youtu.be / live / embed 지원) */
function toEmbed(url: string): string | null {
  if (!url) return null;
  try {
    const u = new URL(url.trim());
    const host = u.hostname.replace(/^www\./, "");
    if (host === "youtu.be") {
      const id = u.pathname.slice(1);
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (host === "youtube.com" || host === "m.youtube.com") {
      if (u.pathname.startsWith("/embed/")) return url;
      if (u.pathname.startsWith("/live/")) {
        const id = u.pathname.split("/")[2];
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;
    }
    return null;
  } catch {
    return null;
  }
}

export default async function LivePage() {
  let liveUrl = "";
  try {
    const { data } = await supabaseAdmin.from("settings").select("key, value");
    liveUrl = rowsToSettings(data).youtube_live_url;
  } catch {
    liveUrl = "";
  }
  const embed = toEmbed(liveUrl);

  return (
    <section className="relative isolate overflow-hidden border-b border-white/5">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--ink)" }}
      />
      <div className="dot-grid-dark pointer-events-none absolute inset-0 -z-10" />

      <div className="container-x relative pb-24 pt-28 md:pt-36">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white/55">
            <span className="h-px w-8 bg-white/20" />
            LIVE
            <span className="h-px w-8 bg-white/20" />
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tightest text-white md:text-6xl">
            실시간 성과
          </h1>
          <p className="mt-6 text-base font-medium text-white/85 md:text-lg">
            넥스트퀀트 프로그램이 실제로 구동되는 모습을
            <br className="hidden md:block" />
            유튜브 라이브로 가감 없이 공개합니다.
          </p>
        </div>

        {/* 영상 영역 */}
        <div className="mx-auto mt-12 max-w-4xl">
          {embed ? (
            <div className="card-dark-elevated overflow-hidden">
              <div className="relative aspect-video w-full">
                <iframe
                  src={embed}
                  title="넥스트퀀트 실시간 성과 라이브"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          ) : (
            <div className="card-dark-elevated flex aspect-video w-full flex-col items-center justify-center px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-[#FF4444]">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
                </svg>
              </div>
              <h2 className="mt-5 text-xl font-extrabold text-white">
                라이브 준비 중입니다
              </h2>
              <p className="mt-2 max-w-md text-sm text-white/60">
                실시간 구동 화면을 보여드릴 유튜브 라이브를 준비하고 있습니다.
                곧 이곳에서 확인하실 수 있습니다.
              </p>
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/performance" className="btn-primary btn-3d">
            매매 내역 보기
          </Link>
          <Link href="/guide" className="btn-outline-light">
            무료체험 다운로드
          </Link>
        </div>
      </div>
    </section>
  );
}
