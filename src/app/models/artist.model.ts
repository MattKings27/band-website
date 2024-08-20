import { Image } from "./image.model";

export interface Artist {
    id: string,
    name: string,
    genres: string[],
    images: Image[],
    popularity: number,
    followers: {
        href: string,
        total: number
    }
}