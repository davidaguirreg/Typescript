
export interface SoccerTeam{
    name:string;
    soccerPlayers?:string[];
}

const realMadrid:SoccerTeam = {
    name: "Real Madrid"
}
const valladolid:SoccerTeam = {
    name: "Real Madrid",
    soccerPlayers:['Plata','Meza','Cize']
}

const printAmountOfPlayers = (soccerTeam:SoccerTeam)=>{
    const soccerPlayers = soccerTeam.soccerPlayers!.length;
    console.log("Players in team:", soccerPlayers);
}

printAmountOfPlayers(realMadrid);