import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-hackathon-list',
  templateUrl: './hackathon-list.component.html',
  styleUrls: ['./hackathon-list.component.scss']
})
export class HackathonListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  hackathons = [
    {
      banner: 'assets/images/hack1.png',
      name: 'Hack Fest 2019',
      description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    },
    {
      banner: 'assets/images/hack1.png',
      name: 'Hack Fest 2019',
      description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    },
    {
      banner: 'assets/images/hack1.png',
      name: 'Hack Fest 2019',
      description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    }
  ];

  ngOnInit() {
  }

  navigateToCreate() {
    this.router.navigate(['create'], {relativeTo: this.route});
  }
}
