"use client";

import styles from "./styles.module.css"
import HeroTitle from "@/components/HeroTitle";
import BookList from "@/components/BookList";
import SearchInput, { Inputs } from "@/components/SearchInput";
import { useEffect, useState } from "react";
import { OLResults } from "@/types/OLResults";
import { getInitialBooks, searchBooks } from "@/services/OpenLibrary";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [booklist, setBooklist] = useState<OLResults>()

  const handleSearch = async (dataFromSearchInput: Inputs) => {
    const { textInput, select } = dataFromSearchInput;
    if (!textInput.trim()) return;
    setLoading(true);
    const data = await searchBooks(textInput, select)
    setBooklist(data);
    setLoading(false);
  }


  useEffect(() => {
    async function initialFetch() {
      const data = await getInitialBooks()
      setBooklist(data)
    }
    try {
      initialFetch()
    } catch (error) {
      throw new Error(`Error fetching OpenLibrary: ${error}`);
    } finally{
      setLoading(false);
    }

  }, [])

  return (
    <div className={`min-h-screen bg-cover ${styles.rootContainer}`}>
      <div className="flex flex-col mx-auto bg-linear-to-r from-black/10 via-10% via-amber-900/80 to-gray-600/10 min-h-screen">
        <header className="flex flex-col justify-center items-start gap-7 mx-[10%] my-7">
          <HeroTitle />
        </header>
        <main className="flex-grow my-7">
          <div className="max-w-lg mx-[10%]">
            <SearchInput handleSearch={handleSearch} />
          </div>
          <section className="mx-[10%] mt-7 bg-base-200/95 rounded-2xl">
            <BookList booklist={booklist} setBooklist={setBooklist} loading={loading} />
          </section>
        </main>
      </div>
    </div>
  );
}