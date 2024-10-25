import "../globals.scss";
import "./layout.scss";
import { ReactNode } from "react";
import AboutArchiveContactHeader from "@/components/menu-header";
import { Metadata } from "next";
import Script from "next/script";
import { Karla, notoSans } from "@/fonts";
// import { fontClassname} from "@/fonts";

export const metadata: Metadata = {
  // meatadataBase 빌드 후 서비스시 변경 필수
  metadataBase: new URL("https://www.yeowoon.co.kr/"),
  alternates: {
    canonical: "/",
  },
  title: "YEOWOON | 여운",
  description:
    "We create jewerly that lasts a long time, like a yeowoon, a feeling people can look back on for as long as they want",
  icons: {
    icon: "/favicon-96x96.png",
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
          <AboutArchiveContactHeader />
          <main className="main">{children}</main>
        </div>
        <div id="portal" />
        <div id="artworkPortal" />
      </body>
      <Script
        src="https://cdn.jsdelivr.net/gh/nuxodin/dialog-polyfill@1.4.2/dialog.min.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
