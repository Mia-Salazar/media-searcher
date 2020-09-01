import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private apikey:string = "f5934cd26310c9374e6c28c18d745b54";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor(private http:HttpClient) { }

  getTrending(){
    let url = `${this.urlMoviedb}/trending/all/day?api_key=${ this.apikey }`
    return this.http.get( url ).pipe(map( (res:any) => res = res['results']))          
  }

  searchMedia(){
    let url = `${this.urlMoviedb}/trending/all/day?api_key=${ this.apikey }`
    return this.http.get( url ).pipe(map( (res:any) => res = res['results']))          
  }
}
