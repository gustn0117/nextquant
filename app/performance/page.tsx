import Link from "next/link";
import type { Metadata } from "next";
import { supabaseAdmin, type PerformancePost } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "수익인증 | 넥스트퀀트 NEXT QUANT",
  description:
    "넥스트퀀트 프로그램 매매 내역과 실제 바이낸스 매매 내역을 가공 없이 공개합니다.",
};

export const dynamic = "force-dynamic";

const COVER_IMG =
  "https://images.unsplash.com/photo-1554260570-9140fd3b7614?auto=format&fit=crop&w=1400&q=80";

export default async function PerformancePage() {
  let posts: PerformancePost[] = [];
  try {
    const { data } = await supabaseAdmin
      .from("performance_posts")
      .select("*")
      .order("posted_at", { ascending: false });
    posts = data ?? [];
  } catch {
    posts = [];
  }

  return (
    <>
      <Hero hasContent={posts.length > 0} />
      <PostsGallery posts={posts} />
      <Disclaimer />
    </>
  );
}

/* ─────────── Hero ─────────── */
function Hero({ hasContent }: { hasContent: boolean }) {
  return (
    <section className="relative overflow-hidden border-b border-brand-line bg-white">
      <div className="dot-grid-light pointer-events-none absolute inset-0 opacity-90" />
      <div className="container-x relative section-padding pt-24 md:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
              <span className="h-px w-8 bg-brand-primary/40" />
              PROOF
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tightest md:text-6xl">
              가공 없이 공개하는
              <br />
              <span className="accent-underline">수익 인증</span>
            </h1>
            <p className="mt-7 section-sub">
              넥스트퀀트 프로그램의 매매 내역과 실제 바이낸스 매매 내역을 함께
              게시합니다. 모든 기록은 관리자가 직접 검수해 올립니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="stat-chip">바이낸스 선물 기준</span>
              <span className="stat-chip">
                {hasContent ? "수익 인증 공개 중" : "게시물 준비 중"}
              </span>
            </div>
          </div>
          <div className="img-zoom relative overflow-hidden rounded-xl border border-brand-line bg-white shadow-depth">
            <CornerMarker />
            <img
              src={COVER_IMG}
              alt="수익 인증"
              className="aspect-[5/4] w-full object-cover"
              loading="eager"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 65%, rgba(0,0,0,0.3) 100%)",
              }}
            />
            <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-md bg-white/95 px-3 py-1.5 text-xs font-bold text-brand-text backdrop-blur">
              Profit Proof
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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

/* ─────────── 수익 인증 게시물 갤러리 ─────────── */
function PostsGallery({ posts }: { posts: PerformancePost[] }) {
  return (
    <section className="border-b border-brand-line bg-white section-padding">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
            Result Log
          </span>
          <h2 className="mt-4 section-title">수익 인증 게시물</h2>
          <p className="mt-5 section-sub">
            프로그램 매매 내역과 실제 바이낸스 매매 내역을 함께 게시합니다.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="mt-10 rounded-xl border border-brand-line bg-white p-16 text-center shadow-soft">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-subtle text-brand-muted">
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
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <h3 className="mt-4 text-base font-bold text-brand-text">
              아직 등록된 수익 인증이 없습니다
            </h3>
            <p className="mt-1 text-sm text-brand-muted">
              게시물이 등록되면 이곳에 표시됩니다.
            </p>
          </div>
        ) : (
          <div className="mt-10 space-y-8">
            {posts.map((p) => (
              <article
                key={p.id}
                className="overflow-hidden rounded-xl border border-brand-line bg-white shadow-card"
              >
                <div className="flex flex-wrap items-center gap-2.5 border-b border-brand-lineSoft px-6 py-4">
                  <span className="inline-flex h-2 w-2 rounded-full bg-brand-primary" />
                  <h3 className="text-lg font-extrabold text-brand-text">
                    {p.title}
                  </h3>
                </div>

                <div className="grid gap-px bg-brand-line md:grid-cols-2">
                  <PostFigure label="프로그램 매매 내역" src={p.program_image} />
                  <PostFigure
                    label="실제 바이낸스 매매 내역"
                    src={p.binance_image}
                  />
                </div>

                {p.note && (
                  <p className="px-6 py-4 text-sm text-brand-muted">{p.note}</p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function PostFigure({
  label,
  src,
}: {
  label: string;
  src: string | null;
}) {
  if (!src) {
    return (
      <figure className="flex aspect-[16/10] items-center justify-center bg-brand-subtle">
        <figcaption className="text-xs text-brand-mutedSoft">
          {label} — 이미지 없음
        </figcaption>
      </figure>
    );
  }
  return (
    <figure className="relative bg-brand-subtle">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={label}
        className="aspect-[16/10] w-full object-contain"
        loading="lazy"
      />
      <figcaption className="absolute left-4 top-4 rounded-md bg-brand-text/80 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur">
        {label}
      </figcaption>
    </figure>
  );
}

/* ─────────── Disclaimer ─────────── */
function Disclaimer() {
  return (
    <section className="pb-24 pt-20">
      <div className="container-x">
        <div className="mx-auto max-w-4xl rounded-xl border border-brand-line bg-brand-subtle p-7 text-sm text-brand-muted md:p-10">
          <p className="font-bold text-brand-text">⚠ 투자 유의 안내</p>
          <p className="mt-3">
            본 페이지의 매매 내역은 실제 운용 기록이나, 과거의 성과가 미래의
            수익을 보장하지 않습니다. 모든 투자 결정의 책임은 사용자 본인에게
            있으며, 넥스트퀀트는 매매를 보조하는 도구로서의 역할만 수행합니다.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide" className="btn-primary">
              무료체험 시작
            </Link>
            <Link href="/program" className="btn-ghost">
              프로그램 자세히 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
