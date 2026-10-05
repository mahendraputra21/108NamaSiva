"use client";
import Link from "next/link";
import { getFolio, getPrevNext, shortTitle } from "@/lib/content";
import { useLang } from "@/lib/store";
import { t } from "@/lib/i18n";
import { Icon } from "@/components/Icon";

export function FolioNav({ number }: { number: number }) {
  const { lang } = useLang();
  const { prev, next } = getPrevNext(number);
  const prevFolio = getFolio(prev);
  const nextFolio = getFolio(next);
  const prevLabel = prevFolio ? `${String(prev).padStart(2,"0")}. ${shortTitle(prevFolio) ?? "\u2014"}` : String(prev).padStart(2,"0");
  const nextLabel = nextFolio ? `${String(next).padStart(2,"0")}. ${shortTitle(nextFolio) ?? "\u2014"}` : String(next).padStart(2,"0");

  return (
    <nav
      aria-label="Folio navigation"
      className="mt-4 mb-6 flex w-full items-center justify-between gap-2 rounded-t-2xl border-t border-surface-variant/40 bg-surface-container-low px-2 py-3 shadow-sm sm:px-3"
    >
      <Link
        href={`/nama/${prev}`}
        aria-label={`Previous Folio: ${prevLabel}`}
        className="inline-flex min-h-[48px] items-center gap-2 rounded-lg px-3 py-2 text-left text-on-surface transition-colors hover:bg-surface-container active:scale-[0.97]"
      >
        <Icon name="arrow_back" size={18} />
        <span className="flex flex-col">
          <span className="font-sans text-[10px] uppercase tracking-[0.1em] text-on-surface-variant leading-none">
            Prev
          </span>
          <span className="max-w-[92px] truncate font-sans text-[11px] font-medium text-on-surface sm:max-w-[140px]">
            {prevLabel}
          </span>
        </span>
      </Link>

      <Link
        href="/manuscript"
        aria-label="Open index"
        className="inline-flex min-h-[48px] shrink-0 flex-col items-center justify-center rounded-lg bg-surface-container px-3 py-2 text-center transition-colors hover:bg-surface-container-high active:scale-[0.97]"
      >
        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary">
          Folio {String(number).padStart(2, "0")} / 108
        </span>
        <span className="flex items-center gap-0.5 font-sans text-[10px] uppercase tracking-[0.1em] text-on-surface-variant">
          {t(lang, "detail.nav.index")}{" "}
          <Icon name="expand_less" size={12} />
        </span>
      </Link>

      <Link
        href={`/nama/${next}`}
        aria-label={`Next Folio: ${nextLabel}`}
        className="inline-flex min-h-[48px] items-center gap-2 rounded-lg px-3 py-2 text-right text-on-surface transition-colors hover:bg-surface-container active:scale-[0.97]"
      >
        <span className="flex flex-col items-end">
          <span className="font-sans text-[10px] uppercase tracking-[0.1em] text-on-surface-variant leading-none">
            Next
          </span>
          <span className="max-w-[92px] truncate font-sans text-[11px] font-medium text-on-surface sm:max-w-[140px]">
            {nextLabel}
          </span>
        </span>
        <Icon name="arrow_forward" size={18} />
      </Link>
    </nav>
  );
}
