import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { HackathonComponent } from './components/pages/hackathon/hackathon.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BetaprogramsComponent } from './components/pages/betaprograms/betaprograms.component';
import { TitlebarComponent } from './components/widgets/titlebar/titlebar.component';
import { LoginService } from './services/login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { HackathonListComponent } from './components/pages/hackathon/hackathon-list/hackathon-list.component';
import { HackathonCreateComponent } from './components/pages/hackathon/hackathon-create/hackathon-create.component';
import { BasicInfoComponent } from './components/pages/hackathon/hackathon-create/basic-info/basic-info.component';
import { CriteriaComponent } from './components/pages/hackathon/hackathon-create/criteria/criteria.component';
import { PlannedDatesComponent } from './components/pages/hackathon/hackathon-create/planned-dates/planned-dates.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HackathonComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BetaprogramsComponent,
    TitlebarComponent,
    HackathonListComponent,
    HackathonCreateComponent,
    BasicInfoComponent,
    CriteriaComponent,
    PlannedDatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
