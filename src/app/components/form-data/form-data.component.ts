import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})
export class FormDataComponent implements OnInit {

  SERVER_URL = "http://localhost:3000/upload";
  uploadForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {

    console.log(this.uploadForm);

    this.uploadForm = this.formBuilder.group({
      profile: ['', Validators.required]
    });
  }

  onFileSelect(event: any){
    //console.log(event.target.files);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      //console.log(file);
      this.uploadForm.get('profile')?.setValue(file);
    }
  }

  onSubmit() {
    // console.log(this.uploadForm);
    // console.log(this.uploadForm.get('profile')?.value);
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile')?.value);

    console.log(formData);

    // this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
    //   (res) => console.log(res),
    //   (err) => console.log(err)
    // );
  }

}
