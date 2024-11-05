import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from './features/dashboard/dasboard/dasboard.component';
import { ApplicationStatusComponent } from './features/application-status/application-status/application-status.component';
import { LoginComponent } from './features/auth/login/login.component';
import { SignUpComponent } from './features/auth/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DasboardComponent }, // Dashboard route
  {path :'application-status',component:ApplicationStatusComponent},
  { path: 'sign-up', component: SignUpComponent }

 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
