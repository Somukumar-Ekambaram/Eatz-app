import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from '../shared/guards/permission.guard';
import { OffersComponent } from './offers.component';

const routes: Routes = [{ path: '', component: OffersComponent, canDeactivate:[PermissionGuard] }];

/**
 *
 *
 * @export
 * @class OffersRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersRoutingModule {}
