export interface OLResults {
    numFound:          number;
    start:             number;
    numFoundExact:     boolean;
    num_found:         number;
    documentation_url: string;
    q:                 string;
    offset:            null;
    docs:              Doc[];
}

export interface Doc {
    author_key:         string[];
    author_name:        string[];
    cover_edition_key?: string;
    cover_i?:           number;
    edition_count:      number;
    first_publish_year: number;
    has_fulltext:       boolean;
    key:                string;
    public_scan_b:      boolean;
    title:              string;
    language?:          string[];
    ia?:                string[];
    ia_collection_s?:   string;
    subtitle?:          string;
    [key: string]: unknown;
}
