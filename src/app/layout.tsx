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
  title: "KI im Saalekreis e.V. | Gemeinnützige KI-Unterstützung für den Mittelstand",
  description:
    "KI im Saalekreis e.V. (in Gründung) bringt KMU im Saalekreis und der Region Halle-Leipzig DSGVO-konforme AI Voice Agents, Corporate LLMs & praktisches KI-Wissen – gemeinnützig, persönlich, lokal.",
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
