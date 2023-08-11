import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
import * as FileSaver from 'file-saver';
import * as ExcelJS from 'exceljs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private http: HttpClient
  ) { }


  getAlbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getStudentsInformation(): Observable<any[]>{
    return this.http.get<any[]>(`${environment.baseURL}student.json`);
  }
  getStudentsInformation2(): Observable<any[]>{
    return this.http.get<any[]>(`${environment.baseURL}studentOtherInfo.json`);
  }




  exportTOExcel(data: any[], fileName: string) {
    
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(fileName);

    // Add headers
    const headers = Object.keys(data[0]);
    let headerRow =worksheet.addRow(headers);

    // Add data
    data.forEach((item) => {
    

      const row:any = [];
      headers.forEach((header,index) => {
        
        
        row.push(item[header]);
      });
      worksheet.addRow(row);
    });

    
  
    headerRow.eachCell(function (cell: ExcelJS.Cell, index) {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '2980ba' },
        
      };
      cell.font =  {
        color: {argb: "ffffff"},
        bold:true
      }
      cell.alignment = { horizontal: 'center' };
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" }

      };
      worksheet.getColumn(index).width =  headers[index - 1].length < 20 ? 20 : headers[index - 1].length;

      
    });
   


    // Generate Excel file
    workbook.xlsx.writeBuffer().then((buffer: any) => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      FileSaver(blob, `${fileName+ new Date().getTime()}.xlsx`);
    });
    //this.load.hide()
  }

}
