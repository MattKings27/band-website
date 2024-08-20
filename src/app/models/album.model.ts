import { Artist } from "./artist.model"
import { Image } from "./image.model"
import { Track } from "./track.model"
import { TrackList } from "./tracklist.model"

export interface Album {
    id: string,
    name: string,
    images: Image[],
    total_tracks: number,
    href: string,
    release_date: string,
    artists: Artist[],
    tracks: TrackList,
    label: string,
    popularity: number
}

export interface AlbumsResponse {
    total: number;
    items: Album[];
}