export interface BookDetails {
    title:           string;
    key:             string;
    authors:         Author[];
    type:            Type;
    description:     string;
    covers:          number[];
    subject_places:  string[];
    subjects:        string[];
    subject_people:  string[];
    subject_times:   string[];
    location:        string;
    latest_revision: number;
    revision:        number;
    created:         Created;
    last_modified:   Created;
}

export interface Author {
    author: Type;
    type:   Type;
}

export interface Type {
    key: string;
}

export interface Created {
    type:  string;
    value: Date;
}
