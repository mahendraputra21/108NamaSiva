import type { Metadata } from "next";
import { EB_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "108 NAMA SHIVA — The Sacred Manuscript",
  description:
    "Aṣṭottara Śata Nāmāvalī — 108 Nama Suci Shiva. A quiet digital sacred manuscript and reading sanctuary.",
  openGraph: {
    title: "108 NAMA SHIVA",
    description:
      "Aṣṭottara Śata Nāmāvalī — a contemplative reading sanctuary for the 108 sacred names of Shiva.",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${ebGaramond.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-on-surface">
        {children}
      </body>
    </html>
  );
}
