interface SoccerPlayer  {
    name:string;
    age:number;
    position:string;
    isActive:boolean;
    team:Team
};
interface Team {
    name:string;
    originYear:number;
    league:string;
};
const soccerPlayer: SoccerPlayer = {
    name: "Luca Modric",
    age: 30,
    position: "MP",
    isActive: true,
    team: {
        name: "Real Madrid",
        originYear: 1860,
        league: "BBV"
    }
}

const [, ,tercerElemento, theOtherCase='Equipo sin nombre']:string[] = ['Liga', 'Barcelona SC','Quito S.D.'];

console.error(theOtherCase);
// const {name:nombreDos , team} = soccerPlayer;
// const {name:nombreEquipo} = team;
// console.log({nombreDos,nombreEquipo});

export{};