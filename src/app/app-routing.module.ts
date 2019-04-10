import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {HackathonComponent} from './components/pages/hackathon/hackathon.component';
import {BetaprogramsComponent} from './components/pages/betaprograms/betaprograms.component';
import {LoginComponent} from './components/pages/login/login.component';
import {RegisterComponent} from './components/pages/register/register.component';
import {HackathonListComponent} from './components/pages/hackathon/hackathon-list/hackathon-list.component';
import {HackathonCreateComponent} from './components/pages/hackathon/hackathon-create/hackathon-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'hackathons',
    component: HackathonComponent,
    children: [
      {path: '', component: HackathonListComponent},
      {path: 'create', component: HackathonCreateComponent}
    ]
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
