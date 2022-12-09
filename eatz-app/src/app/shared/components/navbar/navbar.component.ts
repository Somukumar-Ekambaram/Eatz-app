import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferModel } from '../../models/app.model';
import { SharedSubjectService } from '../../services/subjects/shared-subject.service';

/**
 *
 *
 * @export
 * @class NavbarComponent
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isUser!: boolean;
  type!: string;
  isCartClicked = false;
  cartCount: number = 0;
  cartDetails: OfferModel['result'] = [];

  /**
   * Creates an instance of NavbarComponent.
   * @param {ActivatedRoute} activatedRoute
   * @param {SharedSubjectService} sharedSubject
   * @param {Router} router
   * @memberof NavbarComponent
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private sharedSubject: SharedSubjectService,
    private router: Router
  ) {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.isUser = res['type'] == 'user' ? true : false;
      this.type = res['type'];
    });

    this.sharedSubject.cartDetailsSubject.subscribe({
      next: (res) => {
        this.cartDetails.push(res);
        this.cartCount = this.cartDetails.length;
      },
    });
  }

  /**
   *
   *
   * @memberof NavbarComponent
   */
  onViewCart() {
    this.isCartClicked = !this.isCartClicked;
  }

  /**
   *
   *
   * @memberof NavbarComponent
   */
  onLogout() {
    this.cartDetails = [];
    this.cartCount = this.cartDetails.length;
    this.router.navigate(['/login']);
  }

  /**
   *
   *
   * @return {*}  {boolean}
   * @memberof NavbarComponent
   */
  canExit(): boolean {
    if (confirm('Do you wanna confirm to exit?')) {
      return true;
    } else {
      return false;
    }
  }
}
