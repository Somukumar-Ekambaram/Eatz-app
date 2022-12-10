import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { HomeComponent } from 'src/app/home/home.component';
import { OffersComponent } from 'src/app/offers/offers.component';
import { OrdersComponent } from 'src/app/orders/orders.component';
import { RestaurantComponent } from 'src/app/restaurant/restaurant.component';
import { IDeActivateComponent } from '../models/app.model';
import { SharedSubjectService } from '../services/subjects/shared-subject.service';

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

  isLoggedOut !: boolean;

  /**
   * Creates an instance of PermissionGuard.
   * @param {Router} router
   * @memberof PermissionGuard
   */
  constructor(private router: Router, private sharedSubject: SharedSubjectService) {
    this.sharedSubject.authGuardSubject.subscribe(res => {
      this.isLoggedOut = res;
    })
  }

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
    return !this.isLoggedOut ? component.canExit ? component.canExit() : false : true;
  }
}
