import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './components/create.component';

const routes: Routes = [
  { path: '', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [CreateComponent],
  providers: []
})
export class CreateModule { }
