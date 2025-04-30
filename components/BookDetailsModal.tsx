/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { COVERS_URL, getBookAuthor, getBookDetails } from '@/services/OpenLibrary'
import { Authors } from '@/types/OLAuthors';
import { BookDetails } from '@/types/OLBookDetails';
import { Doc } from '@/types/OLResults';
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

type ModalProps = {
    bookOLID: string;
    bookSearchDetails: Doc | undefined;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function BookDetailsModal({ bookOLID, bookSearchDetails, isOpen, setIsOpen }: ModalProps) {
    const [details, setDetails] = useState<BookDetails>()
    const [authors, setAuthors] = useState<Authors[]>([])
    const imageLoader = () => {
        return `${COVERS_URL}${bookOLID.replace("/works/", "")}-M.jpg`
    }
    useEffect(() => {
        async function getDetails() {
            const dtls = await getBookDetails(bookOLID)
            setDetails(dtls)
        }
        try {
            if (isOpen) {
                getDetails()
            } else {
                setDetails(undefined)
            }
        } catch (error) {
            console.error(error)
        }
    }, [bookOLID, isOpen])
    useEffect(() => {
        async function getAuthor() {
            if (bookSearchDetails && bookSearchDetails.author_key && bookSearchDetails.author_key.length > 0) {
                const authors = await getBookAuthor(bookSearchDetails.author_key)
                setAuthors(authors)
            } else {
                if (details && details.authors) {
                    const mapedAuthors: string[] = [];
                    for (const author of details.authors) {
                        if (author.key) {
                            mapedAuthors.push(author.key);
                        }
                    }

                    if (mapedAuthors.length > 0) {
                        const authors = await getBookAuthor(mapedAuthors);
                        setAuthors(authors)
                    }
                }
            }
        }
        try {
            if (isOpen) {
                getAuthor()
            } else {
                setAuthors([])
            }
        } catch (error) {
            console.error(error)
        }
    }, [bookSearchDetails?.key, isOpen])
    return (
        <dialog className={isOpen ? "modal modal-open" : "modal"}>
            {bookSearchDetails &&
                <div className="modal-box max-h-[90vh] max-w-xl">

                    {(details && authors.length > 0 && bookSearchDetails) ? (
                        <>
                            <h1 className='font-bold text-2xl'>{bookSearchDetails.title}</h1>
                            <Image loader={imageLoader} src={bookSearchDetails.title + ".jpg"} className='w-full max-h-80' alt={bookSearchDetails.title} width={464} height={300} />
                            <p className="font-bold text-lg"> First published: {bookSearchDetails.first_publish_year}</p>
                            <h2 className="font-bold text-lg">Description</h2>
                            {details?.description ? <p>{details.description.value}</p> : <p>Not available</p>}
                            {authors &&
                                <div>
                                    <p className="font-bold text-lg">Authors</p>
                                    {authors?.map(author => <div key={author.key + '_bio'} className='mb-2'>
                                        <p>{author.name}</p>
                                        {author.bio?.value &&
                                            <>
                                                <p className='font-bold text-base'>Bio</p>
                                                <p>{author.bio.value}</p>
                                            </>}
                                    </div>)}
                                </div>
                            }
                        </>
                    ) : <div className='min-w-[488px] min-h-[644px] flex justify-center items-center'>
                        <span className="loading loading-dots loading-xl"></span>
                    </div>
                    }
                </div>
            }
            <form method="dialog" className="modal-backdrop" onClick={() => setIsOpen(false)}>
                <button>close</button>
            </form>
        </dialog>
    )
}
