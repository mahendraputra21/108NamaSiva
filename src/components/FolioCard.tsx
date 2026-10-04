"use client";
import Link from "next/link";
import type { ShivaFolio } from "@/lib/content";
import { isMissing, shortTitle } from "@/lib/content";
import { useLang } from "@/lib/store";
import { t } from "@/lib/i18n";
import { Icon } from "@/components/Icon";

// Stitch Manuscript Index card — faithful, no invented Devanagari/categories
export function FolioCard({ folio }: { folio: ShivaFolio }) {
  const { lang } = useLang();
  const missing = isMissing(folio);
  const st = shortTitle(folio);

  return (
    <article
      className={`rounded-xl p-4 shadow-sm border transition-transform active:scale-[0.99] ${
        missing
          ? "bg-surface-container-low opacity-60 border-outline-variant/20"
          : "bg-surface-container-low border-outline-variant/20"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary">
            Folio {String(folio.number).padStart(3, "0")}
          </span>
          <span className="h-1 w-1 rounded-full bg-outline-variant" aria-hidden />
          {st && !missing && (
            <span className="font-sans text-[10px] uppercase tracking-[0.12em] text-on-surface-variant/60 truncate max-w-[110px]">
              {st}
            </span>
          )}
        </div>
        {!missing ? (
          <span
            aria-hidden
            className="inline-flex min-h-[44px] min-w-[44px] -mr-2 -mt-2 items-center justify-center text-on-surface-variant"
          >
            <Icon name="bookmark_border" size={20} />
          </span>
        ) : (
          <span className="rounded-full border border-outline-variant/30 bg-surface-container-lowest px-2 py-0.5 font-sans text-[9px] font-semibold uppercase tracking-wider text-on-surface-variant/70">
            {t(lang, "index.card.missing")}
          </span>
        )}
      </div>

      <div className="mt-1">
        <h2 className="font-display text-[22px] font-medium leading-7 tracking-wide text-on-surface sm:text-[24px]">
          {String(folio.number).padStart(2, "0")} ·{" "}
          {folio.mantra
            ? folio.mantra.replace(/^OM\s+/i, "").trim().toUpperCase() || folio.mantra.toUpperCase()
            : "—"}
        </h2>
        <p className="sr-only">{folio.mantra}</p>
        {folio.translation?.en && !missing ? (
          <p className="mt-0.5 font-display text-[15px] italic leading-6 text-on-surface-variant">
            {folio.translation.en}
          </p>
        ) : (
          !missing &&
          st && <p className="mt-0.5 font-display text-[15px] italic leading-6 text-on-surface-variant/80">{st}</p>
        )}
      </div>

      {folio.source?.id && !missing && (
        <p className="mt-2.5 line-clamp-2 font-display text-[14px] italic leading-5 text-on-surface-variant/80">
          &ldquo;{folio.source.id}&rdquo;
        </p>
      )}
      {missing && (
        <p className="mt-3 font-display text-[14px] italic leading-5 text-on-surface-variant/60">
          {lang === "id" ? "Tanpa naskah sumber pada edisi ini." : "No source inscription in this edition."}
        </p>
      )}

      <div className="mt-3 flex items-center justify-between border-t border-outline-variant/15 pt-2">
        <span className="inline-flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-[0.12em] text-on-surface-variant/70">
          <Icon name="auto_stories" size={15} className="text-secondary" />
          {String(folio.number).padStart(2, "0")} / 108
        </span>
        {missing ? (
          <span className="inline-flex min-h-[44px] items-center rounded-full border border-outline-variant/30 bg-surface-container-lowest px-4 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-on-surface-variant/40">
            —
          </span>
        ) : (
          <Link
            href={`/nama/${folio.number}`}
            className="inline-flex min-h-[44px] items-center gap-1 rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-secondary hover:text-secondary/80 transition-colors"
          >
            {t(lang, "index.card.open")}
            <Icon name="arrow_forward" size={16} />
          </Link>
        )}
      </div>
    </article>
  );
}
