import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../models/artist.model';
import { SpotifyEnviroment } from '../../../environments/environment';

@Component({
  selector: 'about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  artist: Artist = {
    id: '',
    name: '',
    genres: [],
    images: [],
    popularity: 0,
    followers: {
      href: '',
      total: 0
    }
  };

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.getArtist();
  }

  getArtist() {
    this.spotifyService.getArtistById(SpotifyEnviroment.artistId).subscribe(
      (response) => {
        this.artist = response;
      }, (error) => {
        console.log(error);
      })
  }

  formatNumber(num: number) {
    return new Intl.NumberFormat('pt-BR').format(num);
  }
}
