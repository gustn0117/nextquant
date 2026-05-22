"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const PRIVACY_TEXT = `넥스트퀀트(이하 "회사")는 1:1 상담 제공을 위해 아래와 같이 개인정보를 수집·이용합니다.

· 수집 항목 : 이름, 연락처(휴대폰 번호)
· 수집 및 이용 목적 : 상담 신청 접수 및 결과 안내
· 보유 및 이용 기간 : 상담 완료일로부터 1년간 보관 후 지체 없이 파기
· 동의 거부 권리 : 개인정보 수집·이용에 동의하지 않으실 수 있으며, 이 경우 상담 신청이 제한될 수 있습니다.

회사는 「개인정보 보호법」 및 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령을 준수하며, 수집한 개인정보를 명시된 목적 외의 용도로 이용하거나 동의 없이 제3자에게 제공하지 않습니다.`;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [err, setErr] = useState<string | null>(null);

  const submitting = status === "submitting";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setErr(null);

    if (!name.trim() || !phone.trim()) {
      setErr("이름과 연락처를 입력해 주세요.");
      setStatus("error");
      return;
    }
    if (phone.length < 9) {
      setErr("연락처를 정확히 입력해 주세요.");
      setStatus("error");
      return;
    }
    if (!agreed) {
      setErr("개인정보 수집 및 이용에 동의해 주세요.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone }),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        setErr(j.error || "신청에 실패했습니다. 잠시 후 다시 시도해 주세요.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setName("");
      setPhone("");
      setAgreed(false);
    } catch {
      setErr("네트워크 오류가 발생했습니다.");
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto w-full max-w-xl rounded-xl border border-brand-line bg-white p-7 shadow-card md:p-9">
      <div className="text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-brand-text md:text-3xl">
          전문가의 도움이 필요하신가요?
        </h2>
        <p className="mt-3 text-sm text-brand-muted md:text-base">
          이름과 연락처를 남겨주시면 전문가가 1:1로 연락드립니다.
        </p>
      </div>

      {status === "success" ? (
        <div className="mt-7 rounded-lg border border-brand-primary/30 bg-brand-primarySoft p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-white">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-extrabold text-brand-text">
            상담 신청이 접수되었습니다
          </h3>
          <p className="mt-2 text-sm text-brand-muted">
            담당 전문가가 입력하신 연락처로 빠르게 연락드리겠습니다.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-5 inline-flex items-center justify-center border border-brand-text/25 px-5 py-2.5 text-sm font-bold text-brand-text transition-colors hover:border-brand-primary hover:text-brand-primary"
          >
            새 상담 신청하기
          </button>
        </div>
      ) : (
        <form className="mt-7 grid gap-5" onSubmit={submit} noValidate>
          <label className="flex flex-col gap-2 text-sm font-bold text-brand-text">
            이름
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력해 주세요"
              maxLength={40}
              className="rounded-lg border border-brand-line bg-white px-4 py-3 text-base font-normal text-brand-text placeholder:text-brand-mutedSoft focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primarySoft"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-bold text-brand-text">
            연락처
            <input
              type="tel"
              inputMode="numeric"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
              placeholder="숫자만 입력해 주세요"
              maxLength={11}
              className="rounded-lg border border-brand-line bg-white px-4 py-3 text-base font-normal text-brand-text placeholder:text-brand-mutedSoft focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primarySoft"
            />
          </label>

          <div>
            <div className="rounded-lg border border-brand-line bg-brand-subtle p-4">
              <div className="text-xs font-extrabold text-brand-text">
                ※ 개인정보 수집 및 이용 동의
              </div>
              <div className="mt-2 max-h-36 overflow-y-auto whitespace-pre-line pr-2 text-xs leading-relaxed text-brand-muted">
                {PRIVACY_TEXT}
              </div>
            </div>
            <label className="mt-3 flex cursor-pointer items-center gap-2.5 text-sm font-semibold text-brand-text">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-4 w-4 shrink-0 accent-brand-primary"
              />
              개인정보 수집 및 이용에 동의합니다
            </label>
          </div>

          {status === "error" && err && (
            <div className="rounded-md border border-rose-300 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-600">
              {err}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center gap-2 bg-brand-primary px-6 py-4 text-base font-extrabold text-white transition-colors hover:bg-brand-primaryDim disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "신청 중..." : "상담 신청하기"}
          </button>
        </form>
      )}
    </div>
  );
}
