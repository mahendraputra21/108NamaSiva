"use client";
import { useMemo, useState } from "react";
import { searchFolios, shortTitle, getFolio } from "@/lib/content";
import { FolioCard } from "@/components/FolioCard";
import { useLang } from "@/lib/store";
import { t } from "@/lib/i18n";
import { getArtworkSrc } from "@/lib/artwork";
import { Icon } from "@/components/Icon";

export function ManuscriptIndex() {
  const { lang } = useLang();
  const [q, setQ] = useState("");

  const filtered = useMemo(() => searchFolios(q), [q]);
  const count = filtered.length;

  const featured = getFolio(2);
  const featuredSrc = getArtworkSrc(2);
  const featuredTitle = featured ? shortTitle(featured) : null;

  return (
    <div className="flex flex-col gap-0">
      {/* Featured — Stitch: px-space-md pt-2 pb-space-sm -> rounded-xl h-48 bg-primary-container */}
      {featured && featuredSrc && (
        <div className="pt-2 pb-2">
          <div className="relative w-full overflow-hidden rounded-xl bg-primary-container shadow-md">
            <div
              className="relative flex h-48 w-full flex-col justify-end p-4"
              style={{ backgroundImage: `url('${featuredSrc}')`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/45 to-transparent" aria-hidden />
              <div className="relative z-10 flex flex-col">
                <div className="flex items-center gap-1.5 text-secondary-fixed">
                  <Icon name="auto_awesome" size={14} />
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em]">{t(lang, "index.featured.label")}</span>
                </div>
                <p className="mt-1 font-display text-[18px] italic leading-6 text-white">
                  &ldquo;{featuredTitle ?? "Prabhve"} &mdash; {lang === "id" ? "Sumber Cahaya Abadi" : "Source of Eternal Light"}&rdquo;
                </p>
                <p className="mt-0.5 font-display text-[13px] italic text-white/80">02 · {featured.source.id ?? ""}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Editorial heading — Stitch: Manuscript Index · 108 / h1 / subtitle */}
      <div className="flex flex-col gap-1 pb-3 pt-3">
        <div className="flex items-center justify-between">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary">
            Manuscript Index · 108
          </span>
          <span className="flex items-center gap-1 font-sans text-[10px] text-on-surface-variant">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden />
            <span>108 {t(lang, "index.count.label")}</span>
          </span>
        </div>
        <h1 className="font-display text-[28px] font-normal leading-tight tracking-[0.01em] text-on-surface sm:text-[32px]">
          {t(lang, "index.title")}
        </h1>
        <p className="font-display text-[14px] italic leading-6 text-on-surface-variant">
          {t(lang, "index.subtitle")}
        </p>
      </div>

      {/* Search — Stitch: bg-surface-container-low rounded-lg p-space-xs border outline-variant/30, search 20px */}
      <div className="space-y-3 py-1">
        <div className="rounded-lg border border-outline-variant/30 bg-surface-container-low p-2 shadow-sm">
          <div className="flex items-center gap-2 px-2">
            <span aria-hidden className="pointer-events-none shrink-0 text-secondary">
              <Icon name="search" size={20} />
            </span>
            <input
              value={q}
              onChange={(e) => setQ(e.currentTarget.value)}
              onInput={(e) => setQ(e.currentTarget.value)}
              placeholder={t(lang, "index.search.placeholder")}
              className="min-h-[44px] min-w-0 flex-1 bg-transparent font-sans text-[15px] leading-6 text-on-surface placeholder:text-on-surface-variant/60 placeholder:italic focus:outline-none"
              aria-label="Search manuscript"
              type="search"
              inputMode="search"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              enterKeyHint="search"
            />
            {q ? (
              <button
                type="button"
                onClick={() => setQ("")}
                className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface"
                aria-label="Clear search"
              >
                <Icon name="close" size={18} />
              </button>
            ) : (
              <span className="min-w-[44px] shrink-0" aria-hidden />
            )}
          </div>
        </div>
      </div>

      {/* Count bar — Stitch: auto_stories + Menampilkan X (no border, py-space-xs) */}
      <div className="flex items-center justify-between py-3">
        <span className="flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-[0.12em] text-on-surface-variant">
          <Icon name="auto_stories" size={15} className="text-secondary" />
          {!q
            ? (lang === "id" ? `Menampilkan ${count} Naskah` : `Showing ${count} folios`)
            : (lang === "id" ? `Menampilkan ${count} dari 108` : `Showing ${count} of 108`)}
        </span>
        <span className="font-sans text-[10px] uppercase tracking-[0.1em] text-on-surface-variant/60">{count} / 108</span>
      </div>

      {/* List — Stitch: vertical stack space-y-3, article rounded-xl */}
      <div className="flex flex-col gap-3 pt-3 pb-2">
        {filtered.length === 0 ? (
          <p className="py-12 text-center font-display text-[15px] italic text-on-surface-variant">
            {lang === "id" ? "Tidak ada folio yang cocok." : "No matching folios."}
          </p>
        ) : (
          filtered.map((f) => <FolioCard key={f.number} folio={f} />)
        )}
      </div>
    </div>
  );
}
