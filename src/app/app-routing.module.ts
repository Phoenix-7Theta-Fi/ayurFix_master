import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from './features/dashboard/dasboard/dasboard.component';
import { ApplicationStatusComponent } from './features/application-status/application-status/application-status.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route
  { path: 'dashboard', component: DasboardComponent }, // Dashboard route
  {path :'application-status',component:ApplicationStatusComponent}
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
