import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { MediaService } from '../../services/media.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  latestTV:string[] = []
  latestMovies:string[] = []
  url:string = ""
  imgUrl = `http://image.tmdb.org${this.url}`

  constructor(private mediaService:MediaService, private router:Router) {
    this.getTrending()
  }

  ngOnInit(): void {
  }

  getTrending(){
    this.mediaService.getTrending().subscribe(
      (r:any) => {
        r.forEach(element => {
          if (element.media_type == "movie") {
            this.latestMovies.push(element)
          } else {
            this.latestTV.push(element)
          }
        });
      })
  }

  goToDetail(id, type) {
    if(type == 'movie') {
      this.router.navigate(['/media', id], {state: {data: {type: 'movie', return: '/'}}});
    } else  {
      this.router.navigate(['/media', id], {state: {data: {type: 'tv', return: '/'}}});
    }
  }
}
