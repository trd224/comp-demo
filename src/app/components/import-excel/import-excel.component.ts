import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-import-excel',
  templateUrl: './import-excel.component.html',
  styleUrls: ['./import-excel.component.scss']
})
export class ImportExcelComponent implements OnInit {

  constructor(
    private excelService: ExcelService
  ) { }

  ngOnInit(): void {
  }

  readExcel(event:any){
    this.excelService.readExcel(event);
  }

}
