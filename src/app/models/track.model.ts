import { Artist } from "./artist.model";

export interface Track {
    id: string,
    name: string,
    preview_url: string,
    track_number: number,
    disc_number: number,
    duration_ms: number,
    artists: Artist[],
    external_urls: { spotify: string }
}