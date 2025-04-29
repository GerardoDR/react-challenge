'use client'

import HeroTitle from "@/components/HeroTitle";
import styles from "./styles.module.css"
import { SearchInput } from "@/components/SearchInput";
import BookList from "@/components/BookList";

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
          <div className="mx-[10%] my-7 bg-base-100/90 rounded-md">
            <BookList />
            <div className="join mt-7 flex justify-end p-4">
              <span className="me-2 self-center">Pages:</span>
              <button className="join-item btn">1</button>
              <button className="join-item btn btn-active">2</button>
              <button className="join-item btn">3</button>
              <button className="join-item btn">4</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}