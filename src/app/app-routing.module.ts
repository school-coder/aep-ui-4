import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {BetaprogramsComponent} from './components/pages/betaprograms/betaprograms.component';
import {LoginComponent} from './components/pages/login/login.component';
import {RegisterComponent} from './components/pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'betaprograms',
    component: BetaprogramsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
