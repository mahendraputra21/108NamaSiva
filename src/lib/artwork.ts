// Data-driven artwork registry. Maps folio number → public art asset.
// Supplied assets: folio 01 Isthraya, folio 02 Prabhve, sacred Om emblem.
// All other folios use neutral fallback (no invented metadata).
export const artworkForFolio: Record<number, string> = {
  1: "/art/folio-01-isthraya.png",
  2: "/art/folio-02-prabhve.png",
};

export function getArtworkSrc(n: number): string | null {
  return artworkForFolio[n] ?? null;
}

export const omEmblemSrc = "/art/om-emblem.png";

// Caption is editorial UI — not canonical. Provided per folio where known.
export const artworkCaption: Record<number, { id: string; en: string }> = {
  1: { id: "Gunung Meru · Tak Tergoyahkan", en: "Mount Meru · Immutable" },
  2: { id: "Sumber Cahaya Abadi", en: "Source of Eternal Light" },
};

export function getArtworkCaption(n: number, lang: "id"|"en"): string | null {
  const c = artworkCaption[n];
  if (!c) return null;
  return lang === "en" ? c.en : c.id;
}
