import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: 'root'
})
export class SharedSubjectService {

  filteredRestaurantSubject: Subject<string> = new Subject<string>();

  authGuardSubject: Subject<boolean> = new BehaviorSubject<boolean>(false);
  //isLoggedIn$ = this.authGuardSubject.asObservable();

  constructor() {
  }
}
