import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import { SharedModule } from '../shared/shared.module';

/**
 *
 *
 * @export
 * @class OffersModule
 */
@NgModule({
  declarations: [OffersComponent],
  imports: [CommonModule, OffersRoutingModule, SharedModule],
})
export class OffersModule {}
