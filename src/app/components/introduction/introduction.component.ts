import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../../shared/form-data.service';
import { Introduction } from './../../shared/introduction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  introduction: Introduction;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.introduction = this.formDataService.getIntroduction();
  }

  onSubmit(form: any) {
    if (!form.valid) {
      return false;
    }
    this.formDataService.setIntroduction(this.introduction);
    this.router.navigate(['/information']);
  }

}
