export class PlayerStats{
    public name: string;
    public age: number;
    public pts: number;
    public ast: number; //assists per game
    public blk: number; //blocks per game
    public dreb: number; //defensive rebounds per game
    public oreb: number; //offensive rebounds per game
    public stl: number; //steals per game
    public fg3Pct: number; //3pointer fg percentage
    public fgPct: number; //general fg percentage
    public ftPct: number; //freethrow percentage
    public plusMinus: number; 


    constructor(name: string, age: number, pts: number, ast: number, blk: number, dreb: number, oreb: number, stl: number, fg3Pct: number, fgPct: number, ftPct: number, plusMinus: number){
        this.name = name;
        this.age = age;
        this.pts = pts;
        this.ast = ast;
        this.blk = blk;
        this.dreb = dreb;
        this.oreb = oreb;
        this.stl = stl;
        this.fg3Pct = fg3Pct;
        this.fgPct = fgPct;
        this.ftPct = ftPct;
        this.plusMinus = plusMinus;
    }
}