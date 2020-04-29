import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouteRoutingModule } from './route-routing.module';

import { ThemeModule } from 'src/app/theme.module';


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    RouteRoutingModule,
    ThemeModule
  ],
  exports: [RouteRoutingModule]
})
export class RoutesModule { }