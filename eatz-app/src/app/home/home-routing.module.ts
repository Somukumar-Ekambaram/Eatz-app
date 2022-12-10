import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from '../shared/guards/permission.guard';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent, canDeactivate: [PermissionGuard] }];
/**
 *
 *
 * @export
 * @class HomeRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
