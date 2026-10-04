"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LangSync } from "@/components/LangSync";
import { ArtworkFrame } from "@/components/ArtworkFrame";
import { FolioNav } from "@/components/FolioNav";
import { isMissing, folioLabel, shortTitle } from "@/lib/content";
import type { ShivaFolio } from "@/lib/content";
import { useLang } from "@/lib/store";
import { t } from "@/lib/i18n";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function DetailClient({ number, folio }: { number: number; folio: ShivaFolio }) {
  const { lang } = useLang();
  const missing = isMissing(folio);
  const st = shortTitle(folio);
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") router.push(`/nama/${((number - 2 + 108) % 108) + 1}`);
      if (e.key === "ArrowRight") router.push(`/nama/${(number % 108) + 1}`);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [number, router]);

  // Source display per language: ID shows source.id, EN shows translation.en (fallback to source)
  const sourceText = lang === "en" ? (folio.translation.en ?? folio.source.id) : folio.source.id;
  const essenceText = folio.editorial.essence[lang];
  const contemplationText = folio.editorial.contemplation[lang];

  return (
    <>
      <LangSync />
      <Header />
      <main className="flex flex-1 flex-col bg-surface">
        <div className="mx-auto flex w-full max-w-[640px] flex-col pb-8">
          {/* Sacred editorial heading — Stitch-faithful */}
          <header className="flex w-full flex-col items-center px-4 pt-8 pb-3 text-center sm:px-6">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary">
              {folioLabel(number)}
            </span>
            {missing ? (
              <h1 className="mt-2 font-display text-[28px] font-normal leading-tight tracking-[0.01em] text-on-surface-variant">
                {t(lang, "detail.missing.title")}
              </h1>
            ) : (
              <>
                <h1 className="mt-1 font-display text-[28px] font-normal leading-tight tracking-[0.02em] text-on-surface sm:text-[32px]">
                  {folio.mantra}
                </h1>
                {st && (
                  <p className="mt-1.5 font-display text-[15px] italic leading-6 text-on-surface-variant">
                    &laquo; {st} &raquo;
                  </p>
                )}
              </>
            )}
            {/* Devanagari pill omitted — content/shiva-108.json has no Devanagari field; do not invent */}
          </header>

          {/* Artwork folio container — Stitch: rounded-xl p-2 aspect-[4/3] */}
          <section className="w-full px-4 sm:px-6">
            <ArtworkFrame number={number} />
          </section>

          {/* Editorial reading flow — 3 tiers, Stitch spacing */}
          <div className="flex w-full flex-col gap-8 px-4 pt-6 sm:px-6">
            {missing ? (
              <div className="rounded-xl border border-hairline bg-surface-container-low px-5 py-8">
                <p className="font-display text-[17px] italic leading-7 text-on-surface-variant">
                  &ldquo;{t(lang, "detail.missing.body")}&rdquo;
                </p>
                <p className="mt-4 font-sans text-[11px] uppercase tracking-[0.12em] text-on-surface-variant/60">
                  Folio 07 &middot; {t(lang, "index.card.missing")} &middot; Status: missing-in-pdf
                </p>
              </div>
            ) : (
              <>
                {/* 1. Makna Sumber Naskah */}
                <article className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="h-px w-4 bg-secondary" aria-hidden />
                    <h2 className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary">
                      1. {t(lang, "detail.source")}
                    </h2>
                  </div>
                  <div className="rounded-xl border border-surface-variant/30 bg-surface-container-low px-4 py-4 sm:px-5">
                    <p className="font-display text-[17px] leading-7 text-on-surface">
                      {sourceText ? `\u201C${sourceText}\u201D` : "\u2014"}
                    </p>
                    {lang === "en" && folio.source.id && folio.translation.en && folio.source.id !== folio.translation.en && (
                      <p className="mt-3 border-t border-hairline pt-3 font-display text-[14px] italic leading-6 text-on-surface-variant">
                        {folio.source.id}
                      </p>
                    )}
                    {lang === "id" && folio.translation.en && (
                      <p className="mt-3 border-t border-hairline pt-3 font-display text-[14px] italic leading-6 text-on-surface-variant/80">
                        {folio.translation.en}
                      </p>
                    )}
                  </div>
                </article>

                {/* 2. Hakikat Mendalam */}
                <article className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="h-px w-4 bg-secondary" aria-hidden />
                    <h2 className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary">
                      2. {t(lang, "detail.essence")}
                    </h2>
                  </div>
                  <div className="rounded-xl border border-surface-variant/30 bg-surface-container-low px-4 py-4 sm:px-5">
                    {essenceText ? (
                      <p className="font-display text-[16px] leading-7 text-on-surface">{essenceText}</p>
                    ) : (
                      <p className="font-display text-[15px] italic leading-6 text-on-surface-variant/70">
                        {t(lang, "detail.essence.empty")}
                      </p>
                    )}
                  </div>
                </article>

                {/* 3. Ruang Renungan / Bhavana — Stitch: bg-surface-container with quote + left border */}
                <aside className="relative flex flex-col gap-3 rounded-xl border border-surface-variant/30 bg-surface-container p-4 shadow-sm sm:p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-px w-4 bg-secondary" aria-hidden />
                      <h2 className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary">
                        3. {t(lang, "detail.contemplation")}
                      </h2>
                    </div>
                    <span className="font-sans text-[11px] text-on-surface-variant">{String(number).padStart(2,"0")}/108</span>
                  </div>
                  {contemplationText ? (
                    <blockquote className="my-1 border-l-2 border-secondary/40 py-2 pl-3 font-display text-[18px] italic leading-7 text-on-surface">
                      &ldquo;{contemplationText}&rdquo;
                    </blockquote>
                  ) : (
                    <p className="font-display text-[15px] italic leading-6 text-on-surface-variant/70">
                      {t(lang, "detail.contemplation.empty")}
                    </p>
                  )}
                </aside>
              </>
            )}

            <FolioNav number={number} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
