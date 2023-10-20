function increaseOne(a:number ,b:number ){
    return a+b+1;
}

const increaseTwo = ( a:number, b:number )=>{
    return a+b+2;
}

function increaseThreeOrX(a:number,b?:number ,c:number=1){
    return a+c;
}

function increaseButReturnString(a:number, b?:number, c:number = 1 ) : string {
    return `${a+c}`
}
// const oneElse = increaseOne(2,1);
// const twoElse = increaseTwo(2,1);
// const threeElse = increaseThreeOrX(5);
// const increaseToString = increaseButReturnString(3);
//console.log({oneElse, twoElse, threeElse, increaseToString});

interface SoccerPlayer {
    name: string;
    position: string;
    shotScore: number;
    showShotScore: () => void;
}

const soccerPlayer:SoccerPlayer = {
    name: 'David Aguirre',
    position: 'MP',
    shotScore: 50,
    showShotScore() {
        console.log({name:soccerPlayer.name, shotScore:soccerPlayer.shotScore});
    },
}
function addShotScore(soccerPlayer:SoccerPlayer,increasingScore:number){
    soccerPlayer.shotScore+=increasingScore;
}

addShotScore(soccerPlayer, 2);
soccerPlayer.showShotScore();
addShotScore(soccerPlayer,10);
soccerPlayer.showShotScore();
export{};