import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { RestaurantModel } from '../../models/app.model';

/**
 *
 *
 * @export
 * @class SharedSubjectService
 */
@Injectable({
  providedIn: 'root',
})
export class SharedSubjectService {
  filteredRestaurantSubject: Subject<string> = new Subject<string>();

  authGuardSubject: Subject<boolean> = new BehaviorSubject<boolean>(false);

  cartDetailsSubject: Subject<any> = new Subject<any>();

  restuarantDetailSubject: Subject<RestaurantModel['result']> = new Subject<
    RestaurantModel['result']
  >();

  constructor() {}
}
