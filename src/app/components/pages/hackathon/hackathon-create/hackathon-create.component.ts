import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-hackathon-create',
  templateUrl: './hackathon-create.component.html',
  styleUrls: ['./hackathon-create.component.scss']
})
export class HackathonCreateComponent implements OnInit {

  currentTab = 'basic-info';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  select(tabName: string, event: Event) {
    event.preventDefault();
    this.currentTab = tabName;
  }

  navigateToList() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
