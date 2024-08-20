import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, switchMap } from 'rxjs';
import { Artist } from '../models/artist.model';
import { Album, AlbumsResponse } from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private apiUrl = "https://api.spotify.com/v1";

  constructor(private http: HttpClient, private authService: AuthService) { }

  getArtistById(id: string): Observable<Artist> {
    return this.authService.getHeaders().pipe(
      switchMap(headers => 
        this.http.get<Artist>(`${this.apiUrl}/artists/${id}`, { headers })
      )
    );
  }

  getAlbunsByArtistId(id: string): Observable<AlbumsResponse> {   
    return this.authService.getHeaders().pipe(
      switchMap(headers => 
        this.http.get<AlbumsResponse>(`${this.apiUrl}/artists/${id}/albums`, { headers })
      )
    );
  }

  getAlbumById(id: string): Observable<Album> {   
    return this.authService.getHeaders().pipe(
      switchMap(headers => 
        this.http.get<Album>(`${this.apiUrl}/albums/${id}`, { headers })
      )
    );
  }
}
