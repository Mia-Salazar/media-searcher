import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { MediaService } from '../../services/media.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  mediaId:string;
  mediaType:string;
  content:any;
  return:string

  constructor(private activatedRouter: ActivatedRoute, private mediaService:MediaService,private router:Router) {
    const id = this.activatedRouter.snapshot.paramMap.get('id')
    this.return = history.state.data.return
    console.log(this.return)
    this.mediaId = id
    if(history.state.data.type == undefined) {
      this.mediaType = localStorage.getItem('type')
      this.mediaId = localStorage.getItem('id')
      this.recharge(this.mediaId)
    } else  {
      this.mediaType = history.state.data.type
      localStorage.setItem('type', this.mediaType)
      localStorage.setItem('id', this.mediaId)
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
    
    if (this.mediaType === 'tv'){
      this.mediaService.getSerie(id).subscribe(
        (r:any) =>{
          this.content = r
        }
      )
    }
  }

  recharge(id){
    this.router.navigate(['/media', id],);
  }


}
