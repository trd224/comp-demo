import { Component, OnInit } from '@angular/core';
import { PdfService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  constructor(
    private pdfService:PdfService
  ) { }

  ngOnInit(): void {
  }

  exportPDF(){
    this.pdfService.exportPDF();
  }

}
