import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HackathonRoutingModule } from './hackathon-routing.module';
import {HackathonListComponent} from './components/hackathon-list/hackathon-list.component';
import {HackathonCreateComponent} from './components/hackathon-create/hackathon-create.component';
import {BasicInfoComponent} from './components/hackathon-create/basic-info/basic-info.component';
import {CriteriaComponent} from './components/hackathon-create/criteria/criteria.component';
import {PlannedDatesComponent} from './components/hackathon-create/planned-dates/planned-dates.component';
import {HackathonComponent} from './components/hackathon.component';
import {TitlebarComponent} from '../components/widgets/titlebar/titlebar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HackathonComponent,
    HackathonListComponent,
    HackathonCreateComponent,
    BasicInfoComponent,
    CriteriaComponent,
    PlannedDatesComponent,
    TitlebarComponent
  ],
  imports: [
    CommonModule,
    HackathonRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HackathonModule { }
