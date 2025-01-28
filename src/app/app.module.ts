import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { BasicPageComponent } from './reactive/pages/basic-page/basic-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicPageComponent,
    BasicPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
