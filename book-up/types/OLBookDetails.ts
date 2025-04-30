export interface BookDetails {
    type:                 TypeElement;
    title:                string;
    subjects?:            string[];
    subject_places?:      string[];
    subject_times?:       string[];
    authors?:             Author[];
    key:                  string;
    latest_revision:      number;
    revision:             number;
    created:              Created;
    last_modified:        Created;
    other_titles?:        string[];
    publishers?:          string[];
    description?:         Created;
    isbn_10?:             string[];
    covers?:              number[];
    lc_classifications?:  string[];
    ocaid?:               string;
    publish_places?:      string[];
    languages?:           TypeElement[];
    pagination?:          string;
    source_records?:      string[];
    dewey_decimal_class?: string[];
    identifiers?:         Identifiers;
    edition_name?:        string;
    lccn?:                string[];
    publish_date?:        string;
    publish_country?:     string;
    by_statement?:        string;
    works?:               TypeElement[];
    local_id?:            string[];
    subtitle?:            string;
    id?:                  number;
    first_publish_date?:  string;
    dewey_number?:        string[];
    notes?:               Created;
    number_of_pages?:     number;
}

export interface Author {
    type?:   TypeElement | string;
    author?: TypeElement;
    key?:    string;
}

export interface TypeElement {
    key: string;
}

export interface Created {
    type:  TypeEnum;
    value: string;
}

export enum TypeEnum {
    TypeDatetime = "/type/datetime",
    TypeText = "/type/text",
}

export interface Identifiers {
    goodreads:    string[];
    librarything: string[];
    amazon:       string[];
}
