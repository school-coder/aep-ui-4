import {Component, Input, OnInit} from '@angular/core';
import {Hackathon} from '../../../../../model/hackathon.model';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {

  @Input() hackathon: Hackathon;

  constructor() { }

  ngOnInit() {
  }

}
