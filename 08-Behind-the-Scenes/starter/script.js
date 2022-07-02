'use strict';
/*
function calcAge(birthYear) {
    const age = 2037 - birthYear;
    function printAge(){
        const output = `${firstName}, you are ${age}, born on ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            const str = `Oh, and you're a millenial, ${firstName}`
            console.log(str);
        }
    }
    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);


console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    age: function(){
        console.log(this);
        const isMillenial = () => {
            console.log(`${this.firstName}`);
            return (this.year >= 1981 && this.year <= 1996) ? true : false
        }
        console.log(isMillenial());
        this.age = 2037 - this.year
        return this.age
    }
}

const mary = {
    firstName: 'Mary',
    year: 2017,
}

mary.age = jonas.age;

jonas.age();
mary.age();

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('before', jessica);
console.log('after', marriedJessica);

// Copying object
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'David';
console.log('before2', jessica2);
console.log('after2', jessicaCopy);
*/
