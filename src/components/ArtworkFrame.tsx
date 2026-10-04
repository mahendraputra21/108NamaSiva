"use client";
import Image from "next/image";
import { useLang } from "@/lib/store";
import { t } from "@/lib/i18n";
import { getArtworkSrc, getArtworkCaption } from "@/lib/artwork";

export function ArtworkFrame({ number }: { number: number }) {
  const { lang } = useLang();
  const src = getArtworkSrc(number);
  const caption = getArtworkCaption(number, lang);

  if (src) {
    return (
      <div className="overflow-hidden rounded-xl bg-surface-container shadow-sm flex flex-col">
        <div className="p-2 sm:p-3">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-surface-container-high">
            <Image
              src={src}
              alt={caption ?? `Sacred artwork folio ${String(number).padStart(2,"0")}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 380px"
              priority={number <= 2}
            />
          </div>
        </div>
        <div className="px-4 pb-3 pt-0.5 flex items-center justify-center text-center">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary">
            {caption ?? t(lang, "detail.art.caption")}
          </span>
        </div>
      </div>
    );
  }

  // Neutral fallback — no invented image, Stitch-consistent
  return (
    <div className="overflow-hidden rounded-xl bg-surface-container shadow-sm flex flex-col">
      <div className="p-2 sm:p-3">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-surface-container-high flex flex-col items-center justify-center gap-3 p-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/15 bg-surface/50">
            <span className="font-display text-xl text-gold-deep">◈</span>
          </div>
          <div className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-on-surface-variant/50">
            Folio {String(number).padStart(2, "0")}
          </div>
          <div className="h-px w-10 bg-gold/20" aria-hidden />
        </div>
      </div>
      <div className="px-4 pb-3 pt-0.5 flex items-center justify-center text-center">
        <span className="font-sans text-[10px] font-medium leading-4 text-on-surface-variant/60">
          {t(lang, "detail.art.caption")}
        </span>
      </div>
    </div>
  );
}
