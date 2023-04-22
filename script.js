const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
const team =players;
const team1 = {};
for(let key in players){
	team1[key] = players[key];
}

const cap1 = {};
for(let key in person){
	cap1[key] = person[key];
}


window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
