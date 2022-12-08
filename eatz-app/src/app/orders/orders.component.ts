import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/envirtonment';
import { OrdersModel } from '../shared/models/app.model';
import { HttpService } from '../shared/services/http/http.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {

  subscription !: Subscription;

  ordersDetails !: OrdersModel['orders'];

  totalOrders !: number;

  imageURL = environment.imageURL;

  constructor(private httpService: HttpService){}

  ngOnInit(): void {
    this.getOrdersDetail();
  }

  getOrdersDetail(): void {
    this.subscription = this.httpService.getOrdersDetail().subscribe(res => {
      this.ordersDetails = res.orders;
      this.totalOrders = res.total_orders;
    })
  }

  onGetDateFormat(orderDate: string | Date): Date {
    return new Date(orderDate);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
