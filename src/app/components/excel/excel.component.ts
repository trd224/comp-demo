import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss']
})
export class ExcelComponent implements OnInit {

  list: any[] = [
    {name:'abc', mailId: 'abc@gmail.com'},
    {name:'xyz', mailId: 'xyz@gmail.com'},
  ];

  filename: string = 'gdfjdhgfjgh';

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
  }

  exportToExcel(){
    this.commonService.exportTOExcel(this.list,this.filename);
  }

}
