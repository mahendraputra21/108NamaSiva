"use client";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LangSync } from "@/components/LangSync";
import { useLang } from "@/lib/store";
import { t } from "@/lib/i18n";

export default function NotFound() {
  const { lang } = useLang();
  return (
    <>
      <LangSync />
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center bg-surface px-6 py-16 text-center">
        <div className="font-display text-[48px] leading-none text-gold-deep">ॐ</div>
        <h1 className="mt-4 font-display text-[24px] font-medium text-on-surface">{t(lang, "notfound.title")}</h1>
        <p className="mt-2 max-w-[32rem] font-display text-[15px] italic leading-6 text-on-surface-variant">{t(lang, "notfound.body")}</p>
        <Link href="/index" className="mt-6 inline-flex min-h-[44px] items-center rounded-full bg-inverse-surface px-6 font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-inverse-on-surface hover:bg-black">
          {t(lang, "notfound.cta")}
        </Link>
      </main>
      <Footer />
    </>
  );
}
