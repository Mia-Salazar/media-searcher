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

  searchMedia(id, type){
    let url = `${this.urlMoviedb}/search/${type}?api_key=${ this.apikey }&query=${id}`
    return this.http.get( url ).pipe(map( (res:any) => res = res['results']))   
  }

  getFilm(id){
    let url = `${this.urlMoviedb}/movie/${id}?api_key=${ this.apikey }&language=en-US`
    return this.http.get( url ).pipe(map( (res:any) => res))    
  }

  getSerie(id){
    let url = `${this.urlMoviedb}/tv/${id}?api_key=${ this.apikey }&language=en-US`
    return this.http.get( url ).pipe(map( (res:any) => res))    
  }
}