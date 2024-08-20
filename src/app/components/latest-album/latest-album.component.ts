import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Album } from '../../models/album.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'latest-album',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest-album.component.html',
  styleUrls: ['./latest-album.component.scss']
})
export class LatestAlbumComponent implements OnInit {
  album: Album = {
    id: '',
    name: '',
    total_tracks: 0,
    images: [],
    release_date: '',
    tracks: {
      href: '',
      limit: 0,
      next: '',
      offset: 0,
      previous: '',
      total: 0,
      items: []
    },
    label: '',
    popularity: 0,
    artists: [],
    href: ''
  }

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum() {
    this.spotifyService.getAlbumById('6VH2op0GKIl3WNTbZmmcmI').subscribe(
      (response) => {
        this.album = response;
      }, (error) => {
        console.log(error);
      })
  }

  formatMillisecondsToMinutes(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  }
}