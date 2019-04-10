import {Component, Input, OnInit} from '@angular/core';
import {Hackathon} from '../../../../../model/hackathon.model';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  @Input() hackathon: Hackathon;

  constructor() { }

  ngOnInit() {
  }

}
