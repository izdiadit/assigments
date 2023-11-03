import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  leaders!: Leader[];
  selectedLeaders!: Leader;
  constructor(
    private leaderService: LeaderService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.leaders = this.leaderService.getLeaders();
  }
  onSelect(leader: Leader) {
    this.selectedLeaders = leader;
  }
}
