import { Component, Input } from '@angular/core';
import { Album } from '../../models/album.model';

@Component({
  selector: 'album-card',
  standalone: true,
  imports: [],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.scss'
})
export class AlbumCardComponent {
  @Input() album: Album = {
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
}
