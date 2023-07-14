// write a for loop taking the parameters that in an array of numbers it will only output odd numbers

//    for(var i = 0; i % 2 === 0; i++){
//        continue;
//    } else {
//        console.log()
//    }

let arr = [];
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  if (number % 2 !== 0) {
    arr.push(number);
  }
}
console.log(arr);


// write a for loop counting the vowels and consonants seperately
// put vowels and consonants in seperate arrays

// var vowels = ["a", "e", "i", "o", "u"]

let string = "yikes";
let seperated_string = [];
let vowels = [];
let consonants = [];

for (let i = 0; i < string.length; i++) {
  let char = string[i];
  seperated_string.push(char);
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    vowels.push(char);
  } else {
    consonants.push(char);
  }
}
console.log(string + " has " + consonants.length + " consonants and " + vowels.length + " vowels");



// reverse the numbers in an array
// put reverse numbers into new array


nums = [1, 2, 3]
reverseNums = []

for (var i = arrNums.length -1; i >= 0; i--){
    reverseNums.push(i);
}

console.log(reverseNums)


// printing #'s divisable by 3 & 5 but not #'s that are divisable by both
// printing Fizz for numbers divisable by 3 and Buzz for numbers divsable by 5

function fizzBuzz(100){
    for(var i = 0; i < 100; i++){
        if(i % 3 === 0 && i % 5 !== 0){
            console.log(Fizz);
        }
        else if (i % 5 === 0 && i % 3 !== 0){
            console.log(Buzz);
        }
    }
}

