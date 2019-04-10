import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hackathon-create',
  templateUrl: './hackathon-create.component.html',
  styleUrls: ['./hackathon-create.component.scss']
})
export class HackathonCreateComponent implements OnInit {

  currentTab = 'basic-info';

  constructor() { }

  ngOnInit() {
  }

  select(tabName: string, event: Event) {
    event.preventDefault();
    this.currentTab = tabName;
  }

}
