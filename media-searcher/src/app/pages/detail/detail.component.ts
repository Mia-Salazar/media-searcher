import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { MediaService } from '../../services/media.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  mediaId:string
  mediaType:string
  content:any

  constructor(private router: ActivatedRoute, private mediaService:MediaService) {
    const id = this.router.snapshot.paramMap.get('id')
    this.mediaId = id
    if(history.state.data.type == undefined) {
      this.mediaType = localStorage.getItem('type')
    } else  {
      this.mediaType = history.state.data.type
      localStorage.setItem('type', this.mediaType)
    }
  }

  ngOnInit(): void {
    this.getMedia(this.mediaId)
  }

  getMedia(id:string){
    if(this.mediaType === 'movie') {
      this.mediaService.getFilm(id).subscribe(
        (r:any) => {
          this.content = r
        }
      )
    } 
    
    if (this.mediaType === 'serie'){
      this.mediaService.getSerie(id).subscribe(
        (r:any) =>{
          this.content = r
        }
      )
    }
  }


}
