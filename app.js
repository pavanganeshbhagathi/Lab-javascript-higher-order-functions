//Function #1: Array Slice
var foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let modifiedfoods = foods.slice(1, 4);
console.log(modifiedfoods);

// Function #2: Array Splice
var newFoods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

newFoods.splice(2, 0, "icecream", "fingerchips");
console.log(newFoods);

var numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
// Function #3: Filter
let isEven = numberArray.filter((num) => num % 2 == 0);
console.log(isEven);

let notp = [];
function notprime(numberArray) {
  for (var i = 0; i < numberArray.length; i++) {
    var item = numberArray[i];
    var count = 0;
    for (var j = 2; j <= item / 2; j++) {
      if (item % j == 0) count++;
    }
    if (count != 0) {
      notp.push(item);
    }
  }
}
notprime(numberArray);

const numberArrays = [12, 324, 213, 4, 2, 3, 45, 4234];
let iseven;
for (var i = 0; i < numberArrays.length; i++) {
  var n = numberArrays[i];
  iseven = (n) => n % 2 == 0;
}
console.log(iseven);

const myArray = [11, 34, 20, 5, 53, 16];
let findSquareOfNumbers = myArray.map((item) => item * item);
console.log(findSquareOfNumbers);

var myArray1 = [2, 3, 5, 10];

const myArray12 = [11, 34, 20, 5, 53, 16];
var squarednum = myArray12.map((item) => item * item);

console.log(squarednum);
let sum = squarednum.reduce((initial, item) => initial + item);
console.log(sum);
