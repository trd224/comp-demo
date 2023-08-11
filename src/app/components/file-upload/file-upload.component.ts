import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  fileForm!: FormGroup;
  file!: File;

  constructor(private formBuilder: FormBuilder) { 
    this.fileForm = this.formBuilder.group({
      fileinput: [""]
    })
  }

  ngOnInit(): void {
  }

  onFileSelected(event:any){
    this.file = event.target.files[0];
    console.log(this.file);

  }

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.file, this.file.name);
    console.log(formData);
  }

}
