import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';
import { RegisterPageComponent } from '../auth/pages/register-page/register-page.component';


@NgModule({
  declarations: [
    DynamicPageComponent,
    SwitchesPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
