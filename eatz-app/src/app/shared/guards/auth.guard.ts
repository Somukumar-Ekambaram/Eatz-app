import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedSubjectService } from '../services/shared-subject.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isValid = false;

  constructor(private ac: ActivatedRoute, private router: Router, private SharedSubject: SharedSubjectService) {
    // this.ac.queryParams.subscribe(res => {
    //   console.log(res['type']);
    // })
    this.SharedSubject.authGuardSubject.subscribe(res => {
      //console.log("hi")
      this.isValid = res;
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if(this.isValid) {
    //   return true;
    // }
    // else {
    //   this.router.navigate(["/login"]);
    //   return false;
    // }

    return true;

  }

}
