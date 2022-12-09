import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IDeActivateComponent } from '../models/app.model';

/**
 *
 *
 * @export
 * @class PermissionGuard
 * @implements {CanDeactivate<IDeActivateComponent>}
 */
@Injectable({
  providedIn: 'root',
})
export class PermissionGuard implements CanDeactivate<IDeActivateComponent> {
  /**
   * Creates an instance of PermissionGuard.
   * @param {Router} router
   * @memberof PermissionGuard
   */
  constructor(private router: Router) {}

  /**
   *
   *
   * @param {IDeActivateComponent} component
   * @param {ActivatedRouteSnapshot} currentRoute
   * @param {RouterStateSnapshot} currentState
   * @param {RouterStateSnapshot} nextState
   * @return {*}  {(boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>)}
   * @memberof PermissionGuard
   */
  canDeactivate(
    component: IDeActivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.isValid(component);
  }

  /**
   *
   *
   * @param {IDeActivateComponent} component
   * @return {*}  {(boolean | Observable<boolean> | Promise<boolean>)}
   * @memberof PermissionGuard
   */
  isValid(
    component: IDeActivateComponent
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (component.canExit()) {
      this.router.navigate(['/login']);
      return component.canExit();
    } else {
      return true;
    }
  }
}
