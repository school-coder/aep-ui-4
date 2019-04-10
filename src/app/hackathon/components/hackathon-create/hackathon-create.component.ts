import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Hackathon} from '../../model/hackathon.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-hackathon-create',
  templateUrl: './hackathon-create.component.html',
  styleUrls: ['./hackathon-create.component.scss']
})
export class HackathonCreateComponent implements OnInit, OnChanges {

  currentTab = 'basic-info';


  hackathonForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.hackathonForm = new FormGroup({
      basicInfo: new FormGroup({
        banner: new FormControl('', [Validators.required]),
        name: new FormControl('default name'),
        summary: new FormControl('default summary'),
        description: new FormControl('default description')
      }),
      criteria: new FormGroup({
        eligibility: new FormControl('default eligibility'),
        requirements: new FormControl('default requirements'),
        judges: new FormControl('default judges'),
        judgingCriteria: new FormControl('default judges criteria')
      })
    });

    this.hackathonForm.valueChanges.subscribe(
      changes => {
        console.log(changes);
      }
    );
  }

  select(tabName: string, event: Event) {
    event.preventDefault();
    this.currentTab = tabName;
  }

  navigateToList() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes happened...');
  }


}
