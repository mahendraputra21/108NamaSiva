"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LangSync } from "@/components/LangSync";
import { ManuscriptIndex } from "@/components/ManuscriptIndex";

export default function IndexPage() {
  return (
    <>
      <LangSync />
      <Header />
      <main className="flex flex-1 flex-col bg-surface">
        <div className="mx-auto flex w-full max-w-[640px] flex-col px-4 pb-10 pt-2 sm:px-6">
          <ManuscriptIndex />
        </div>
      </main>
      <Footer />
    </>
  );
}
