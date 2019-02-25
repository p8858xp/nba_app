import { Component, OnInit, Input } from '@angular/core';
import { PlayerStats } from 'src/app/player-stats.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  @Input() playerstat: PlayerStats;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
