import { Injectable } from '@angular/core';
import { Introduction } from './introduction';
import { Information } from './information';
import { FormData } from './form-data';

@Injectable()
export class FormDataService {

  private formData: FormData = new FormData();
  private isIntroductionValid = false;
  private isInformationValid = false;

  constructor() { }

  getIntroduction() {
    const introduction = {
      username: this.formData.username,
      description: this.formData.description
    };
    return introduction;
  }

  setIntroduction(data: Introduction) {
    this.isIntroductionValid = true;
    this.formData.username = data.username;
    this.formData.description = data.description;
  }

  getInformation() {
    const information = {
      state: this.formData.state,
      age: this.formData.age,
      ethnicity: this.formData.ethnicity,
      race: this.formData.race,
      sex: this.formData.sex,
      height: this.formData.height,
      weight: this.formData.weight
    };
    return information;
  }

  setInformation(data: Information) {
    this.isInformationValid = true;
    this.formData.state = data.state;
    this.formData.age = data.age;
    this.formData.ethnicity = data.ethnicity;
    this.formData.race = data.race;
    this.formData.sex = data.sex;
    this.formData.height = data.height;
    this.formData.weight = data.weight;
  }

  getFormData() {
    return this.formData;
  }

  resetFormData() {
    this.formData.clear();
    this.isIntroductionValid = this.isInformationValid = false;
    return this.formData;
  }

  isFormValid() {
    return this.isIntroductionValid && this.isInformationValid;
  }
}
