import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http/http.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { OfferGridComponent } from './components/offer-grid/offer-grid.component';
import { PermissionGuard } from './guards/permission.guard';
import { ModalComponent } from './components/modal/modal.component';

/**
 *
 *
 * @export
 * @class SharedModule
 */
@NgModule({
  declarations: [
    NavbarComponent,
    SearchboxComponent,
    FilterPipe,
    PageNotFoundComponent,
    OfferGridComponent,
    ModalComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  exports: [
    FormsModule,
    HttpClientModule,
    NavbarComponent,
    SearchboxComponent,
    FilterPipe,
    OfferGridComponent,
    ModalComponent,
  ],
  providers: [HttpService, AuthGuard, PermissionGuard],
})
export class SharedModule {}
