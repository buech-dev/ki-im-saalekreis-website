import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title =
  "KI im Saalekreis e.V. | Gemeinnützige KI-Unterstützung für den Mittelstand";
const description =
  "KI im Saalekreis e.V. (in Gründung) bringt KMU im Saalekreis und der Region Halle-Leipzig DSGVO-konforme AI Voice Agents, Corporate LLMs & praktisches KI-Wissen – gemeinnützig, persönlich, lokal.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | KI im Saalekreis e.V.",
  },
  description,
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "KI im Saalekreis e.V.",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
