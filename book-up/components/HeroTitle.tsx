import { BookOpenIcon } from "@heroicons/react/24/outline";

export default function HeroTitle() {
    return (
        <>
            <h1 className="text-8xl font-goudy">Book up</h1>
            <h2 className="text-xl text-gray-300 font-kalam">Buscá tu nuevo libro favorito <BookOpenIcon className="size-5 inline"/></h2>
        </>
    )
}