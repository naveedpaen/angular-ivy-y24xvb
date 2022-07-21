import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
 
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
 
const routes: Routes = [
 
  {
    path: 'parent', 
    component: ParentComponent,
  },
  {
    path: 'child', 
    component: ChildComponent,
  }
  // ,
  // {
  //   path: '**',
  //   redirectTo: 'cars/bmw', // Default URL for showcase purposes
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }