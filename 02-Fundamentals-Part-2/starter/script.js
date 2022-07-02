'use strict';
/*
// 33
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`
}
console.log(describeCountry('Ukraine', 40, 'Kyiv'));
console.log(describeCountry('Poland', 30, 'Varshava'));

// 34
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
console.log(percentageOfWorld1(40));

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}
console.log(percentageOfWorld2(40));

// 35
const percentageOfWorld3 = (population) => (population / 7900) * 100
console.log(percentageOfWorld3(40));

// 36
const percentageOfWorld1 = function (population) {
    return (population / 7900) * 100;
}

const describePopulation = function (country, population) {
    return `${country} has ${population} million peoplewhich is about ${percentageOfWorld1(population)}% of the world.`
}

console.log(describePopulation('Ukraine', 40));

function calcAverage(a, b, c) {
    return (a + b + c) / 3
}

function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins > avgKoalas * 2) {
        console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`);
    } else if (avgKoalas > avgDolhins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
    } else {
        console.log('No teams win.')
    }
}

let avgDolhins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(64, 54, 49);
checkWinner(avgDolhins, avgKoalas);

avgDolhins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolhins, avgKoalas);

// 39
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const populations = [40, 15, 150, 1500];

if (populations.length === 4) {
    console.log(true);
} else {
    console.log(false);
}

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

console.log(populations, percentages);

// 40
const neighbours = ['Poland', 'Moldova', 'Belarus', 'Russia'];
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
} else {
    console.log('No');
}
neighbours[neighbours.indexOf('Russia')] = 'moskoviy';
console.log(neighbours);

// 41
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills, tips, totals)

// objects
// 42
const myCountry = {
    country: 'Ukraine',
    capital: 'Kyiv',
    language: 'ukranian',
    population: 40,
    neighbours: ['Poland', 'Moldova', 'bulbashi', 'moskali'],

    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, $${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false
        return this.isIsland
    }
}
console.log(myCountry)

// 43
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, $${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

// 44
console.log(myCountry.describe())
console.log(myCountry.checkIsland())

// 45
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    heigt: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.heigt ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    heigt: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.heigt ** 2;
        return this.bmi;
    }
}

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.BbmiMI}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}

// 46
for (let vot = 1; vot <= 50; vot++) {
    console.log(`Voter number ${vot} id currently voting`)
}

// 47
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const populations = [40, 15, 150, 1500];

if (populations.length === 4) {
    console.log(true);
} else {
    console.log(false);
}

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]))
}

console.log(populations, percentages2);

// 48
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']]

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}

// 49
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const populations = [40, 15, 150, 1500];

if (populations.length === 4) {
    console.log(true);
} else {
    console.log(false);
}
let i = 0
const percentages3 = []
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]))
    i++
}

console.log(populations, percentages3);
*/
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
function calcAverage(arr) {
    let sum_i = 0;
    for (let i = 0; i < arr.length; i++) {
        sum_i += arr[i];
    }
    return sum_i / arr.length;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log(bills, tips, totals);
console.log(calcAverage(totals));