import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IDeActivateComponent } from '../shared/models/app.model';

/**
 *
 *
 * @export
 * @class OffersComponent
 * @implements {IDeActivateComponent}
 */
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements IDeActivateComponent {
  canExit(): boolean | Observable<boolean> | Promise<boolean> {
    if (confirm('Do you wish to Please confirm')) {
      return true;
    }
    return false;
  }
}
