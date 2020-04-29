import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponentComponent } from './test-component.component'

const routes: Routes = [{
  path: '',
  component: TestComponentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TestComponentRoutingModule { }
