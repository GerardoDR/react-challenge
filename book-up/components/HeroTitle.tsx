"use client"
import { BookOpenIcon } from "@heroicons/react/24/outline";

export default function HeroTitle() {
    return (
        <>
            <h1 className="text-8xl font-goudy">Book up</h1>
            <h2 className="text-xl text-gray-300 font-kalam">Your favourite book is here <BookOpenIcon className="size-5 inline" /></h2>
        </>
    )
}