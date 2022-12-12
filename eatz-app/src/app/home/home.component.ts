import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { homeConst } from '../shared/contants/common-constant';
import {
  IDeActivateComponent,
  LocationModel,
  RestaurantModel,
} from '../shared/models/app.model';
import { HttpService } from '../shared/services/http/http.service';
import { SharedSubjectService } from '../shared/services/subjects/shared-subject.service';

/**
 *
 *
 * @export
 * @class HomeComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 * @implements {IDeActivateComponent}
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy, IDeActivateComponent {
  subscription!: Subscription;
  restuarantDetail: RestaurantModel['result'] = [];
  geoLocation!: LocationModel;
  userType!: string;

  homeConst = homeConst;
  /**
   * Creates an instance of HomeComponent.
   * @param {HttpService} httpService
   * @param {SharedSubjectService} sharedSubject
   * @param {Router} router
   * @param {ActivatedRoute} activatedRoute
   * @memberof HomeComponent
   */
  constructor(
    private httpService: HttpService,
    private sharedSubject: SharedSubjectService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.userType = res['type'];
    });
  }

  /**
   *
   *
   * @return {*}  {(boolean | Promise<boolean> | Observable<boolean>)}
   * @memberof HomeComponent
   */
  public canExit(): boolean | Promise<boolean> | Observable<boolean> {
    if (confirm('Do you wish to Please confirm')) {
      return true;
    }

    return false;
  }

  /**
   * Life cycle methods calls when component instatiated.
   *
   * @memberof HomeComponent
   */
  ngOnInit(): void {
    this.getUserLocation();
    this.getRetuarantsDetails();
  }

  /**
   * Get user current location
   *
   * @memberof HomeComponent
   */
  getUserLocation(): void {
    this.subscription = this.httpService.getGeoLocation().subscribe((obs) => {
      this.geoLocation = obs;
    });
  }

  /**
   *  Get Restaurant details
   *
   * @memberof HomeComponent
   */
  getRetuarantsDetails(): void {
    this.subscription = this.httpService
      .getRestaurantDetails()
      .subscribe((obs) => {
        this.restuarantDetail = obs.result;
      });
  }

  /**
   * Receive restaurant name from child component
   *
   * @param {string} event
   * @memberof HomeComponent
   */
  onReceiveRestaurantName(event: string) {
    this.router.navigate(['/restaurant'], {
      queryParams: {
        type: this.userType,
        filter: event,
      },
    });
  }

  /**
   * Life cycle method calls when component destroyed.
   *
   * @memberof HomeComponent
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
