import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { RestaurantModel } from '../../models/app.model';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnChanges {

  @Input()
  suggestions : RestaurantModel["result"] = [];

  @Input()
  ipFiltertxt !: string;

  @Output()
  sendRestuarentName = new EventEmitter<string>();

  searchtext = '';
  isSelected = false;

  ngOnChanges() {
    this.searchtext = this.ipFiltertxt || '';
  }


  onSelect(data: any) {
    this.searchtext = data?.name;
    this.isSelected = true;
  }

  onSubmit() {
    this.sendRestuarentName.emit(this.searchtext);
  }
}
