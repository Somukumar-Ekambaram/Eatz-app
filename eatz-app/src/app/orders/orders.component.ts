import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/envirtonment';
import { IDeActivateComponent, OrdersModel } from '../shared/models/app.model';
import { HttpService } from '../shared/services/http/http.service';

/**
 *
 *
 * @export
 * @class OrdersComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 * @implements {IDeActivateComponent}
 */
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent
  implements OnInit, OnDestroy, IDeActivateComponent
{
  subscription!: Subscription;

  ordersDetails!: OrdersModel['orders'];

  totalOrders!: number;

  isClickSeeMoreBtn = true;

  imageURL = environment.imageURL;

  /**
   * Creates an instance of OrdersComponent.
   * @param {HttpService} httpService
   * @memberof OrdersComponent
   */
  constructor(private httpService: HttpService) {}

  /**
   * Life Cycle Method calls when component instantiated.
   *
   * @memberof OrdersComponent
   */
  ngOnInit(): void {
    this.getOrdersDetail();
  }

  /**
   * Get orders details
   *
   * @memberof OrdersComponent
   */
  getOrdersDetail(): void {
    this.subscription = this.httpService.getOrdersDetail().subscribe((res) => {
      this.ordersDetails = res.orders;
      this.totalOrders = res.total_orders;
    });
  }

  /**
   *
   *
   * @param {(string | Date)} orderDate
   * @return {*}  {Date}
   * @memberof OrdersComponent
   */
  onGetDateFormat(orderDate: string | Date): Date {
    return new Date(orderDate);
  }

  /**
   *
   *
   * @memberof OrdersComponent
   */
  onViewMoreOrders(): void {
    this.isClickSeeMoreBtn = !this.isClickSeeMoreBtn;
  }

  /**
   *
   *
   * @return {*}  {(boolean | Observable<boolean> | Promise<boolean>)}
   * @memberof OrdersComponent
   */
  canExit(): boolean | Observable<boolean> | Promise<boolean> {
    if (confirm('Do you wish to Please confirm')) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Life cycle method calls when component destroyed.
   *
   * @memberof OrdersComponent
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
