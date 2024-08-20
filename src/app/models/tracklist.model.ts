import { Track } from "./track.model";

export interface TrackList {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Track[];
  }