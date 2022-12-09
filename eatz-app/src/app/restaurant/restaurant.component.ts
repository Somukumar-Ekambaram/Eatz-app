import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/envirtonment';
import {
  IDeActivateComponent,
  RestaurantModel,
} from '../shared/models/app.model';
import { HttpService } from '../shared/services/http/http.service';
import { SharedSubjectService } from '../shared/services/subjects/shared-subject.service';

/**
 *
 *
 * @export
 * @class RestaurantComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 * @implements {IDeActivateComponent}
 */
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent
  implements OnInit, OnDestroy, IDeActivateComponent
{
  subscription!: Subscription;

  restaurants!: RestaurantModel['result'];

  imgUrl = environment.imageURL;

  filteredText!: string;

  /**
   * Creates an instance of RestaurantComponent.
   * @param {HttpService} httpService
   * @param {ActivatedRoute} activatedRoute
   * @param {SharedSubjectService} sharedSubject
   * @memberof RestaurantComponent
   */
  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private sharedSubject: SharedSubjectService
  ) {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.filteredText = res['filter'] ? res['filter'] : '';
    });
  }

  /**
   *
   *
   * @memberof RestaurantComponent
   */
  ngOnInit(): void {
    this.getRestaurentDetail();
  }

  /**
   *
   *
   * @memberof RestaurantComponent
   */
  getRestaurentDetail(): void {
    this.subscription = this.httpService
      .getRestaurantDetails()
      .subscribe((res) => {
        this.restaurants = res.result;
        this.restaurants = this.restaurants.map((obj) => ({
          ...obj,
          rating: this.onGenerateRataing(),
        }));
      });
  }

  /**
   *
   *
   * @param {string} event
   * @memberof RestaurantComponent
   */
  getRestaurantsName(event: string) {
    this.filteredText = event;
  }

  /**
   *
   *
   * @memberof RestaurantComponent
   */
  onViewAll() {
    this.filteredText = '';
  }

  /**
   *
   *
   * @return {*}  {string}
   * @memberof RestaurantComponent
   */
  onGenerateRataing(): string {
    let num = Math.random() * 5 + 1;
    let str = num.toString().slice(0, 3);
    return 'Rating: ' + str;
  }

  /**
   *
   *
   * @return {*}  {(boolean | Observable<boolean> | Promise<boolean>)}
   * @memberof RestaurantComponent
   */
  canExit(): boolean | Observable<boolean> | Promise<boolean> {
    if (confirm('Do you wish to Please confirm')) {
      return true;
    } else {
      return false;
    }
  }

  /**
   *
   *
   * @param {RestaurantModel['result']} data
   * @memberof RestaurantComponent
   */
  onViewData(data: RestaurantModel['result']) {
    this.sharedSubject.restuarantDetailSubject.next(data);
  }

  /**
   *
   *
   * @memberof RestaurantComponent
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
