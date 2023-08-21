import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-epansion-panel',
  templateUrl: './epansion-panel.component.html',
  styleUrls: ['./epansion-panel.component.scss']
})
export class EpansionPanelComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
