import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from 'src/app/theme.module';
import { FormsModule  } from '@angular/forms'

import { DialogComponent } from './components/dialog/dialog.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SelectComponent } from './components/select/select.component';
import { RadioComponent } from './components/radio/radio.component';
import { ToastComponent } from './components/toast/toast.component';


@NgModule({
  declarations: [DialogComponent, PaginationComponent, SelectComponent, RadioComponent, ToastComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule
  ],
  exports: [DialogComponent, PaginationComponent, SelectComponent, RadioComponent, ToastComponent ]
})
export class SharedModule { }
