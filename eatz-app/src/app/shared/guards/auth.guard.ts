import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SharedSubjectService } from '../services/subjects/shared-subject.service';

/**
 *
 *
 * @export
 * @class AuthGuard
 * @implements {CanActivate}
 */
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isValid = false;

  /**
   * Creates an instance of AuthGuard.
   * @param {ActivatedRoute} ac
   * @param {Router} router
   * @param {SharedSubjectService} SharedSubject
   * @memberof AuthGuard
   */
  constructor(
    private ac: ActivatedRoute,
    private router: Router,
    private SharedSubject: SharedSubjectService
  ) {
    this.SharedSubject.authGuardSubject.subscribe((res) => {
      this.isValid = res;
    });
  }

  /**
   *
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @return {*}  {(Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree)}
   * @memberof AuthGuard
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.isValid) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
