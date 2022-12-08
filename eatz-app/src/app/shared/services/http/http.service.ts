import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/envirtonment';
import { LocationModel, RestaurantModel, OfferModel, OrdersModel } from '../../models/app.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly locationURL = environment.location_api;

  private readonly restaurantURL = environment.restaurent_api;

  private readonly offerURL = environment.offers_api;

  private readonly ordersURL = environment.orders_api;


  constructor(private httpClient: HttpClient) { }

  getGeoLocation(): Observable<LocationModel> {

    return this.httpClient.get<LocationModel>(this.locationURL) as Observable<LocationModel>;
  }

  getRestaurantDetails(): Observable<RestaurantModel> {

    return this.httpClient.get<RestaurantModel>(this.restaurantURL) as Observable<RestaurantModel>;
  }

  getOffersDetail(): Observable<OfferModel> {

    return this.httpClient.get<OfferModel>(this.offerURL) as Observable<OfferModel>;
  }

  getOrdersDetail(): Observable<OrdersModel> {

    return this.httpClient.get<OrdersModel>(this.ordersURL) as Observable<OrdersModel>
  }
}
