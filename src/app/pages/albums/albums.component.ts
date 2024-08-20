import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album.model';
import { SpotifyService } from '../../services/spotify.service';
import { CommonModule } from '@angular/common';
import { SpotifyEnviroment } from '../../../environments/environment';
import { AlbumCardComponent } from '../../components/album-card/album-card.component';

@Component({
  selector: 'albums',
  standalone: true,
  imports: [CommonModule, AlbumCardComponent],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.spotifyService.getAlbunsByArtistId(SpotifyEnviroment.artistId).subscribe(
      (response) => {        
        this.albums = response.items;
      }, (error) => {
        console.log(error);
      })
  }
}
