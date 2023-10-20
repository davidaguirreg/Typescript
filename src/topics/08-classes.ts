export class SoccerPlayer{
    // public name:string;
    // private performanceMetric:number;
    
    constructor(
        public name:string = 'No name',
        private performanceMetric:number = 0
    ){ }


}

// export class MiddleForward extends SoccerPlayer{
//     constructor(
//         public performancePasses:number,
//         public ballsRecovered:number
//     ){
//         super('Pedro Dybala', 50);
//     }
// }
export class MiddleForward {
    // public soccerPlayer:SoccerPlayer;
    constructor(
        public performancePasses:number,
        public ballsRecovered:number,
        public soccerPlayer:SoccerPlayer
    ){
        // this.soccerPlayer = new SoccerPlayer('Diego Maradona',60);

    }
}
const soccerPlayer = new SoccerPlayer('Diego Maradona', 89)
const madridPlayer = new MiddleForward(15,10,soccerPlayer);
console.log(madridPlayer);