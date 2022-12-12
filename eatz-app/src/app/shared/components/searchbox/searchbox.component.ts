import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { commonConst } from '../../contants/common-constant';
import { RestaurantModel } from '../../models/app.model';

/**
 *
 *
 * @export
 * @class SearchboxComponent
 * @implements {OnChanges}
 */
@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss'],
})
export class SearchboxComponent implements OnChanges {
  @Input()
  suggestions: RestaurantModel['result'] = [];

  @Input()
  ipFiltertxt!: string;

  @Output()
  sendRestuarentName = new EventEmitter<string>();

  searchtext = '';
  isSelected = false;

  searchConst = commonConst;

  /**
   *
   *
   * @memberof SearchboxComponent
   */
  ngOnChanges() {
    this.searchtext = this.ipFiltertxt || '';
  }

  /**
   *
   *
   * @param {*} data
   * @memberof SearchboxComponent
   */
  onSelect(data: any) {
    this.searchtext = data?.name;
    this.isSelected = true;
  }

  /**
   *
   *
   * @memberof SearchboxComponent
   */
  onSubmit() {
    this.sendRestuarentName.emit(this.searchtext);
  }
}
