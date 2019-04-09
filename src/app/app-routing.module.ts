import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HackathonComponent} from './hackathon/hackathon.component';
import {BetaprogramsComponent} from './betaprograms/betaprograms.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'hackathon',
    component: HackathonComponent
  },
  {
    path: 'betaprograms',
    component: BetaprogramsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
