import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { pnfConst } from '../../contants/common-constant';

/**
 *
 *
 * @export
 * @class PageNotFoundComponent
 */
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {

  pnfConst = pnfConst;

  /**
   * Creates an instance of PageNotFoundComponent.
   * @param {Router} router
   * @memberof PageNotFoundComponent
   */
  constructor(private router: Router) {}
  /**
   *
   *
   * @memberof PageNotFoundComponent
   */
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
