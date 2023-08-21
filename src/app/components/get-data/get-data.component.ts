import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    // this.commonService.getAlbums().subscribe(res => {
    //   console.log(res);
    // })

    this.commonService.postAlbums('https://reqres.in/api/posts',{ title: 'Angular POST Request Example' }).subscribe(res => {
      console.log(res);
    })
  }

}
