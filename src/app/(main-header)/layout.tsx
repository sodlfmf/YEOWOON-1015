import "../globals.scss";
import "./layout.scss";
import { ReactNode } from "react";
import MainHeader from "@/components/main-header";
import { Metadata } from "next";
import Script from "next/script";
import { Karla, notoSans, fontClassname } from "@/fonts";

export const metadata: Metadata = {
  // meatadataBase 빌드 후 서비스시 변경 필수
  metadataBase: new URL("https://www.yeowoon.co.kr/"),
  alternates: {
    canonical: "/",
  },
  title: "YEOWOON | 여운",
  description:
    "We create jewerly that lasts a long time, like a yeowoon, a feeling people can look back on for as long as they want",
  verification: {
    google: "",
    other: {
      "naver-site-verification":
        "9f0c7024c0d45b2bce2a98a3520ff41794216ea1",
    },
  },
  openGraph: {
    title: "YEOWOON | 여운",
    description:
      "We create jewerly that lasts a long time, like a yeowoon, a feeling people can look back on for as long as they want",
    images: ["/ogThumbnail.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="kr" className={`${notoSans.className} `}>
      <body>
        <div className="container">
          <MainHeader />
          <main className="main">{children}</main>
        </div>
        <div id="portal" />
      </body>
      <Script
        src="https://cdn.jsdelivr.net/gh/nuxodin/dialog-polyfill@1.4.2/dialog.min.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
