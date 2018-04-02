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
    this.age = -1;
    this.ethnicity = '';
    this.race = '';
    this.sex = '';
    this.height = -1;
    this.weight = -1;
  }

  clear() {
    this.username = '';
    this.description = '';
    this.state = '';
    this.age = -1;
    this.ethnicity = '';
    this.race = '';
    this.sex = '';
    this.height = -1;
    this.weight = -1;
  }
}
