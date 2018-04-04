import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormDataService } from '../../shared/form-data.service';

@Injectable()
export class ValidUserGuard implements CanActivate {

  form1Valid = false;

  constructor(private formDataService: FormDataService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.formDataService.isForm1Valid()) {
      this.form1Valid = true;
    }
      return this.form1Valid;
  }
}
