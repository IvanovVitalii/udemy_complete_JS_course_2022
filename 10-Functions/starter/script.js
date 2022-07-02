'use strict';
/*
const bookings = [];

function createBooking(flighNumber, numPassengers = 1, price = 199 * numPassengers) {
    const booking = {
        flighNumber,
        numPassengers,
        price
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('GA15', 5, 200);
createBooking('FQ157', 10);
createBooking('ff78', undefined, 1000);
console.log(bookings);

const flight = 'JH123';
const jonas = {
    name: 'Jonas Ivaniv',
    passport: 65465165165
};

function checkIn (flighNumber, passenger) {
    flighNumber = 'lH9999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 65465165165) {
        alert('Checked in');
    } else {
        alert('Wrong passport');
    }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

function newPassport (persont) {
 persont.passport = Math.trunc(Math.random() + 1) * 100000000000000
};

newPassport(jonas);
checkIn(flight, jonas)

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split( );
    return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function(str, fn) {
    // return fn(str);
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};

const first = transformer('JavaScript is the besst', upperFirstWord);
const second = transformer('JavaScript is the besst', oneWord);

const higt5 = function() {
    console.log('✋');
};
document.body.addEventListener('click', higt5);

['Jonas', 'Vitalik', 'Marina'].forEach(higt5)

function greet(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHi = greet('Hi');
greeterHi('Marina');
greeterHi('Vitalii');

greet('Hello')('Jonas');

let greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet2('Hey')('Vit');

const lufthansa = {
    airline: 'Lufthana',
    iataCode: 'LH',
    booking: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.booking.push({flight: `${this.iataCode}${flightNum}`, name})
    },
}

lufthansa.book(239, 'Ivanov Vitalii');
lufthansa.book(635, 'Vit Ivanov');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    booking: [],
};

const book = lufthansa.book;

// book(23, 'test')

book.call(eurowings, 23, 'Test Call');

const flightData = [555, 'Teas Apply'];
book.apply(eurowings, flightData);


const bookEW = book.bind(eurowings);
bookEW(222, 'Test Bind');

const bookEW123 = book.bind(eurowings, 123);
bookEW123('Test Bind123');
console.log(eurowings);

lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes ++;
    console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.20, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(150));

const addTaxRate = function(rate) {
    return function(vals){
        return vals + vals * rate
    };
};
const addVAT2 = addTaxRate(0.23)
console.log(addVAT2(150));


const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(prompt(`${this.question} \n${this.options.join('\n')} \n(Write option number)`));
    if (answer > this.answers.length - 1 || answer < 0) {
      alert('Wrong answer!');
    } else {
      this.answers[answer]++;
    }
    this.displayResults()
    this.displayResults('string')
  },
  displayResults(type = 'array') {
    let result = this.answers
    if (type === 'array') {
      console.log(result);
    } else if (type === 'string') {
      console.log(`Poll results are ${result.join(', ')}`);
    };
  },
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.registerNewAnswer();

poll.displayResults.call({answers: [5, 2, 3]})
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string')

const secureBooking = function() {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

let f;
const g = function() {
  const a = 23;
  f = function() {
    console.log(a * 2);
  };
};

const h = function() {
  const b = 777;
  f = function() {
    console.log(b * 2);
  };
}

g();
f();
h();
f();

const boardPassengers = function(n, wait) {
  const perGroup = n / 3;

  setTimeout(function(){
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000)

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
*/

(function() {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function(){
    header.style.color = 'blue';
  });
})();

