"use client";

import { useEffect } from "react";
import { useLang } from "@/lib/store";

export function LangSync() {
  const lang = useLang((s) => s.lang);

  // Single source of truth: read localStorage once on mount, apply via setLang
  useEffect(() => {
    try {
      const saved = localStorage.getItem("shiva:lang");
      if (saved === "id" || saved === "en") {
        // use setLang so html lang + persistence stay in one place
        useLang.getState().setLang(saved);
      } else {
        document.documentElement.lang = useLang.getState().lang;
      }
    } catch {
      // localStorage unavailable (private mode) — keep default
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}