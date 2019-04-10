import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material';



@Component({
  selector: 'app-planned-dates',
  templateUrl: './planned-dates.component.html',
  styleUrls: ['./planned-dates.component.scss'],
  providers: [MatDatepickerModule]
})
export class PlannedDatesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
