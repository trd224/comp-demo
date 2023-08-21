import { Component, OnInit } from '@angular/core';
import { combineLatest, map, of } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {

   firstArray = [
    {
      "firstName": "John",
      "lastName": "Doe",
      "studentEmail": "johndoe@example.com",
      "course": "Bsc Software Engineering",
      "yearOfStudy": 2,
      "registrationNumber": "lkl345"
    },
    {
      "firstName": "Test2",
      "lastName": "Test2",
      "studentEmail": "test@example.com",
      "course": "Bsc Computer Science",
      "yearOfStudy": 4,
      "registrationNumber": "lkl3585"
    }
  ];
  
 secondArray = [
    {
      "EID": 1
    },
    {
      "EID": 2
    }
  ];

  firstArray$ = of(this.firstArray);
  secondArray$ = of(this.secondArray);

  constructor() { }

  ngOnInit(): void {

    const result$ = combineLatest([this.firstArray$, this.secondArray$]).pipe(
      map(([first, second]) => {
        return first.map((item, index) => ({
          ...item,
          ...second[index]
        }));
      })
    );


    console.log(result$);
   result$.subscribe(result => {
    console.log(result);
  });




  }

  
  

}
