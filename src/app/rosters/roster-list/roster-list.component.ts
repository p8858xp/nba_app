import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/player.service';
import { Player } from 'src/app/player.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roster-list',
  templateUrl: './roster-list.component.html',
  styleUrls: ['./roster-list.component.css'],
  providers: [PlayerService]
})
export class RosterListComponent implements OnInit {
  players: Player[];
  constructor(private playerService: PlayerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.playerService.extractBIOAPI();
    this.players = this.playerService.getPlayersBio();
    //this.router.navigate(['list'], {relativeTo: this.route})
  }
  onSearch(){
    //this.players = [];
  }
}