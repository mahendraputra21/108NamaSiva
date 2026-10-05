"use client";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LangSync } from "@/components/LangSync";
import { useLang } from "@/lib/store";
import { t } from "@/lib/i18n";
import { Icon } from "@/components/Icon";

export default function LandingPage() {
  const { lang } = useLang();
  return (
    <>
      <LangSync />
      <Header />
      <main className="flex flex-1 flex-col bg-surface">
        <div className="mx-auto flex w-full max-w-[640px] flex-col items-center px-6 pb-10 pt-6 sm:px-6">
          {/* Sacred Om emblem — circular, subtle gold wash */}
          <div className="relative flex h-28 w-28 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-secondary-container/20" aria-hidden />
            <div className="relative z-10 h-24 w-24 overflow-hidden rounded-full p-1">
              <Image
                src="/art/om-emblem.png"
                alt="Sacred Om emblem"
                width={96}
                height={96}
                className="h-full w-full object-contain drop-shadow-sm select-none"
                priority
              />
            </div>
          </div>

          <p className="mt-5 text-center font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary">
            {t(lang, "landing.tagline")}
          </p>

          <h1 className="mt-3 text-center font-display text-[38px] font-normal leading-none tracking-[0.02em] text-on-surface sm:text-[56px] sm:leading-[1.05]">
            108 NĀMA SHIVA
          </h1>

          <p className="mt-4 max-w-[36rem] text-center font-display text-[17px] italic leading-7 text-secondary sm:text-[19px] sm:leading-8">
            {t(lang, "landing.lead")}
          </p>

          <div className="mt-6 h-0.5 w-12 rounded-full bg-secondary-container" aria-hidden />

          {/* Invitational prose — soft card like Stitch */}
          <div className="mt-6 w-full rounded-xl bg-surface-container-low p-5 text-center shadow-sm">
            <p className="font-display text-[17px] leading-7 text-on-surface-variant">
              {t(lang, "landing.prose")}
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-secondary" aria-hidden>
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              <span className="h-0.5 w-2.5 rounded-full bg-secondary" />
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            </div>
          </div>

          {/* Dual CTAs — primary dark, secondary soft */}
          <div className="mt-8 flex w-full flex-col gap-3">
            <Link
              href="/nama/1"
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-on-surface px-6 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-surface shadow-md transition-transform active:scale-[0.98]"
            >
              {t(lang, "landing.cta.primary")} <span aria-hidden>→</span>
            </Link>
            <Link
              href="/manuscript"
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-surface-container px-6 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-on-surface shadow-sm transition-colors hover:bg-surface-container-high active:scale-[0.98]"
            >
              <span aria-hidden className="text-secondary">◈</span> {t(lang, "landing.cta.secondary")}
            </Link>
          </div>

          <div className="mt-6 font-sans text-[11px] uppercase tracking-[0.14em] text-on-surface-variant/50">
            108 · {t(lang, "common.om")} · 1 — 108
          </div>

          {/* Principles — Landasan Manuskrip Suci */}
          <div className="mt-10 flex w-full flex-col gap-4">
            <div className="px-1">
              <h2 className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary">
                {t(lang, "landing.principles")}
              </h2>
            </div>

            <div className="rounded-xl bg-surface-container-lowest p-4 shadow-sm flex gap-3.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-container text-secondary">
                <Icon name="history_edu" size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-[18px] font-medium leading-6 text-on-surface">{t(lang, "landing.card1.title")}</h3>
                <p className="mt-1 font-display text-[14px] leading-6 text-on-surface-variant">{t(lang, "landing.card1.body")}</p>
              </div>
            </div>

            <div className="rounded-xl bg-surface-container-lowest p-4 shadow-sm flex gap-3.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-container text-secondary">
                <Icon name="menu_book" size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-[18px] font-medium leading-6 text-on-surface">{t(lang, "landing.card2.title")}</h3>
                <p className="mt-1 font-display text-[14px] leading-6 text-on-surface-variant">{t(lang, "landing.card2.body")}</p>
              </div>
            </div>

            <div className="rounded-xl bg-surface-container-lowest p-4 shadow-sm flex gap-3.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-container text-secondary">
                <Icon name="local_library" size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-[18px] font-medium leading-6 text-on-surface">{t(lang, "landing.card3.title")}</h3>
                <p className="mt-1 font-display text-[14px] leading-6 text-on-surface-variant">{t(lang, "landing.card3.body")}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-1 opacity-75">
            <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-on-surface-variant">{t(lang, "common.om")}</span>
            <span className="font-display text-[14px] italic text-on-surface-variant">{t(lang, "landing.footer.quote")}</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
