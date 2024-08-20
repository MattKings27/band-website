import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpotifyEnviroment } from '../../environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  getToken(): Observable<string | null> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(SpotifyEnviroment.clientId + ':' + SpotifyEnviroment.clientSecret),
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<any>(
      SpotifyEnviroment.tokenEndpoint,
      'grant_type=client_credentials',
      { headers }
    ).pipe(
      map(response => response.access_token || null)
    );
  }

  getHeaders(): Observable<HttpHeaders> {
    return this.getToken().pipe(
      map(token => new HttpHeaders({
        'Authorization': `Bearer ${token}`
      }))
    );
  }
}
