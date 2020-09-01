import { Component, OnInit } from '@angular/core';
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

  constructor(private mediaService:MediaService) {
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
        console.log(this.latestMovies)
        console.log(this.latestTV)
      })

  }

}
