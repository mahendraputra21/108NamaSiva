// Editorial UI categories — NOT canonical manuscript data.
// Deterministic categorization based ONLY on source/translation/mantra (not editorial templates).
// Never modifies content/shiva-108.json. Category is UI metadata only.
import type { ShivaFolio } from "./content";

export type CategoryId = "stillness" | "sovereignty" | "grace" | "universal" | "dissolution";
export const CATEGORY_IDS: CategoryId[] = ["stillness","sovereignty","grace","universal","dissolution"];

export const categoryLabel: Record<CategoryId, { id: string; en: string }> = {
  stillness:   { id: "Keheningan",  en: "Stillness" },
  sovereignty: { id: "Kedaulatan",  en: "Sovereignty" },
  grace:       { id: "Karunia",     en: "Grace" },
  universal:   { id: "Universal",   en: "Universal" },
  dissolution: { id: "Peleburan",   en: "Dissolution" },
};

export const stitchAlias: Record<CategoryId, { id: string; en: string }> = {
  stillness:   { id: "Keheningan",     en: "Stillness" },
  sovereignty: { id: "Cahaya & Kuasa", en: "Light & Glory" },
  grace:       { id: "Kasih Karunia",  en: "Grace" },
  universal:   { id: "Semesta",        en: "Universal" },
  dissolution: { id: "Peleburan",      en: "Dissolution" },
};

function kw(hay: string, words: string[]): boolean {
  return words.some(w => hay.includes(w));
}

export function getCategory(f: ShivaFolio): CategoryId | null {
  const hay = [
    f.mantra ?? "",
    f.source.id ?? "",
    f.translation.en ?? "",
  ].join(" ").toLowerCase();
  if (kw(hay, ["isthraya","sthiraya","kekal","permanent","enduring","immutable","teguh","sunyi","tenang","stillness"])) return "stillness";
  if (kw(hay, ["prabhve","prabhu","penguasa","pemilik","sovereign","berkuasa","bimaya","paling berkuasa","powerful","owner","master","lord"])) return "sovereignty";
  if (kw(hay, ["kasih","karunia","grace","anugerah","blessing","compassion","belas","rahmat","savior","saviour","pelindung","penyelamat","protect"])) return "grace";
  if (kw(hay, ["semesta","universal","jagat","kosmis","sarva","vishva","countless","everywhere","dimana mana","alam sesta"])) return "universal";
  if (kw(hay, ["lebur","peleburan","dissolution","pralaya","samhara","pelebur","rudra","destroy","hancur","fierce","tiger","skin of a tiger"])) return "dissolution";
  return null;
}

export function filterByCategory(folios: ShivaFolio[], cat: CategoryId | "all"): ShivaFolio[] {
  if (cat === "all") return folios;
  return folios.filter(f => getCategory(f) === cat);
}
