import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { PlayerStats } from '../player-stats.model';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css'],
  providers:[PlayerService]
})
export class PlayerStatsComponent implements OnInit {
  playerstats: PlayerStats[];
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.extractStatsAPI();
    this.playerstats = this.playerService.getPlayersStats();
  }

}
