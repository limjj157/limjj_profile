import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "임재정 | CTO & IT Architect Portfolio",
  description:
    "20년 이상의 IT 경력을 보유한 임재정 기술이사의 포트폴리오. Project Management, Data Architecture, Business Analysis 전문가.",
  keywords: [
    "포트폴리오",
    "CTO",
    "IT Architect",
    "Data Architect",
    "Project Manager",
    "임재정",
  ],
  authors: [{ name: "임재정", url: "mailto:limjj157@naver.com" }],
  openGraph: {
    title: "임재정 | CTO & IT Architect Portfolio",
    description:
      "20년 이상의 IT 경력을 보유한 임재정 기술이사의 포트폴리오",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/images/profile-simpson.png",
        width: 800,
        height: 800,
        alt: "임재정 프로필",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
