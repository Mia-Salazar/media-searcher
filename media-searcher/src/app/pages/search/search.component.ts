import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

import { MediaService } from '../../services/media.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search:string
  invalid:boolean = false
  type:string
  results
  urlImg = 'https://cdn.pixabay.com/photo/2016/05/28/05/40/question-mark-1421017_960_720.png'

  constructor(private mediaService:MediaService, private router:Router) { }

  ngOnInit(): void {
  }

  searchForm(form:NgForm){
    console.log(form)
    if (form.invalid){
      this.invalid = true
    } else {
      let searchModified = this.search.split(' ').join('+')
      this.mediaService.searchMedia(searchModified, this.type).subscribe(
        (r:any) => {
          console.log(r)
          this.results = r
      })
    }
  }

  goToDetail(id, type) {
    if(type == 'movie') {
      this.router.navigate(['/media', id], {state: {data: {type: 'movie', return: '/search'}}});
    } else  {
      this.router.navigate(['/media', id], {state: {data: {type: 'tv', return: '/search'}}});
    }
  }
}