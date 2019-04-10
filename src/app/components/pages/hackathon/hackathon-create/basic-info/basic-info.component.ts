import {Component, Input, OnInit} from '@angular/core';
import {Hackathon} from '../../../../../model/hackathon.model';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  @Input() hackathonForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
