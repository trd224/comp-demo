import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as ExcelJS from 'exceljs';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

 
  // const worksheet = workbook.addWorksheet('My Sheet');

  constructor() { }

  exportTOExcel(data: any[], fileName: string) {

    //Then, you need to create a new Excel workbook and worksheet instance.
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(fileName);

    console.log(worksheet);

    //Next, you need to add the data to the worksheet. You can do this by iterating over the data and adding it to the worksheet using the worksheet.addRow() method
    // Add headers
    const headers = Object.keys(data[0]);

    //console.log(headers);
    worksheet.addRow(headers);

   // Add data
      data.forEach((item) => {
        const row:any = [];
        headers.forEach((header) => {
          row.push(item[header]);
        });
        worksheet.addRow(row);
      });



    //After adding the data, you can format the worksheet using the ExcelJS API. For example, you can set the column widths using the worksheet.getColumn(colIndex).width property.
    worksheet.getColumn(1).width = 15;
    worksheet.getColumn(2).width = 20;


    //Finally, you can save the workbook to an Excel file using the workbook.xlsx.writeBuffer() method.
      // Generate Excel file
      workbook.xlsx.writeBuffer().then((buffer: any) => {
        const blob = new Blob([buffer], { type: 'application/vnd.ms-excel' });
        FileSaver(blob, `${fileName}.xlsx`);
      });

    }









    readExcel(event: any) {
      const workbook = new ExcelJS.Workbook();
      const target: DataTransfer = <DataTransfer>(event.target);
      if (target.files.length !== 1) {
        throw new Error('Cannot use multiple files');
      }
  
      /**
       * Final Solution For Importing the Excel FILE
       */
  
      const arryBuffer = new Response(target.files[0]).arrayBuffer();
      arryBuffer.then(function (data) {
        workbook.xlsx.load(data)
          .then(function () {
  
            // play with workbook and worksheet now
            console.log(workbook);
            const worksheet = workbook.getWorksheet(1);
            console.log('rowCount: ', worksheet.rowCount);
            worksheet.eachRow(function (row, rowNumber) {
              console.log('Row: ' + rowNumber + ' Value: ' + row.values);
            });
  
          });
      });
    }

}
