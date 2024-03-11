const teamName = document.getElementById('team')
const typeOfSport = document.getElementById('sport')
const worldCupYear = document.getElementById('year')
const headCoach = document.getElementById('head-coach')
const playerCards = document.getElementById('player-cards')
const playersDropdownList = document.getElementById('players')

const myFavoriteFootballTeam = {
    team: 'Argentina',
    sport: 'Football',
    year: 1986,
    isWorldCupWinner: true,
    headCoach: {
        coachName: 'Carlos Bilardo',
        matches: 7
    },
    players: [
        {
            name: "Sergio Almirón",
            position: "forward",
            number: 1,
            isCaptain: false,
            nickname: null
        },
        {
            name: "Sergio Batista",
            position: "midfielder",
            number: 2,
            isCaptain: false,
            nickname: null
        }
    ]
}

Object.freeze(myFavoriteFootballTeam)
const {sport, team, year, players, headCoach} = myFavoriteFootballTeam
const {coachName} = myFavoriteFootballTeam.headCoach
typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
    playerCards.innerHTML += arr.map(({name, position, number, isCaptain, nickname}) => {
        `<div class="player-card">
<h2>${name}${isCaptain ? "(Captain)" : ""}</h2>
<p>Position:${position}</p>
<p>Number:${number}</p>
<p>Nickname:${nickname !==null ? nickname : "N/A"}</p>
         </div>`
    }).join('')
}

playersDropdownList.addEventListener('change',(e)=>{
   playerCards.innerHTML=``
    switch (e.target.value) {
        case 'nickname':
            setPlayerCards(players.filter((player) => player.nickname !== null));
            break;
        case 'forward':
            setPlayerCards(players.filter((player) => player.position === "forward"));
            break;
        case 'midfielder':
            setPlayerCards(players.filter((player) => player.position === "midfielder"));
            break;
        case 'defender':
            setPlayerCards(players.filter((player) => player.position === "defender"));
            break;
    }
})

