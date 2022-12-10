import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from '../shared/guards/permission.guard';
import { RestaurantComponent } from './restaurant.component';

const routes: Routes = [{ path: '', component: RestaurantComponent, canDeactivate: [PermissionGuard] }];

/**
 *
 *
 * @export
 * @class RestaurantRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
