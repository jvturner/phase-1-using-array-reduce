
// let totalBatteries = 0
// Step #1 Create a new variable called totalBatteries
// Step #2 Use reduce method () to get the sum and reduce list down to a sinlge Value.

// Items needed for the reduce() method.
// 1) The array we want to  reduce (provided up above batteryBatches).
// 2) The callback function or reducer (we will call this function ourReduce().
// 3) Initial value of our accumulator variable (we will call this totalBatteries and set = 0)

// final value of the accumulator is returned 
///////////////////////////////// Below is listed Notes Simplified //////////////////////////////
// let batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// let totalBatteries = 0;

// for (let i = 0; i < batteryBatches.length; i++) {


//     totalBatteries += batteryBatches[i];

// }

// console.log(totalBatteries);
// /////////////////////////////////////////////////////////////////////////////////////////////////////

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = batteryBatches.reduce(function (previousValue, currentValue) {

    return previousValue + currentValue;
});

console.log(totalBatteries);










