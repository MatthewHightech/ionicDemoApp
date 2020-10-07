import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PeopleInputComponent } from './people/people-input.component';
import { PeopleComponent } from './people/people.component'
const routes: Routes = [
  {
    path: 'people', 
    component: PeopleComponent 
  }, 
  {
    path: 'peopleInput', 
    component: PeopleInputComponent
  }, 
  {
    path: '',
    redirectTo: 'people',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
