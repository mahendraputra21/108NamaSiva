"use client";
import { useLang } from "@/lib/store";
import { t } from "@/lib/i18n";

export function Footer() {
  const { lang } = useLang();
  return (
    <footer className="border-t border-hairline bg-surface">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-2 px-4 py-10 text-center sm:px-6 lg:px-8">
        <div className="font-display text-sm tracking-[0.18em] text-gold-deep">{t(lang, "common.om")}</div>
        <div className="max-w-[36rem] font-sans text-xs leading-5 text-on-surface-variant/80">{t(lang, "landing.footer")}</div>
      </div>
    </footer>
  );
}
