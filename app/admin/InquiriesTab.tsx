"use client";

import { useMemo, useState } from "react";
import type { Inquiry } from "@/lib/supabase";

type Status = Inquiry["status"];

const STATUS_LABEL: Record<Status, string> = {
  new: "신규",
  in_progress: "처리중",
  resolved: "완료",
};

const STATUS_STYLE: Record<Status, string> = {
  new: "bg-brand-primary/15 text-brand-primary",
  in_progress: "bg-amber-500/15 text-amber-600",
  resolved: "bg-slate-200 text-slate-600",
};

function fmt(d: string) {
  const dt = new Date(d);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(
    dt.getDate(),
  )} ${pad(dt.getHours())}:${pad(dt.getMinutes())}`;
}

export default function InquiriesTab({
  initialItems,
}: {
  initialItems: Inquiry[];
}) {
  const [items, setItems] = useState<Inquiry[]>(initialItems);
  const [filter, setFilter] = useState<Status | "all">("all");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  const counts = useMemo(() => {
    const c = { all: items.length, new: 0, in_progress: 0, resolved: 0 };
    items.forEach((i) => {
      c[i.status]++;
    });
    return c;
  }, [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((it) => {
      if (filter !== "all" && it.status !== filter) return false;
      if (!q) return true;
      return (
        it.name.toLowerCase().includes(q) ||
        it.email.toLowerCase().includes(q) ||
        it.subject.toLowerCase().includes(q) ||
        it.message.toLowerCase().includes(q)
      );
    });
  }, [items, filter, query]);

  async function patchItem(
    id: string,
    body: Partial<Pick<Inquiry, "status" | "admin_note">>,
  ) {
    setBusyId(id);
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        alert(j.error || "수정 실패");
        return;
      }
      const j = (await res.json()) as { item: Inquiry };
      setItems((prev) => prev.map((p) => (p.id === id ? j.item : p)));
    } finally {
      setBusyId(null);
    }
  }

  async function deleteItem(id: string) {
    if (!confirm("이 문의를 영구 삭제하시겠습니까? 되돌릴 수 없습니다.")) return;
    setBusyId(id);
    try {
      const res = await fetch(`/api/inquiries/${id}`, { method: "DELETE" });
      if (!res.ok) {
        alert("삭제 실패");
        return;
      }
      setItems((prev) => prev.filter((p) => p.id !== id));
      if (openId === id) setOpenId(null);
    } finally {
      setBusyId(null);
    }
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-4">
        {(["all", "new", "in_progress", "resolved"] as const).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setFilter(k)}
            className={`rounded-xl border p-5 text-left transition-all ${
              filter === k
                ? "border-brand-primary bg-white shadow-soft"
                : "border-brand-line bg-white hover:border-brand-primary/40"
            }`}
          >
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-muted">
              {k === "all" ? "전체" : STATUS_LABEL[k]}
            </div>
            <div className="mt-2 text-3xl font-extrabold tracking-tightest text-brand-text tnum">
              {counts[k]}
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-md">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="이름·이메일·내용 검색"
            className="w-full rounded-md border border-brand-line bg-white px-4 py-2.5 pl-10 text-sm focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primarySoft"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <div className="text-xs text-brand-muted tnum">
          {filtered.length} / {items.length} 건
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-xl border border-brand-line bg-white shadow-soft">
        {filtered.length === 0 ? (
          <div className="p-16 text-center">
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
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </div>
            <h3 className="mt-4 text-base font-bold text-brand-text">
              문의가 없습니다
            </h3>
            <p className="mt-1 text-sm text-brand-muted">
              {items.length === 0
                ? "아직 들어온 문의가 없습니다."
                : "필터/검색 조건에 해당하는 항목이 없습니다."}
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-brand-lineSoft">
            {filtered.map((it) => {
              const isOpen = openId === it.id;
              return (
                <li key={it.id}>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : it.id)}
                    className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-brand-subtle/50"
                  >
                    <span
                      className={`rounded-md px-2 py-1 text-[11px] font-extrabold ${STATUS_STYLE[it.status]}`}
                    >
                      {STATUS_LABEL[it.status]}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-bold text-brand-text">
                        {it.subject}
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-brand-muted">
                        {it.name} · {it.email}
                      </span>
                    </span>
                    <span className="hidden text-xs text-brand-muted tnum sm:block">
                      {fmt(it.created_at)}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-brand-lineSoft bg-brand-subtle/40 px-5 py-5">
                      <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-muted">
                            내용
                          </div>
                          <div className="mt-2 whitespace-pre-wrap rounded-md border border-brand-line bg-white p-4 text-sm text-brand-text">
                            {it.message}
                          </div>

                          <div className="mt-5">
                            <label className="flex flex-col gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-muted">
                              관리자 메모
                              <textarea
                                defaultValue={it.admin_note ?? ""}
                                placeholder="내부용 메모 (사용자에게 노출되지 않음)"
                                rows={3}
                                onBlur={(e) => {
                                  const v = e.target.value;
                                  if (v !== (it.admin_note ?? "")) {
                                    patchItem(it.id, { admin_note: v });
                                  }
                                }}
                                className="rounded-md border border-brand-line bg-white px-3 py-2 text-sm font-normal text-brand-text focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primarySoft"
                              />
                            </label>
                          </div>
                        </div>

                        <aside className="space-y-4">
                          <div className="rounded-md border border-brand-line bg-white p-4">
                            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-muted">
                              상태 변경
                            </div>
                            <div className="mt-3 grid grid-cols-3 gap-1.5">
                              {(["new", "in_progress", "resolved"] as const).map(
                                (s) => (
                                  <button
                                    key={s}
                                    type="button"
                                    disabled={busyId === it.id}
                                    onClick={() =>
                                      patchItem(it.id, { status: s })
                                    }
                                    className={`rounded-md px-2 py-1.5 text-[11px] font-bold transition-colors ${
                                      it.status === s
                                        ? "bg-brand-primary text-white"
                                        : "border border-brand-line bg-white text-brand-subText hover:border-brand-primary hover:text-brand-primary"
                                    }`}
                                  >
                                    {STATUS_LABEL[s]}
                                  </button>
                                ),
                              )}
                            </div>
                          </div>

                          <div className="rounded-md border border-brand-line bg-white p-4 text-xs">
                            <Row k="접수" v={fmt(it.created_at)} />
                            <Row k="수정" v={fmt(it.updated_at)} />
                            <Row k="ID" v={it.id.slice(0, 8) + "…"} />
                          </div>

                          <div className="flex gap-2">
                            <a
                              href={`mailto:${it.email}?subject=${encodeURIComponent("Re: " + it.subject)}`}
                              className="flex-1 rounded-md border border-brand-line bg-white px-3 py-2 text-center text-xs font-bold text-brand-text transition-colors hover:border-brand-primary hover:text-brand-primary"
                            >
                              답장 메일
                            </a>
                            <button
                              type="button"
                              disabled={busyId === it.id}
                              onClick={() => deleteItem(it.id)}
                              className="rounded-md border border-rose-300 bg-white px-3 py-2 text-xs font-bold text-rose-500 transition-colors hover:bg-rose-50 disabled:opacity-50"
                            >
                              삭제
                            </button>
                          </div>
                        </aside>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between border-b border-brand-lineSoft py-1.5 last:border-0">
      <span className="font-bold uppercase tracking-[0.16em] text-brand-muted">
        {k}
      </span>
      <span className="font-semibold text-brand-text tnum">{v}</span>
    </div>
  );
}
