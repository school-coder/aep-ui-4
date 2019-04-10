import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Hackathon} from '../../../../model/hackathon.model';

@Component({
  selector: 'app-hackathon-create',
  templateUrl: './hackathon-create.component.html',
  styleUrls: ['./hackathon-create.component.scss']
})
export class HackathonCreateComponent implements OnInit, OnChanges {

  currentTab = 'basic-info';
  hackathon: Hackathon = new Hackathon();

  hackathonJson = '';

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

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.hackathon.banner + ' test');
    this.hackathonJson = JSON.stringify(this.hackathon);
  }
}
