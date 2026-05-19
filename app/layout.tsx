import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "넥스트퀀트 NEXT QUANT | 감정을 빼고 원칙을 더하다",
  description:
    "24시간 멈추지 않는 똑똑한 투자, 넥스트퀀트. 데이터 분석과 정교한 알고리즘이 완벽한 타이밍에 기계적으로 진입하고 청산합니다.",
  keywords: [
    "넥스트퀀트",
    "NEXT QUANT",
    "자동매매",
    "시스템 트레이딩",
    "알고리즘 트레이딩",
    "퀀트 투자",
  ],
  openGraph: {
    title: "넥스트퀀트 NEXT QUANT",
    description: "감정을 빼고 원칙을 더하다. 24시간 멈추지 않는 똑똑한 투자.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-brand-bg text-brand-text antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
