import { Component, Input, OnChanges } from '@angular/core';
import { environment } from 'src/environments/envirtonment';
import { modalConst } from '../../contants/common-constant';
import { RestaurantModel } from '../../models/app.model';
import { SharedSubjectService } from '../../services/subjects/shared-subject.service';

/**
 *
 *
 * @export
 * @class ModalComponent
 */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  isShow = false;
  data!: RestaurantModel['result'] | any;

  isCoupenApplied = false;

  newPrice = 0;

  imgURL = environment.imageURL;

  modalConst = modalConst;

  /**
   * Creates an instance of ModalComponent.
   * @param {SharedSubjectService} sharedSubject
   * @memberof ModalComponent
   */
  constructor(private sharedSubject: SharedSubjectService) {
    this.sharedSubject.restuarantDetailSubject.subscribe((res) => {
      this.data = res;
      this.isShow = this.data ? true : false;
    });
  }

  /**
   *
   *
   * @memberof ModalComponent
   */
  applyCoupen() {
    let percent = this.data?.price?.discountInfo;
    let total = this.data?.price?.costForTwo;
    percent = Number.parseInt(percent.toString().slice(0, 2));
    this.newPrice = total - Math.floor((percent / 100) * total);
    this.isCoupenApplied = true;
  }

  /**
   *
   *
   * @memberof ModalComponent
   */
  close(): void {
    this.isShow = false;
    this.data = null;
    this.isCoupenApplied = false;
    this.newPrice = 0;
  }

  /**
   *
   *
   * @memberof ModalComponent
   */
  addToCart() {
    this.sharedSubject.cartDetailsSubject.next(this.data);
  }
}
