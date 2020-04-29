import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component.component';

import { TestComponentRoutingModule } from './test-component-routing.module';

@NgModule({
  declarations: [TestComponentComponent],
  imports: [
    CommonModule,
    TestComponentRoutingModule
  ]
})
export class TestComponentModule { }
