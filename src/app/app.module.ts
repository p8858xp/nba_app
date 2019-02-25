import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { PlayerStatsComponent } from './player-stats/player-stats.component';

import { RosterListComponent } from './rosters/roster-list/roster-list.component';
import { PlayerComponent } from './rosters/roster-list/player/player.component';
import { RostersComponent } from './rosters/rosters.component';
import { StatsComponent } from './player-stats/stats/stats.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RosterListComponent,
    PlayerStatsComponent,
    PlayerComponent,
    RostersComponent,
    StatsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
