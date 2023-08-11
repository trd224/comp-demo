import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-excel2',
  templateUrl: './excel2.component.html',
  styleUrls: ['./excel2.component.scss']
})
export class Excel2Component implements OnInit {

  list: any[] = [
    {name:'abc', mailId: 'abc@gmail.com'},
    {name:'xyz', mailId: 'xyz@gmail.com'},
  ];

  filename: string = 'myExcelFile';

  constructor(
    private excelService: ExcelService
  ) { }

  ngOnInit(): void {
  }

  exportToExcel(){
    this.excelService.exportTOExcel(this.list,this.filename);
  }

}
