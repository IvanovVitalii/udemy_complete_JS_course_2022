// Remember, we're gonna use strict mode in all scripts now!
'use strict';

function printForecast(arr) {
    let result = '...'
    for (let i = 0; i < arr.length; i++) {
        result += ` ${arr[i]}ºC in ${i + 1} days ...`;
    }
    return result;
}

const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

console.log(printForecast(temp1)); 
console.log(printForecast(temp2));