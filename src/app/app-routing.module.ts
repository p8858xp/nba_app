import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { RostersComponent } from './rosters/rosters.component';
import { RosterListComponent } from './rosters/roster-list/roster-list.component';
import { PlayerComponent } from './rosters/roster-list/player/player.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'rosters', component: RostersComponent},
  {path: 'stats', component: PlayerStatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
