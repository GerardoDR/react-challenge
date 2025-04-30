export interface Authors {
    personal_name:   string;
    key:             string;
    entity_type:     string;
    birth_date:      string;
    links:           Link[];
    alternate_names: string[];
    name:            string;
    remote_ids:      RemoteIDS;
    type:            Type;
    title:           string;
    bio:             string;
    fuller_name:     string;
    source_records:  string[];
    photos:          number[];
    latest_revision: number;
    revision:        number;
    created:         Created;
    last_modified:   Created;
}

export interface Created {
    type:  string;
    value: Date;
}

export interface Link {
    title: string;
    url:   string;
    type:  Type;
}

export interface Type {
    key: string;
}

export interface RemoteIDS {
    viaf:         string;
    goodreads:    string;
    storygraph:   string;
    isni:         string;
    librarything: string;
    amazon:       string;
    wikidata:     string;
}
