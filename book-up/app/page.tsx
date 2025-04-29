'use client'

import styles from "./styles.module.css"
import HeroTitle from "@/components/HeroTitle";
import BookList from "@/components/BookList";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  return (
    <div className={`min-h-screen bg-cover ${styles.rootContainer}`}>
      <div className="flex flex-col mx-auto bg-linear-to-r from-black/5 via-10% via-amber-900/30 to-gray-600/5 min-h-screen">
        <header className="flex flex-col justify-center items-start gap-7 mx-[10%] my-7">
          <HeroTitle />
        </header>
        <main className="flex-grow my-7">
          <div className="max-w-lg mx-[10%]">
            <SearchInput />
          </div>
          <div className="mx-[10%] mt-7 bg-base-100/90 rounded-md">
            <BookList />
            <Pagination />
          </div>
        </main>
      </div>
    </div>
  );
}