import { notFound } from "next/navigation";
import { getFolio, shortTitle, TOTAL } from "@/lib/content";
import { DetailClient } from "./DetailClient";

export function generateStaticParams() {
  return Array.from({ length: TOTAL }, (_, i) => ({ number: String(i + 1) }));
}

export async function generateMetadata({ params }: { params: Promise<{ number: string }> }) {
  const { number: raw } = await params;
  const n = parseInt(raw, 10);
  const folio = getFolio(n);
  if (!folio || Number.isNaN(n)) return { title: "Folio — 108 NAMA SHIVA" };
  const st = shortTitle(folio);
  return {
    title: folio.mantra ? `${folio.mantra} — Folio ${String(n).padStart(2, "0")} · 108 NAMA SHIVA` : `Folio ${String(n).padStart(2, "0")} · 108 NAMA SHIVA`,
    description: folio.source.id ?? (st ? `Contemplative reading for ${st}` : "Sacred manuscript folio"),
  };
}

export default async function FolioPage({ params }: { params: Promise<{ number: string }> }) {
  const { number: raw } = await params;
  const n = parseInt(raw, 10);
  if (Number.isNaN(n) || n < 1 || n > TOTAL) notFound();
  const folio = getFolio(n);
  if (!folio) notFound();
  return <DetailClient number={n} folio={folio} />;
}
