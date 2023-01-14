export default function sorting(players) {
  const key = 'health';
  return players.sort((player1, player2) => player2[key] - player1[key]);
}


// players = [
//   { name: 'маг', health: 25 },
//   { name: 'лучник', health: 1 },
//   { name: 'мечник', health: 101 },
// ];

// console.log(players);
// sorting([players]);
