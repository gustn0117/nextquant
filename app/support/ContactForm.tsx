"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [err, setErr] = useState<string | null>(null);

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((p) => ({ ...p, [k]: v }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setErr(null);
    setStatus("submitting");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        setErr(j.error || "전송에 실패했습니다.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErr("네트워크 오류가 발생했습니다.");
      setStatus("error");
    }
  }

  const submitting = status === "submitting";

  return (
    <form className="grid gap-4" onSubmit={submit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="이름"
          required
          value={form.name}
          onChange={(v) => update("name", v)}
          placeholder="홍길동"
        />
        <Field
          label="이메일"
          required
          type="email"
          value={form.email}
          onChange={(v) => update("email", v)}
          placeholder="you@example.com"
        />
      </div>
      <Field
        label="제목"
        required
        value={form.subject}
        onChange={(v) => update("subject", v)}
        placeholder="문의 제목을 입력해주세요"
      />
      <label className="flex flex-col gap-2 text-sm font-semibold text-brand-text">
        내용
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="문의 내용을 입력해주세요"
          className="rounded-lg border border-brand-line bg-white px-4 py-3 text-base font-normal text-brand-text placeholder:text-brand-mutedSoft focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primarySoft"
        />
      </label>

      {status === "success" && (
        <div className="rounded-md border border-brand-primary/30 bg-brand-primarySoft px-4 py-3 text-sm font-semibold text-brand-primary">
          ✓ 문의가 정상적으로 접수되었습니다. 평일 기준 24시간 내 회신드릴게요.
        </div>
      )}
      {status === "error" && err && (
        <div className="rounded-md border border-rose-300 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-600">
          {err}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-3d mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3.5 text-base font-bold text-white shadow-soft transition-all hover:bg-brand-primaryDim hover:shadow-[0_10px_28px_-10px_rgba(0,183,131,0.55)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "전송 중..." : "문의 보내기"}
      </button>
      <p className="text-xs text-brand-muted">
        · 작성하신 정보는 문의 처리 목적으로만 사용되며, 처리 완료 후 안전하게
        폐기됩니다.
      </p>
    </form>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm font-semibold text-brand-text">
      {label}
      {required && <span className="sr-only">필수</span>}
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-brand-line bg-white px-4 py-3 text-base font-normal text-brand-text placeholder:text-brand-mutedSoft focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primarySoft"
      />
    </label>
  );
}
