'use client'

import HeroTitle from "@/components/HeroTitle";
import styles from "./styles.module.css"
import { SearchInput } from "@/components/SearchInput";

export default function Home() {
  return (
    <div className={`min-h-screen bg-cover ${styles.rootContainer}`}>
      <div className="flex flex-col mx-auto bg-linear-to-r from-black/5 via-10% via-amber-900/30 to-gray-600/5 min-h-screen">
        <header className="flex flex-col justify-center items-start gap-7 mx-[10%] py-7">
          <HeroTitle />
        </header>
        <main className="flex-grow">
          <section className="flex justify-center mx-[10%]">
            <div className="w-lg">
              <SearchInput />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}