import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  item = {key:'check box', value:false}

  constructor() { }

  ngOnInit(): void {
  }

  toggle(e:any){
    console.log(e);
  }

}
