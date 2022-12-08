import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/envirtonment';
import { OfferModel } from '../../models/app.model';
import { HttpService } from '../../services/http/http.service';

@Component({
  selector: 'app-offer-grid',
  templateUrl: './offer-grid.component.html',
  styleUrls: ['./offer-grid.component.scss']
})
export class OfferGridComponent implements OnInit, OnDestroy{

  @Input()
  offers !: OfferModel["result"];

  subscription !: Subscription;

  urlpath !: any;

  imgUrl = environment.imageURL;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute){
    this.urlpath = this.activatedRoute.component?.name;
    console.log(this.urlpath);
  }

  ngOnInit(): void {
    this.getOffersDetail();
  }

  getOffersDetail(): void {

    this.subscription = this.httpService.getOffersDetail().subscribe(res => {
      this.offers = res?.result;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
