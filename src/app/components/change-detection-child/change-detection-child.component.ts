import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection-child',
  templateUrl: './change-detection-child.component.html',
  styleUrls: ['./change-detection-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionChildComponent implements OnInit {

  @Input() data!: string[]

  constructor() { }

  ngOnInit(): void {
  }

}
