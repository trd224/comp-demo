import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  
})
export class ChangeDetectionComponent implements OnInit {

  fruits: string[] = ['Mengo', 'Orange', 'Banana'];

  constructor() { }

  ngOnInit(): void {
  }

  // addFruit(item: string) {
  //   this.fruits.push(item);
  // } 

  addFruit(item: string) {
    this.fruits = [...this.fruits, item];
  }

}
