
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAmHaBEIezkTTxcYCdH3tmbcN9eja9xXZcRZHbc8xtlb_J-2OTMP5c3BcJ3rE5ee58uZy8fUJ1cFtMNZY1Kf5JdMHpputoszcK_SBa6Cv1w3eLmgxYOjtIQmbreHXDETTMSCv83Bbp8tREKJy5Z'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

 getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
   const headers = new HttpHeaders({Authorization: environment.oauthToken});

    return this.http.get(url, { headers });
  }
  getArtist(id: string) {
    const url = `https://api.spotify.com/v1/artists/${id}`;
   const headers = new HttpHeaders({Authorization: environment.oauthToken});

    return this.http.get(url, { headers });
  }
  getAlbum(id: string) {
    const url = `https://api.spotify.com/v1/albums/{id}`;
   const headers = new HttpHeaders({Authorization: environment.oauthToken});

    return this.http.get(url, { headers });
  }



}
