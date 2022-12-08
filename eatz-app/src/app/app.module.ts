import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedSubjectService } from './shared/services/shared-subject.service';
import { SharedModule } from './shared/shared.module';

/**
 * @description This is a root module of this application.
 *
 * @export
 * @class AppModule
 */
@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [SharedSubjectService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule.forRoot(),
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule { }
