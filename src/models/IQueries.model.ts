export enum CacheControlScope {
    PRIVATE,
    PUBLIC
}

export interface Character {
    created?: string;
    episode?: Episode[];
    gender?: string;
    id?: string;
    image?: string;
    location?: Location;
    name?: string;
    origin?: Location;
    species?: string;
    status?: string;
    type?: string;
}

export interface Characters {
    info: Info;
    results: Character[];
}

export interface Episode {
    air_date: string;
    characters: Character[];
    created: string;
    episode: string;
    id: string;
    name: string;
}

export interface Episodes {
    info: Info;
    results: Episode[];
}

export interface FilterCharacter {
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
}

export interface FilterEpisode {
    name?: string;
    episode?: string;
}

export interface FilterLocation {
    name?: string;
    type?: string;
    dimension?: string;
}

export interface Info {
    count: number;
    next: number;
    pages: number;
    prev: number;
}

export interface Location {
    created: string;
    dimension: string;
    id: string;
    name: string;
    residents: Character[];
    type: string;
}

export interface Locations {
    info: Info;
    results: Location[];
}

export interface QueryCharacter {
    character(id: string): Character;

    characters(filter: FilterCharacter, page: number): Characters;

    charactersByIds(ids: string[]): Character[];

    episode(id: string): Episode;

    episodes(filter: FilterEpisode, page: number): Episodes;

    episodesByIds(ids: string[]): Episode[];

    location(id: string): Location;

    locations(filter: FilterLocation, page: number): Locations;

    locationsByIds(ids: string[]): Location[];
}

export type Upload = File;