import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../shared/models/app.model';
import { SharedSubjectService } from '../shared/services/subjects/shared-subject.service';

/**
 *
 *
 * @export
 * @class LoginComponent
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private guestUser: UserModel = {
    username: 'Guest User',
    password: 'Guest'
  }

  /**
  * Creates an instance of LoginComponent.
  * @param {Router} router
  * @memberof LoginComponent
  */
  constructor(private router: Router, private sharedSubject: SharedSubjectService) {

  }

  /**
  * This method performs for login authentication
  *
  * @param {NgForm} loginForm
  * @param {string} [userType]
  * @memberof LoginComponent
  */
  onSubmit(loginForm: NgForm, userType?: string) {

    let formValue: UserModel = userType === 'user' ? loginForm.value : this.guestUser;

    localStorage.clear();
    localStorage.setItem('username', formValue.username);
    localStorage.setItem('password', formValue.password);
    this.sharedSubject.authGuardSubject.next(true);
    this.router.navigate(
      ["/home"],
      {
        queryParams: {
          'type': userType
        }
      }
    );
  }
}
