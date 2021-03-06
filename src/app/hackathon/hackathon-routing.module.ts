import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HackathonListComponent} from './components/hackathon-list/hackathon-list.component';
import {HackathonCreateComponent} from './components/hackathon-create/hackathon-create.component';

const routes: Routes = [
  {path: '', component: HackathonListComponent},
  {path: 'create', component: HackathonCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HackathonRoutingModule { }
