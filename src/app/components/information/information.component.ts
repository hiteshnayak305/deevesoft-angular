import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../../shared/form-data.service';
import { Information } from './../../shared/information';
import { FormSubmitService } from '../../shared/form-submit.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  information: Information;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService, private formSubmitService: FormSubmitService) { }

  ngOnInit() {
    this.information = this.formDataService.getInformation();
  }

  onSubmit(form: any) {
    if (!form.valid) {
      return false;
    }
    console.log(this.information);
    this.formDataService.setInformation(this.information);
    this.formSubmitService.submit(this.formDataService.getFormData());
    this.router.navigate(['/']);
  }

}
