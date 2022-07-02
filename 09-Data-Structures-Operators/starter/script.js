'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const result = `${type.startsWith('_Delayed') ? '🔴 ': ''} ${type.replaceAll('_', ' ')} from ${from.slice(0, 3).toUpperCase()} to ${to.slice(0, 3).toUpperCase()} (${time.replace(':', 'h')})`.padStart(46)

  console.log(result);
}




/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function (ev) {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [count, row] of rows.entries()) {
    let [first, second] = row.trim().toLowerCase().split('_');
    let result = `${first}${second[0].toUpperCase() +second.slice(1)}`
    result = result.padEnd(20, ' ')
    console.log(result += '✅'.repeat(count + 1));
  }
})

const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E')
  console.log('You got the middle seat');
  else console.log('You got lucky');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'san'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelovery({ time, address, mainIndex, starterIndex }) {
    console.log(time, address, mainIndex, starterIndex);
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
  },
  orderPizza(mainIngr, ...otherIngr) {
    console.log(mainIngr);
    console.log(otherIngr);
  },
};


const properties = Object.keys(openingHours);
console.log(properties);

const values = Object.values(openingHours);
console.log(values);

const arr = ['10', '11', '12'];
console.log([...arr.entries()]);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, {open, close}] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

restaurant.orderPizza('a', 'b', 'c')

const [a, , b, ...other] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(a, b, other);
console.log(restaurant.mainMenu, restaurant.starterMenu);

const {sat, ...weekday} = restaurant.openingHours
console.log(weekday);

function add (...numbers){
  let result = 0;
  for (let i = 0; i < numbers.length; i++) result += numbers[i];
  console.log(numbers, result);
  return result;
}
add(2, 3);
add(1, 5, 8);
add(8, 6, 9, 8);

const arr = [23, 5, 9];
add(...arr);

restaurant.orderDelovery({
  time: '22:30',
  address: 'Kyiv',
  mainIndex: 2,
  starterIndex: 2,
});

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const ingrerients = ['a', 'b', 'c'];

restaurant.orderPasta(...ingrerients);

const newRest = {foundedID: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRest);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Check';
console.log(restaurantCopy.name);
console.log(restaurant.name);

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name:restName, openingHours: Hours, categories: tags} = restaurant;
console.log(restName, Hours, tags);

const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a, b} = obj);
console.log(a, b);
const {fri: {open, close}} = openingHours;
console.log(open, close);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

const nested = [1, 2, [3, 4]];
const [i, , [j, k]] = nested
console.log(i, j, k);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

// 1
const events = [...new Set(gameEvents.values())]
console.log(events);
// 2
gameEvents.delete(64)
console.log(gameEvents);
// 3
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
// 4
for (const [key, val] of gameEvents) { 
  console.log(`${key <= 45 ? `[FIRST HALF]${key}` : `[SECOND HALF]${key}`}: ${val}`);
}

// 1
for (const [key, value] of game.scored.entries()) {
  console.log(`Goal ${key + 1}: ${value}`);
}
// 2
const odds = Object.values(game.odds);
let average_odd = 0;
for (const odd of odds) {
  average_odd += odd;
}
average_odd /=odds.length
console.log(average_odd);
// 3
for (const [team, val] of Object.entries(game.odds)) {
  const teamStr = game[team] ? `victory ${game[team]}` : 'draw'
  const result = `Odd of ${teamStr}: ${val}`
  console.log(result);
}
// bonus
const scorers = {}
for (const i of game.scored) {
  scorers[i] ? scorers[i] += 1 : scorers[i] = 1
}
console.log(scorers);

// 1
const [players1, players2] = game.players;
console.log(players1, players2);
// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4
const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
console.log(players1Final);
// 5
const {odds: {team1, x: draw, team2}} = game
console.log(team1, draw, team2);
//6
function printGoals (...names) {
  console.log(...names, names.length);
};
printGoals('Hummels', 'Akanji', 'Hakimi', 'Weigl')
printGoals(...game.scored)
//7
team1 < team2 && console.log('team 1 is more likely to win');
team1 > team2 && console.log('team 2 is more likely to win');
*/

