//////////////////////// problem 1 ////////////////////////
// Write an avg function that accepts an array of numbers and returns the average.

console.log("=========== problem 1 =========================================================")

let nums = [2, 2, 6, 1];

function sum(first, second){
    return (first + second);
}

function avg(numbers){
    return numbers.reduce(sum) / numbers.length;
}

console.log(nums.reduce(sum, 0));
console.log(nums.reduce(sum, 0) / nums.length);
console.log(avg(nums));

//////////////////////// problem 2 ////////////////////////
// Write an containsVowels function that accepts a string and returns true if any of 
// them are vowels and false otherwise.

console.log("=========== problem 2 =========================================================")

let string = "sample";

function isVowel(char){
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    } else {
        return false;
    }
}
 function compare(first, second){
    if(first === true || second === true){
        return true;
    } else {
        return false;
    }
 }

console.log(string.split('').map(isVowel).reduce(compare, false));

//////////////////////// problem 3 ////////////////////////
// Write a piglatin function that accepts a string and returns the piglatin version of that string. 
// "This is an example of piglatin" becomes "hisTay siay naay xampleeay foay iglatinpay".

console.log("=========== problem 3 =========================================================")

let phrase = "This is an example of piglatin";

function piglatin(word){
    let array = word.split('');
    array.push(array[0]);
    array.push('ay');
    array.splice(0, 1);
    return array.join('');
}

console.log(phrase.split(' ').map(piglatin).join(' '));

//////////////////////// problem 4 ////////////////////////
// Write a longestWord function that accepts a string and returns the longest word from the string.

console.log("=========== problem 4 =========================================================")

let sampleString = 'Here is a sentence with different lengthened words';

function longestWord (first, second){
    if(first.length > second.length){
        return first;   
    } else {
        return second;
    }
}

console.log(sampleString.split(' ').reduce(longestWord, 0));

//////////////////////// problem 5 ////////////////////////
// Write a multiples function that accepts two numbers and returns an array of numbers from 1 - 100 
// that are evenly divisible by both. For this exercise you can use the following helper function:

console.log("=========== problem 5 =========================================================")

function range(min, max) {
  let nums = [];

  for (let i = min; i <= max; i++) {
    nums.push(i);
  }

  return nums;
}


function multiples (num1, num2){

    function division(num){
        if (num % num1 === 0 && num % num2 === 0){
            return num;
        }
    }

      return range(0,101).filter(division);
}

console.log(multiples(5, 10));

//////////////////////// problem 6 ////////////////////////
// Write a find function that accepts an array of numbers and an individual number. Return true if 
// the number exists anywhere in the array or false if not.

console.log("=========== problem 6 =========================================================")

let sampleArray = [5, 14, 6, 23, 1, 4];
let sampleNum = 5;

function find(arrayNums, num){

    function isEqual(number){
        if(number = num){
            return true;
        } else {
            return false;
        }
    }

return arrayNums.reduce(isEqual, false);

}

console.log(find(sampleArray, sampleNum));

