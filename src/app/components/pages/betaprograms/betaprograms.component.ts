import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-betaprograms',
  templateUrl: './betaprograms.component.html',
  styleUrls: ['./betaprograms.component.scss']
})
export class BetaprogramsComponent implements OnInit {

  constructor(private store: Store<{auth: {logged_user: string}}>) { }

  private loggedUser: Observable<any>;

  ngOnInit() {
    this.loggedUser = this.store.select('auth');
  }

}
