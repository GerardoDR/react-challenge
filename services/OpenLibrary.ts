import { SearchBy } from "@/components/SearchInput";
import { Authors } from "@/types/OLAuthors";
import { BookDetails } from "@/types/OLBookDetails";
import { OLResults } from "@/types/OLResults";

const PAGELIMIT = '20';
const SORTBY = 'title';
const BOOKS_URL = 'https://openlibrary.org/search.json?';
const BOOK_DETAILS_URL = 'https://openlibrary.org'
const AUTHORS_URL = 'https://openlibrary.org/authors/'
export const COVERS_URL = 'https://covers.openlibrary.org/b/olid/';
let lastQuery: URL;

const searchBy = (selectInput: SearchBy) => {
    if (selectInput == "both") return 'q';
    if (selectInput == "book") return 'title';
    if (selectInput == "author") return 'author'
}

export function getLastQuery() { return lastQuery }

export async function goToPage(page: number) {
    const pagedURI = new URL(lastQuery);
    pagedURI.searchParams.append("page", page.toString());
    try {
        const response = await fetch(pagedURI);
        const data: OLResults = await response.json();

        return data;
    } catch (error) {
        throw new Error(`Error fetching OpenLibrary: ${error}`);
    }
}

export async function getInitialBooks() {

    const params = new URLSearchParams({
        q: 'subject:finance technologies',
        sort: 'new',
        limit: PAGELIMIT
    });

    const URI = `${BOOKS_URL}${params.toString()}`;

    try {

        const response = await fetch(URI);
        const data: OLResults = await response.json();

        if (data) { lastQuery = new URL(URI) };

        return data;

    } catch (error) {
        throw new Error(`Error fetching OpenLibrary: ${error}`);
    }
}


export async function searchBooks(textInput: string, select: SearchBy) {

    const queryBy = searchBy(select) || 'q';

    const params = new URLSearchParams({
        [queryBy]: textInput,
        sort: SORTBY,
        limit: PAGELIMIT,
    });

    const URI = `${BOOKS_URL}${params.toString()}`;

    try {
        const response = await fetch(URI);
        const data: OLResults = await response.json();

        if (data) { lastQuery = new URL(URI) };

        return data;

    } catch (error) {
        throw new Error(`Error fetching OpenLibrary: ${error}`);
    }
}


export async function getBookDetails(olid: string) {
    const URI = `${BOOK_DETAILS_URL}${olid}.json`;

    try {
        const response = await fetch(URI);
        const data: BookDetails = await response.json();
        return data;

    } catch (error) {
        throw new Error(`Error fetching OpenLibrary: ${error}`);
    }

}

export async function getBookAuthor(aKey: string[]) {

    try {
        const authorsInfo = await Promise.all(
            aKey.map(async (authorKey) => {
                const response = await fetch(`${AUTHORS_URL}${authorKey}.json`);
                const data: Authors = await response.json();
                return data;
            })
        );

        return authorsInfo

    } catch (error) {
        throw new Error(`Error fetching OpenLibrary: ${error}`);
    }
}