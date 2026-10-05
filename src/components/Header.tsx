"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/store";
import { t } from "@/lib/i18n";
import { Icon } from "@/components/Icon";

export function Header() {
  const pathname = usePathname();
  const { lang, setLang } = useLang();
  const isDetail = pathname?.startsWith("/nama/");
  const isIndex = pathname === "/manuscript";

  // Detail reading sanctuary — Stitch-faithful: back arrow + Daftar Folio/Folio Index, no brand lockup
  if (isDetail) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-surface-variant/40 bg-surface/90 backdrop-blur-md pt-safe">
        <div className="mx-auto flex h-14 max-w-[1120px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1">
            <Link
              href="/manuscript"
              aria-label="Back to index"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <Icon name="arrow_back" size={20} />
            </Link>
            <Link
              href="/manuscript"
              className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-on-surface-variant hover:text-on-surface transition-colors"
            >
              {lang === "id" ? "Daftar Folio" : "Folio Index"}
            </Link>
          </div>
          <div
            role="group"
            aria-label="Language"
            className="inline-flex items-center rounded-full bg-surface-container p-0.5 shadow-sm"
          >
            <button
              type="button"
              onClick={() => setLang("id")}
              aria-pressed={lang === "id"}
              aria-label="Bahasa Indonesia"
              className={`min-h-[44px] min-w-[44px] rounded-full px-4 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors active:scale-[0.97] ${lang === "id" ? "bg-surface-container-lowest text-on-surface shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              aria-label="English"
              className={`min-h-[44px] min-w-[44px] rounded-full px-4 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors active:scale-[0.97] ${lang === "en" ? "bg-surface-container-lowest text-on-surface shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}
            >
              EN
            </button>
          </div>
        </div>
      </header>
    );
  }

  // Index — Stitch-faithful: Om emblem + stacked 108 NĀMA SHIVA / Manuscript Index, no back arrow
  if (isIndex) {
    return (
      <header className="sticky top-0 z-40 w-full border-b border-outline-variant/20 bg-surface/85 backdrop-blur-xl pt-safe">
        <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Sacred Om emblem" src="/art/om-emblem.png" className="h-8 w-auto object-contain shrink-0" width={32} height={32} />
            <span className="flex flex-col leading-none">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-secondary">108 NĀMA SHIVA</span>
              <span className="font-sans text-[10px] tracking-[0.08em] text-on-surface-variant">Manuscript Index</span>
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <div role="group" aria-label="Language" className="inline-flex items-center rounded-full bg-surface-container p-0.5 shadow-sm">
              <button type="button" onClick={() => setLang("id")} aria-pressed={lang === "id"} aria-label="Bahasa Indonesia" className={`min-h-[44px] min-w-[44px] rounded-full px-4 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors active:scale-[0.97] ${lang === "id" ? "bg-surface-container-lowest text-on-surface shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}>ID</button>
              <button type="button" onClick={() => setLang("en")} aria-pressed={lang === "en"} aria-label="English" className={`min-h-[44px] min-w-[44px] rounded-full px-4 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors active:scale-[0.97] ${lang === "en" ? "bg-surface-container-lowest text-on-surface shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}>EN</button>
            </div>
            <span className="hidden sm:inline-flex h-8 w-8 items-center justify-center rounded-full bg-on-surface text-surface shrink-0" aria-hidden>
              <Icon name="person" size={18} />
            </span>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-surface-variant/30 bg-surface/90 backdrop-blur-md pt-safe">
      <div className="mx-auto flex h-14 max-w-[1120px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex flex-col leading-none">
            <span className="flex items-center gap-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary">
              <span aria-hidden className="text-[14px] leading-none">◈</span>
              {t(lang, "brand.sub")}
            </span>
            <span className="font-display text-[15px] font-medium tracking-[0.14em] text-on-surface">
              {t(lang, "brand.title")}
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {!isIndex && (
            <Link
              href="/manuscript"
              className="hidden sm:inline-flex min-h-[44px] items-center rounded-full border border-hairline bg-surface-container-low px-4 font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-on-surface-variant hover:bg-surface-container transition-colors"
            >
              {t(lang, "nav.index")}
            </Link>
          )}
          {/* Language pill — min 44px touch target per button, works on mobile Chrome/Brave */}
          <div
            role="group"
            aria-label="Language"
            className="inline-flex items-center rounded-full bg-surface-container p-0.5 shadow-sm"
          >
            <button
              type="button"
              onClick={() => setLang("id")}
              aria-pressed={lang === "id"}
              aria-label="Bahasa Indonesia"
              className={`min-h-[44px] min-w-[44px] rounded-full px-4 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors active:scale-[0.97] ${lang === "id" ? "bg-surface-container-lowest text-on-surface shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              aria-label="English"
              className={`min-h-[44px] min-w-[44px] rounded-full px-4 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors active:scale-[0.97] ${lang === "en" ? "bg-surface-container-lowest text-on-surface shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
