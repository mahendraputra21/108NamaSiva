"use client";

import { create } from "zustand";
import type { Lang } from "./content";

interface LangState {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const useLang = create<LangState>((set) => ({
  lang: "id",
  setLang: (lang) => {
    set({ lang });
    try {
      localStorage.setItem("shiva:lang", lang);
    } catch {
      // private mode / storage blocked — state still updates
    }
    try {
      document.documentElement.lang = lang;
    } catch {
      // SSR guard
    }
  },
}));