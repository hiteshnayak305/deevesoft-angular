import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormData } from './form-data';

@Injectable()
export class FormSubmitService {

  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  submit(formData: FormData) {
    this.http.post(this.url + '/user', formData).subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('completed');
    });
  }

}
