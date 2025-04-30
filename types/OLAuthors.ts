export interface Authors {
    personal_name: string;
    key: string;
    entity_type?: string;
    birth_date?: string;
    links?: Link[];
    alternate_names?: string[];
    name: string;
    remote_ids?: RemoteIDS;
    type: TypeClass;
    title?: string;
    bio?: Bio;
    fuller_name?: string;
    source_records?: string[];
    photos?: number[];
    latest_revision?: number;
    revision: number;
    created?: Created;
    last_modified: Created;
    id?: number;
    death_date?: string;
}

export interface Created {
    type: TypeEnum;
    value: Date;
}

export interface Bio {
    type: TypeEnum;
    value: string;
}

export enum TypeEnum {
    TypeDatetime = "/type/datetime",
    TypeText = "/type/text",
}

export interface Link {
    title: string;
    url: string;
    type: TypeClass;
}

export interface TypeClass {
    key: string;
}

export interface RemoteIDS {
    viaf?: string;
    goodreads?: string;
    storygraph?: string;
    isni?: string;
    librarything?: string;
    amazon?: string;
    wikidata: string;
}
