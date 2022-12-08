import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/envirtonment';
import { RestaurantModel } from '../shared/models/app.model';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { HttpService } from '../shared/services/http/http.service';
import { SharedSubjectService } from '../shared/services/shared-subject.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit, OnDestroy {

  subscription !: Subscription;

  restaurants !: RestaurantModel["result"];
  //tempRestaurantDetail !: RestaurantModel["result"];

  imgUrl = environment.imageURL;

  filteredText !: string;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute){
    this.activatedRoute.queryParams.subscribe(res => {
      this.filteredText = res['filter'] ? res['filter'] : '';
    });
  }

  ngOnInit(): void {
    this.getRestaurentDetail();
  }

  getRestaurentDetail(): void {

    this.subscription = this.httpService.getRestaurantDetails().subscribe(res => {
      this.restaurants = res.result;
    });
  }

  getRestaurantsName(event: string) {
    this.filteredText = event;
  }

  onViewAll() {
    this.filteredText = '';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
