import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/pages/login/login.component';
import {RegisterComponent} from './components/pages/register/register.component';
import {HeaderComponent} from './components/core/header/header.component';
import {FooterComponent} from './components/core/footer/footer.component';
import {HomeComponent} from './components/pages/home/home.component';
import {BetaprogramsComponent} from './components/pages/betaprograms/betaprograms.component';
import {LoginService} from './services/login/login.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BetaprogramsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
