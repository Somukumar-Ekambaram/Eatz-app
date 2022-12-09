import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule { }
