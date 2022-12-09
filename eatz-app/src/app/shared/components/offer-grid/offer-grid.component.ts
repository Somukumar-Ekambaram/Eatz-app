import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/envirtonment';
import { OfferModel } from '../../models/app.model';
import { HttpService } from '../../services/http/http.service';
import { SharedSubjectService } from '../../services/subjects/shared-subject.service';

/**
 *
 *
 * @export
 * @class OfferGridComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-offer-grid',
  templateUrl: './offer-grid.component.html',
  styleUrls: ['./offer-grid.component.scss'],
})
export class OfferGridComponent implements OnInit, OnDestroy {
  @Input()
  offers!: OfferModel['result'];

  @Output()
  sendCartDetails = new EventEmitter<OfferModel['result']>();

  subscription!: Subscription;

  urlpath!: any;

  imgUrl = environment.imageURL;

  /**
   * Creates an instance of OfferGridComponent.
   * @param {HttpService} httpService
   * @param {ActivatedRoute} activatedRoute
   * @param {SharedSubjectService} sharedSubject
   * @memberof OfferGridComponent
   */
  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private sharedSubject: SharedSubjectService
  ) {
    this.urlpath = this.activatedRoute.component?.name;
  }

  /**
   *
   *
   * @memberof OfferGridComponent
   */
  ngOnInit(): void {
    this.getOffersDetail();
  }

  /**
   *
   *
   * @memberof OfferGridComponent
   */
  getOffersDetail(): void {
    this.subscription = this.httpService.getOffersDetail().subscribe((res) => {
      this.offers = res?.result;
    });
  }

  /**
   *
   *
   * @param {*} data
   * @memberof OfferGridComponent
   */
  addToCart(data: any): void {
    this.sharedSubject.cartDetailsSubject.next(data);
  }

  /**
   *
   *
   * @memberof OfferGridComponent
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
