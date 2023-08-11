import { Component, OnInit } from '@angular/core';
import { Observable, Observer, filter, map, of, from } from 'rxjs';
import { first, take } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  // asyncTabs: Observable<any[]>;
  asyncTabs: any;
  aaa: any;
  data: any

  constructor(
    private commonService: CommonService
  ) {
    new Observable((observer: Observer<any[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'First', content: 'Content 1'},
          {label: 'Second', content: 'Content 2'},
          {label: 'Third', content: 'Content 3'},
        ]);
      }, 1000);
    }).subscribe(res => {
      this.aaa = res;
    });


    // this.asyncTabs.subscribe(res => {
    //   console.log(res);
    // })

  }

  ngOnInit(): void {


    //emit 1,2,3,4,5
const source = from([1, 2, 3, 4, 5]);
//take the first emitted value then complete
const example = source.pipe(take(2));
//output: 1
const subscribe = example.subscribe(val => console.log(val));
console.log(subscribe)




    this.commonService.getAlbums()

    console.log(Array.isArray(this.commonService.getAlbums()))
    // .pipe(
    //   //filter((item, i) => i < 10)
    //   take(5)
      
    //   )
    // // .pipe(map((list) => list.slice(0, 10)))
    // .subscribe(res => {
    //   console.log(res);
    //   this.data = res;
    // })
  }

  getServerData(e:any){
    console.log(e);
  }

}
