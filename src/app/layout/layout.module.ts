import { NgModule  } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ThemeModule } from 'src/app/theme.module';

import { DefaultComponent } from './default/default.component';
import { SideNavComponent } from './default/side-nav/side-nav.component';
import { BreadcrumbsComponent } from './default/breadcrumbs/breadcrumbs.component';

const LAYOUT_COMPONENT = [
  DefaultComponent,
];

const COMPONENT = [
  SideNavComponent,  
  BreadcrumbsComponent
];

@NgModule({
  declarations: [
    ...LAYOUT_COMPONENT,
    ...COMPONENT
  ],
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule,
    RouterModule
  ]
})
export class LayoutModule { }
