// content/ is data source of truth — do not normalize, do not invent
import raw from "../../content/shiva-108.json";

export type Lang = "id" | "en";

export interface ShivaFolio {
  number: number;
  mantra: string | null;
  source: { id: string | null };
  translation: { en: string | null };
  editorial: {
    essence: { id: string | null; en: string | null };
    contemplation: { id: string | null; en: string | null };
  };
  art: { concept: string | null; prompt: string | null };
  status?: string;
}

export interface ShivaMeta {
  title: string;
  version: string;
  source: string;
  contentStatus: string;
  note?: string;
}

const data = raw as { meta: ShivaMeta; names: ShivaFolio[] };

export const meta: ShivaMeta = data.meta;
export const folios: ShivaFolio[] = data.names;

export const TOTAL = folios.length; // 108

export function getFolio(n: number): ShivaFolio | undefined {
  return folios.find((f) => f.number === n);
}

export function isMissing(f: ShivaFolio): boolean {
  return f.status === "missing-in-pdf" || f.mantra === null;
}

export function folioLabel(n: number): string {
  return `FOLIO ${String(n).padStart(2, "0")} / 108`;
}

export function folioLabelPadded3(n: number): string {
  return `Folio ${String(n).padStart(3, "0")}`;
}

export function shortTitle(f: ShivaFolio): string | null {
  if (!f.mantra) return null;
  // preserve verbatim; derive a compact label for nav/index
  return f.mantra.replace(/^OM\s+/i, "").replace(/\s*NAMAHA\.?\s*$/i, "").trim();
}

export function getPrevNext(n: number): { prev: number; next: number } {
  // circular codex
  const prev = ((n - 2 + TOTAL) % TOTAL) + 1;
  const next = (n % TOTAL) + 1;
  return { prev, next };
}

// search is display-preserving but matching is normalized
function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.\s]+/g, " ")
    .trim();
}

export function searchFolios(q: string): ShivaFolio[] {
  const qq = normalize(q);
  if (!qq) return folios;
  const digits = qq.replace(/\D/g, "");
  return folios.filter((f) => {
    if (digits && String(f.number).padStart(3, "0").includes(digits)) return true;
    if (String(f.number) === qq) return true;
    if (f.mantra && normalize(f.mantra).includes(qq)) return true;
    if (f.source.id && normalize(f.source.id).includes(qq)) return true;
    const st = shortTitle(f);
    if (st && normalize(st).includes(qq)) return true;
    return false;
  });
}
