import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/services/common.service';

export interface Student {
  EID:number;
  firstName:string;
  lastName:string;
  studentEmail:string;
  course:string;
  yearOfStudy: number;
  registrationNumber:string;
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  // student: Student[] = [];
  // columns we will show on the table
  public displayedColumns = ['EID', 'firstName', 'lastName', 'studentEmail', 'yearOfStudy', 'registrationNumber', 'course' ];
  //the source where we will get the data
  public dataSource: any;
  resultArray: any;

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.getStudentsInformation();
    //this.getStudentsInformation2();
  }

  getStudentsInformation(){
    this.commonService.getStudentsInformation().subscribe(res => {

      this.getStudentsInformation2().subscribe(resp => {
        // console.log(resp);
        // console.log(res);
        this.resultArray = res.map((item, index) => ({...item,...resp[index]}));
        //console.log(this.resultArray);

         // this.dataSource = new MatTableDataSource<Student>(res);
        console.log(res);
        console.log(this.resultArray);
        this.dataSource = new MatTableDataSource<Student>(this.resultArray);
        //console.log(this.dataSource.data)
        this.dataSource.paginator = this.paginator;

      })
      
     
    })
  }

  // getStudentsInformation(){
  //   this.commonService.getStudentsInformation().subscribe(res => {

  //     this.getStudentsInformation2().subscribe(resp => {
  //       // console.log(resp);
  //       // console.log(res);
  //       this.resultArray = res.map((item, index) => ({...item,...resp[index]}));
  //       //console.log(this.resultArray);
  //     })
      
  //     // this.dataSource = new MatTableDataSource<Student>(res);
  //     console.log(res);
  //     console.log(this.resultArray);
  //     this.dataSource = new MatTableDataSource<Student>(res);
  //     //console.log(this.dataSource.data)
  //     this.dataSource.paginator = this.paginator;
  //   })
  // }

  getStudentsInformation2(){
    // this.commonService.getStudentsInformation2().subscribe(res => {
    //   console.log(res);
    //   // this.dataSource = new MatTableDataSource<Student>(res);
    //   // console.log(this.dataSource)
    //   // this.dataSource.paginator = this.paginator;
    // })
    return this.commonService.getStudentsInformation2();
  }

  ngOnChanges() {
    //this.dataSource = new MatTableDataSource<any>(this.users);
    // this.dataSource.paginator = this.paginator;
   //this.dataSource.paginator = this.paginator;
}

}
