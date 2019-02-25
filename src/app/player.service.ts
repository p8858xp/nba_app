import { Player } from './player.model';
import { PlayerStats } from './player-stats.model';

export class PlayerService{
    private players_bio: Player[] = [];
    private players_stats: PlayerStats[] = [];
    extractBIOAPI(){
        const NBA = require("nba");
        // get the entire roster of the LA LAKERS
        const lakersRosterObject = NBA.stats.commonTeamRoster({TeamID: '1610612747'}); // returns a Promise object
        lakersRosterObject.then((value) => { // used an arrow function to preserve the value of "this"
            let playerObj = value.commonTeamRoster;
            for(let i = 0; i < playerObj.length; i++){
                if (playerObj[i].player != 'Michael Beasley'){
                    let player = new Player(playerObj[i].player,playerObj[i].num,playerObj[i].age,playerObj[i].height,playerObj[i].weight,playerObj[i].position,playerObj[i].school);
                    this.players_bio.push(player);
                }
            }
        });
    }
    extractStatsAPI(){
        const NBA = require("nba");
        const lakersPlayersStats = NBA.stats.playerStats({ TeamID: '1610612747' });
        lakersPlayersStats.then((value) => {
            let playerStatObj = value.leagueDashPlayerStats;
            for(let i = 0; i < playerStatObj.length; i++){
                if (playerStatObj[i].teamAbbreviation == 'LAL' && playerStatObj[i].playerName != 'Michael Beasley'){
                    let playerstat = new PlayerStats(playerStatObj[i].playerName, playerStatObj[i].age, playerStatObj[i].pts, playerStatObj[i].ast, playerStatObj[i].blk, playerStatObj[i].dreb,playerStatObj[i].oreb,playerStatObj[i].stl, playerStatObj[i].fg3Pct, playerStatObj[i].fgPct, playerStatObj[i].ftPct, playerStatObj[i].plusMinus);
                    this.players_stats.push(playerstat);
                }
            }
        });
    }
    getPlayersBio(){
        return this.players_bio;
    }
    getPlayersStats(){
        return this.players_stats;
    }
}
