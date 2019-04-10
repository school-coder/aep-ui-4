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
    HackathonCreateComponent
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
