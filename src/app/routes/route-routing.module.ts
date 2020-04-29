import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from "src/app/layout/default/default.component";

import { RouteConfig } from "src/app/core/config/route.config";



const defaultPath = RouteConfig.test.path;

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { 
        path: defaultPath, 
        loadChildren: 'src/app/views/test-component/test-component.module#TestComponentModule',
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true
  })],
  providers: [],
  exports: [RouterModule]
})

export class RouteRoutingModule { }
