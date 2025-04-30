"use client";
import { Doc, OLResults } from "@/types/OLResults";
import Pagination from "./Pagination";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import BookDetailsModal from "./BookDetailsModal";

type BookListProps = {
  booklist: OLResults | undefined;
  setBooklist: Dispatch<SetStateAction<OLResults | undefined>>
  loading: boolean;
}

export default function BookList({ booklist, setBooklist, loading }: BookListProps) {
  const [pages, setPages] = useState(0)
  const [activePage, setActivePage] = useState(1)
  const [bookId, setBookId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)
  const [bookSearchDetails, setBookSearchDetails] = useState<Doc | undefined>()

  useEffect(() => {
    if (booklist) {
      const pags = Math.ceil(booklist.numFound / 20)
      if (pags != pages) { setPages(pags) }
    }

  }, [booklist, pages])

  const goToDetailsModal = (bookKey: string) => {
    const details = booklist?.docs.find(book => book.key === bookKey)
    setBookSearchDetails(details)
    setBookId(bookKey)
    setIsOpen(true)
  }

  if (loading || booklist === undefined) {

    return (
      <div className="skeleton w-full h-screen opacity-80 flex justify-center items-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    )
  }

  return (
    <div>
      {booklist?.numFound > 0 ?
        (<>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author name</th>
                <th>First publish year</th>
              </tr>
            </thead>
            <tbody>
              {booklist?.docs.map((book: Doc) => {
                return (
                  <tr onClick={() => goToDetailsModal(book.key)} className="hover:bg-primary hover:text-primary-content cursor-pointer" key={book.key}>
                    <td>{book.title || 'Unknown'}</td>
                    <td>{book.author_name || 'Unknown'}</td>
                    <td>{book.first_publish_year || 'Unknown'}</td>
                  </tr>
                )
              })
              }
            </tbody>
          </table>
          {pages > 0 && <Pagination activePage={activePage} setActivePage={setActivePage} setBooklist={setBooklist} pages={pages} />}
          <BookDetailsModal bookOLID={bookId} bookSearchDetails={bookSearchDetails} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>)
        :
        <div role="alert" className="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Sorry, there are no results matching your search.</span>
        </div>
      }

    </div>
  )
}