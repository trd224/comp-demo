import { Component, OnInit } from '@angular/core';
import { MatNavList } from '@angular/material/list';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-content',
  templateUrl: './bottom-sheet-content.component.html',
  styleUrls: ['./bottom-sheet-content.component.scss']
})
export class BottomSheetContentComponent implements OnInit {

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

  openLink(e:any){
    console.log(e);
  }

}
