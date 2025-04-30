import { COVERS_URL, getBookAuthor, getBookDetails } from '@/services/OpenLibrary'
import { Authors } from '@/types/OLAuthors';
import { BookDetails } from '@/types/OLBookDetails';
import { Doc } from '@/types/OLResults'
import Image from 'next/image';
import React, { RefObject, useEffect, useState } from 'react'

type ModalProps = {
    reference: RefObject<HTMLDialogElement | null>;
    bookOLID: string;
    bookSearchDetails: Doc | undefined;
}

export default function BookDetailsModal({ reference, bookOLID, bookSearchDetails }: ModalProps) {
    const [details, setDetails] = useState<BookDetails | undefined>()
    const [authors, setAuthors] = useState<Authors[]>()
    const imageLoader = () => {
        return `${COVERS_URL}${bookOLID.replace("/works/", "")}-M.jpg`
    }
    useEffect(() => {
        async function getDetails() {
            const dtls = await getBookDetails(bookOLID)
            setDetails(dtls)
        }
        try {
            getDetails()
        } catch (error) {
            throw new Error(`Error fetching OpenLibrary: ${error}`);
        }
    }, [bookOLID])
    useEffect(() => {
        async function getAuthor() {
            if (bookSearchDetails) {
                const authors = await getBookAuthor(bookSearchDetails?.author_key)
                setAuthors(authors)
            }
        }
        try {
            getAuthor()
        } catch (error) {
            throw new Error(`Error fetching OpenLibrary: ${error}`);
        }
    }, [bookSearchDetails])
    return (
        <dialog className="modal" ref={reference}>
            {bookSearchDetails &&
                <div className="modal-box">
                    <h1>{bookSearchDetails.title}</h1>
                    <Image loader={imageLoader} src={bookSearchDetails.title + ".jpg"} className='w-full h-full' alt={bookSearchDetails.title} width={464} height={464} />
                    <p className="font-bold text-lg"> First published: {bookSearchDetails.first_publish_year}</p>
                    <h2 className="font-bold text-lg">Description</h2>
                    {details?.description ? <p>{details.description}</p> : <p>Not available</p>}
                    {authors &&
                        <div>
                            <p className="font-bold text-lg">Authors</p>
                            {authors?.map(author => <div key={author.key + '_bio'}>
                                <p>{author.name}</p>
                                <p>{author.bio}</p>
                            </div>)}
                        </div>
                    }
                </div>
            }
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}
