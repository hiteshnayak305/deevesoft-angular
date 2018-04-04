export class FormData {
  username: string;
  description: string;
  state: string;
  age: number;
  ethnicity: string;
  race: string;
  sex: string;
  height: number;
  weight: number;

  constructor() {
    this.username = '';
    this.description = '';
    this.state = '';
    this.age = 0;
    this.ethnicity = '';
    this.race = '';
    this.sex = '';
    this.height = 0;
    this.weight = 0;
  }

  clear() {
    this.username = '';
    this.description = '';
    this.state = '';
    this.age = 0;
    this.ethnicity = '';
    this.race = '';
    this.sex = '';
    this.height = 0;
    this.weight = 0;
  }
}
