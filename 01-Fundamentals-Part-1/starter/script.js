/*
let country = 'Ukraina'
let continent = 'Europe'
const isIsland = false
let population = 40000000
let language = 'Ukrainian'

console.log('continent =>', continent)
console.log('isIsland =>', isIsland)
console.log('country =>', country)
console.log('population =>', population)
console.log('language =>', language)

let halfPopulation = population / 2
console.log(halfPopulation)
console.log(population++)
population--
console.log(population > 6 * 10 ** 6)
console.log(population < 33 * 10 ** 6)

let description = `${country} is in ${continent}, and its ${population / 10 ** 6} million people speak ${language}.`
console.log(description)

// let weightsMark = 78
// let heightMark = 1.69
// let weightsJohn = 92
// let heightJohn = 1.95

let weightsMark = 95
let heightMark = 1.88
let weightsJohn = 85
let heightJohn = 1.76

let bmiMark, bmiJohn

bmiMark = weightsMark / heightMark ** 2
bmiJohn = weightsJohn / heightJohn ** 2

markHigherBMI = bmiMark > bmiJohn

console.log(bmiMark, bmiJohn, markHigherBMI)

let country = 'Ukraina';
let continent = 'Europe';
const isIsland = false;
let population = 40;
let language = 'Ukrainian';

let description;
if (population >= 33) {
    description = "Portugal's population is above average";
} else {
    description = `Portugal's population is ${(33 - population) / 2} million below average`;
};

console.log(description)


let weightsMark = 78;
let heightMark = 1.69;
let weightsJohn = 92;
let heightJohn = 1.95;

// let weightsMark = 95;
// let heightMark = 1.88;
// let weightsJohn = 85;
// let heightJohn = 1.76;

let bmiMark, bmiJohn;

bmiMark = weightsMark / heightMark ** 2;
bmiJohn = weightsJohn / heightJohn ** 2;

markHigherBMI = bmiMark > bmiJohn;

let desc;
if (markHigherBMI) {
    desc = `Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`
} else {
    desc = `John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`
}
console.log(desc)
// 20
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
//22

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'))

if (numNeighbours === 1) {
    console.log('Only 1 border!')
} else if (numNeighbours >= 1) {
    console.log('More than 1 border!')
} else {
    console.log('No borders')
}

// 24
let country = 'Ukraina';
let continent = 'Europe';
const isIsland = false;
let population = 40;
let language = 'ukrainian';

if (language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`)
} else {
    console.log(`${country} does not meet your criteria :(`)
}

const teamDolphins1 = 97;
const teamDolphins2 = 112;
const teamDolphins3 = 101;
const teamKoalas1 = 109;
const teamKoalas2 = 95;
const teamKoalas3 = 106;

let averageDolphin = (teamDolphins1 + teamDolphins2 + teamDolphins3) / 3;
let averageKoalas = (teamKoalas1 + teamKoalas2 + teamKoalas3) / 3;

if (averageDolphin > averageKoalas && averageDolphin >= 100) {
    console.log('Dolphins');
} else if (averageKoalas > averageDolphin && averageKoalas >= 100) {
    console.log('Koalas');
} else if (averageDolphin === averageKoalas && averageKoalas >= 100 && averageDolphin >= 100) {
    console.log('Draw');
} else {
    console.log('error');
}

// 26
const day = 'monday';

if (day === 'monday') {
    console.log('monday');
} else if (day === 'tuesday') {
    console.log('tuesday');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('wednesday or thursday');
} else if (day === 'friday') {
    console.log('friday');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('saturday or sunday');
} else {
    console.log('error');
}
// 28
let country = 'Ukraina';
let population = 40;
console.log(`${country}'s population is ${population >= 33 ? 'above' : 'below'} average`)

const bill = 275;
const tip = 50 <= bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/

