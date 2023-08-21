
import { Component } from '@angular/core';
import { FileHandle } from '../../directives/drag-drop.directive';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent  {
  name = 'Angular 5';
  files: FileHandle[] = [];

  filesDropped(files: FileHandle[]): void {
    this.files = files;
  }

  upload(): void {
    //get image upload file obj;
  }
}

