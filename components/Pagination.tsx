"use client";
import { goToPage } from "@/services/OpenLibrary";
import { OLResults } from "@/types/OLResults";
import { Dispatch, SetStateAction } from "react";

type PaginationProps = {
    activePage: number;
    setActivePage: Dispatch<SetStateAction<number>>;
    setBooklist: Dispatch<SetStateAction<OLResults | undefined>>
    pages: number;
}

export default function Pagination({ activePage, setActivePage, setBooklist, pages }: PaginationProps) {
    const handlePageChange = async (page: number) => {
        const booklist = await goToPage(page)
        setBooklist(booklist)
        setActivePage(page)
    }

    return (
        <div className="join mt-7 flex justify-end p-4">
            <span className="me-2 self-center">Pages:</span>
            {activePage - 10 > 2 && (
                <>
                    <button className="join-item btn" onClick={() => handlePageChange(1)}>1</button>
                    <button className="join-item btn btn-disabled">...</button>
                </>
            )}
            {activePage > 2 && <button className="join-item btn" onClick={() => handlePageChange(activePage - 2)}>{activePage - 2}</button>}
            {activePage > 1 && <button className="join-item btn" onClick={() => handlePageChange(activePage - 1)}>{activePage - 1}</button>}
            <button className="join-item btn btn-active">{activePage}</button>
            {activePage + 1 <= pages && <button className="join-item btn" onClick={() => handlePageChange(activePage + 1)}>{activePage + 1}</button>}
            {activePage + 2 <= pages && <button className="join-item btn" onClick={() => handlePageChange(activePage + 2)}>{activePage + 2}</button>}
            {activePage + 10 < pages && (
                <>
                    <button className="join-item btn btn-disabled">...</button>
                    <button className="join-item btn " onClick={() => handlePageChange(pages)}>{pages}</button>
                </>
            )}
        </div>
    )
}