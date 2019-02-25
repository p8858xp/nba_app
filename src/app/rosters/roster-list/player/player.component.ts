import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
