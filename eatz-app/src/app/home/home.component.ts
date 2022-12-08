import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocationModel, RestaurantModel } from '../shared/models/app.model';
import { HttpService } from '../shared/services/http/http.service';
import { SharedSubjectService } from '../shared/services/shared-subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription !: Subscription;
  restuarantDetail : RestaurantModel["result"] = [];
  geoLocation !: LocationModel;
  userType !: string;

  constructor(
    private httpService: HttpService,
    private sharedSubject: SharedSubjectService,
    private router: Router,
    private activatedRoute: ActivatedRoute){

      this.activatedRoute.queryParams.subscribe(res => {
        this.userType = res['type'];
      })
    }

  ngOnInit(): void {
    this.getUserLocation();
    this.getRetuarantsDetails();
  }

  getUserLocation(): void {
    this.subscription = this.httpService.getGeoLocation().subscribe(obs => {
      this.geoLocation = obs;
    });
  }

  getRetuarantsDetails(): void {
    this.subscription = this.httpService.getRestaurantDetails().subscribe(obs => {
      this.restuarantDetail = obs.result;
    })
  }

  onReceiveRestaurantName(event: string) {
    this.router.navigate(['/restaurant'],
    {
      queryParams: {
        'type': this.userType,
        'filter': event
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
