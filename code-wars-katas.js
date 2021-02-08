// 5

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

// function takes 3 args (digits) and returns a 6-char string
  // each digit = 2 characters in string

//figure out how RGB and hex corresponds
  // each digit has to be calculated separately - decimal to hexadecimal
// create hexidecimal conversion object {0:0,...0:9,10:'A',...15:'F'}
// FIRST arg:
  // divide by 16 (remainder to 2 decimal places?) to get first digit of hexcode
    // take whole number portion and convert to hexadecimal
  // multiply remainder by 16 and convert to hexadecimal
// repeat for SECOND and THIRD args
// concat/join 3 return values together

const rgb = (a, b, c) => {
  let hex = ''
  const hexatize = (digit) => {
    const decToHex = {
      10: 'A',
      11: 'B',
      12: 'C',
      13: 'D',
      14: 'E',
      15: 'F'
    }
    
    if (digit >= 255) {
      return 'FF'
    } else if (digit <= 0) {
      return '00'
    }
    let x = (digit / 16)
    let y = (x - Math.floor(x)) * 16

    x = Math.floor(x).toString()
    y = y.toString()
    if (x >= 10) {
      x = decToHex[x]
    }
    if (y >= 10) {
      y = decToHex[y]
    }
    return x.concat(y)
  }
  
  const first = hexatize(a)
  const second = hexatize(b)
  const third = hexatize(c)
  hex = hex.concat(first, second, third)
  return hex
}

// additional notes:
  // .toString() can be manipulated with base number before parsing into a string

// 6

// Decipher This
// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'

// pseudocode
// split at space
// iterate through each string and turn each word into an array of characters
// iterate through each array of characters with reduce to return decipheredWord
  // if character is a number, push char to variable 'charCode'
  // if character is last index number,
    // turn charCode to string (String.fromCharCode)
    // concatenate charCode to decipheredWord
    // concatenate last char to decipheredWord
  // if character is not last index number but not number
    // add to restOfWord
// return decipheredWord + rest of word with first char of restOfWord at end

// Did someone say cake?

// Given the below recipe for chocolate cake write a function cake() that takes two inputs: ingredient and amount.

// The recipe should be adjusted according to the amount passed into the function. An Object containing all ingredients and their new amounts should be returned.

// Note that the new amounts should be rounded to 1 decimal place and unit of measurement for amount will always be in grams, unless the ingredient is eggs.

// Here is the original recipe:

// 160g caster sugar
// 170g butter
// 3 eggs
// 115g self-raising flour
// 55g cocoa powder

// Example:
// If I have just 80g of caster sugar, how much will I need of the other ingredients?

//given a recipe for cake
//call function with 2 args - ingredient and amount of that ingredient you want to use in the recipe
// return object including your ingredient how much you'd need of each other ingredient - in the correct ratio

//assumptions
//return an obj
// ingredient you're checking against exists in the recipe (can create a check for it and error message - edge case)
// you can use more or less than original amount recipe calls for - round to one decimal place

// math/optimization later

//match first argument to key in recipe object to get the original amount
// create ratio variable using second arg divided by original amt
// reduce through recipe using Object.keys
  // access original recipe with bracket notation
  // if ingredient is NOT 'egg' -- concatenate 'g' and turn it int a string
  // multiply by that ratio for each ingredient
    // round to nearest .1 place

    function cake(item, amount) {
      const recipe = {'caster sugar': 160, 'butter': 170, 'eggs': 3, 'self-raising flour': 115, 'cocoa powder': 55};
      const ratio = amount / recipe[item]
      const adjusted = Object.keys(recipe).reduce((adjusted, ingredient) => {
        adjusted[ingredient] = (Math.round(ratio * recipe[ingredient] * 10)/10)
        
        return adjusted
      }, {})
      return adjusted
    }
    
    // cake('butter', 55)
    // // {'caster sugar': '51.8g', butter: '55g', eggs: 1, 'self-raising flour': '37.2g', 'cocoa powder': '17.8g'}
    // cake('cocoa powder',100.5)
    //   //,{'caster sugar': '292.4g', butter: '310.6g', eggs: 5.5, 'self-raising flour': '210.1g', 'cocoa powder': '100.5g'});
    
    // cake('caster sugar', 80)
    // // {'caster sugar': '80g', butter: '85g', eggs: 1.5, 'self-raising flour': '57.5g', 'cocoa powder': '27.5g'}
        
// Readable Time Schedule

Your task in order to complete this Kata is to write a function which formats a working hours schedule, given as an array of objects, in a human-friendly way.

// The function must accept an unsorted array. If the array is empty, it just returns an empty array. Otherwise, it should make a sorted human-friendly schedule of working hours and return it as a string.

// The output format for one day should be SUN: 11:00 - 23:00.

// If two or more days of the week in a row have the same working hours they should be concatenated and have the following format: MON - WED: 11:00 - 23:00.

// It is much easier to understand with an example:

// ** Input **


// const data = [
//     {
//         "day": "sat",
//         "from": "10:00",
//         "to": "23:00"
//     },
//     {
//         "day": "mon",
//         "from": "11:00",
//         "to": "23:00"
//     },
//     {
//         "day": "tue",
//         "from": "11:00",
//         "to": "23:00"
//     },
//     {
//         "day": "wed",
//         "from": "11:00",
//         "to": "23:00"
//     },
//     {
//         "day": "thu",
//         "from": "12:00",
//         "to": "23:00"
//     },
//     {
//         "day": "fri",
//         "from": "12:00",
//         "to": "23:00"
//     },
//     {
//         "day": "sun",
//         "from": "11:00",
//         "to": "23:00"
//     }
// ]
// ** Output **

// MON - WED: 11:00 - 23:00
// THU - FRI: 12:00 - 23:00
// SAT: 10:00 - 23:00
// SUN: 11:00 - 23:00
// Be careful because some days may be missed. You may be given an array only of Monday and Friday with the same hours, but they shouldn't be concatenated.

// receive an array of objects with properties day, from, to
// return string concatenated with days and times to work
  // string should start with MON and end with SUN
  // days should be CAPITALIZED
  // dashes between start - end times; dashes between MON - WED if needed
  // if consecutive days work sched are same
    // concatenate into one line (e.g. MON - WED)

    // iterate through array with reduce to return a string - use optional index
  // 7 if conditions for each day of the week
  // if array includes "mon"...
    // concat string with capitalized MON: START - END
  // if array includes "tue"...
    // if START/END times === MON START/END
      // replace string with MON - TUE: START - END
    // else concatenate TUE: START - END
// this is a forkton of conditions...

// Sort My Animals: https://www.codewars.com/kata/58ff1c8b13b001a5a50005b4

function sortAnimal(list) {
  if (list === null) {
    return null
  } else if (list.length === 0) {
    return []
  } else if (Array.isArray(list)) {
    const legs = list.reduce((legs, animal) => {
      if (!legs[animal.numberOfLegs]) {
        legs[animal.numberOfLegs] = [animal]
      } else {
        legs[animal.numberOfLegs].push(animal)
      }
      return legs
    }, {})
    const sorted = Object.keys(legs).map(legNumber => {
      return legs[legNumber].sort((animalA, animalB) => animalA.name.localeCompare(animalB.name))
    })
    return [].concat(...sorted)
  } 
}

// Matrix Addition: 

function matrixAddition(a, b){
  const matrixLength = a[0].length
  a = [].concat(...a), b = [].concat(...b)
  const c = a.reduce((sum, num, i) => {
    let x;
    x = num + b[i]
    sum.push(x)
    return sum
  }, [])
  
  return chunk(c, matrixLength)
}

function chunk(array, size) {
  const chunkedArray = [];
  let index = 0;
  while (index < array.length) {
    chunkedArray.push(array.slice(index, size + index));
    index += size;
  }
  return chunkedArray;
}

// matrixLength = find the length of a[0] to get length of each subarray
// concatenate/flatten arrays in a and b
// iterate through a[0] - a[flattendArrayLength]     // nest iteration through b[0] - b [flattened...]
    // add at matching index # to create and return array of added numbers (c)
// divide c by matrixLength to return array of sub-arrays - slice? for loop -- iterate through array c 
  // c.length / matrixLength = number of elements in each array
  // chunk = 4 / 2 = 2 -> 2 arrays of 2 elements apiece
    //slice by 0, x
    //slice by x, c.length - chunk
    //repeat until chunk = c.length

// https://medium.com/@Dragonza/four-ways-to-chunk-an-array-e19c889eac4

// Visualization:

// |1 2 3|     |2 2 1|     |1+2 2+2 3+1|     |3 4 4|
// |3 2 1|  +  |3 2 3|  =  |3+3 2+2 1+3|  =  |6 4 4|
// |1 1 1|     |1 1 3|     |1+1 1+1 1+3|     |2 2 4|
matrixAddition(
  [ [1] ],
//   +
  [ [2] ] )

matrixAddition(
  [ [1, 2],
    [1, 2] ],
  [ [2, 3],
    [2, 3] ] )
//[ [3, 5], 
//  [3, 5] ] 

matrixAddition(
  [ [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1] ],
  [ [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3] ] )
//      =
  // [ [3, 4, 4],
  //   [6, 4, 4],
  //   [2, 2, 4] ] );


// stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

//separate sentence into an array of word strings
//iterate through each word with reduce to return a string
  //if word.length > 5
    // reverse the word - turn word into an array of characters
      //iterate through array starting with last element
        // push each element into main string
  // else
    // concatenate to string

// remove space before first word before returning

function spinWords(sentence) {
  const words = sentence.split(' ')
  const spun = words.reduce((spun, word) => {
    if (word.length >= 5) {
      const letters = word.split('')
      let reversed = ''
      for (let i = letters.length - 1; i >= 0; i--) {
        reversed = reversed + letters[i]
      }
      spun.push(reversed)
    } else {
      spun.push(word)
    }
    return spun
  }, [])
  return spun.join(' ')
}

spinWords("Welcome")
spinWords("Hey fellow warriors")
spinWords("Just kidding there is still one more")

// Duplicate Encoder
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// convert string to lower case
// turn string into array
// iterate through array
  // create an object set to each unique letter of array
    // counter
// if object has that letter once 
  // add `(` to return statement
// else if it does
  // add `)`

const duplicateEncode = str => {
  const letters = str.toLowerCase().split('')
  let conversion = ''
  const counter = letters.reduce((obj, letter) => {
    if (!obj[letter]) {
      obj[letter] = 1
    } else {
      obj[letter] += 1
    }
    return obj
  }, {})

  letters.forEach(letter => {
    if (counter[letter] === 1) {
      conversion = conversion.concat('(')
    } else {
      conversion = conversion.concat(')')
    }
  })
  return conversion
}

// 7

// Bus Stop
// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// array of arrays
  // each subarray is a bus stop
  // subarray[0] represents people getting on 
  // subarray[1] represents people getting off 
// how many people are on bus at the last stop?
// add all the numbers at sub[0]
// add all the numbers at sub[1]
// sub[0] sum - sub[1] sum

// big o of this solution is o(n)

// possible with no loops?
// conditionals and pop


// number([[10,0],[3,5],[5,8]])
// // 5
// number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])
// //17
// number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])
// // 21);

var number = function(busStops) {
  const stragglers = busStops.reduce((stragglers, stop) => {
    return stragglers += stop[0] - stop[1]
  }, 0)
  return stragglers
}


// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.
// Exes and Ohs - TypeScript

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// List Filtering
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// iterate through array using filter
  // if elem is a number && elem is positive
    // include it in array to return
    function filter_list(l) {
      return l.filter(elem => typeof elem === 'number' && elem >= 0)
    }

// Credit Card Mask

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// edge cases: fewer than 4 characters
// if !cc.length || cc.length <= 4
  // return cc
// else
  // set cc.length - 4 to variable 'maskLength'
  // set variable ccLast4 to cut last 4 chars off cc
  // add maskLength number of #'s to front of cc-last 4 with for loop using maskLength as breakpoint for num of times to add '#' to a string
  //return concatenation of last4 and mask

  function maskify(cc) {
    if (!cc.length || cc.length <= 4) {
      return cc
    } else {
      const maskLength = cc.length - 4
      const last4 = cc.slice(maskLength, cc.length)
      let mask = ''
      for (let i = 0; i < maskLength; i++) {
        mask += '#'
      }
      return mask + last4
    }
  }

  // The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

  // To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
  
  // Input
  // Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
  
  // Note for F#: The input will be of (int list list) which is a List<List>
  
  // Example Input
  //[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
  // Output
  // Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
  
  // Example Output
  //["Open", "Open", "Senior", "Open", "Open", "Senior"]

  // check if each app (nested array) at 0th index is >= 55
  // if not, return 'Open'
// check if each app at 1st index is > 7
  // if not, return 'Open'
  // if so, return 'Senior'
// **reverse conditions to cut down on # of checks**

const openOrSenior = (apps) => {
  return apps.reduce((categories, app) => {
    if (app[0] >= 55 && app[1] > 7) {
      categories.push('Senior')
    } else if (app[0] < 55 || app[1] <= 7) {
      categories.push('Open')
    }
    return categories
  }, [])
}

// can use destructuring/ternary for cleaner syntax
// don't need to use return statement

function openOrSenior2(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}


// 8 

// The Feast of Many Beasts https://www.codewars.com/kata/5aa736a455f906981800360d
function feast(beast, dish) {
  
  if (beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length -1)) {
    return true
  }
  else return false
}

// alternative: checks for name of animal not being included in dish name (misread prompt)
function feastAlt(beast, dish) {
  const beastWords = beast.split(' ')
  const dishWords = dish.split(' ')
  
  const nameCheck = beastWords.reduce((nameCheck, word) => {
    dishWords.forEach(werd => {
      if (werd === word) {
        nameCheck.push(word)
      }
    })
    return nameCheck
  }, [])
  console.log(nameCheck)
  if (beast.charAt(0) === dish.charAt(0) && nameCheck.length === 0) {
    return true
  }
   return false
}

// Counting sheep
//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

var array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ];

function countSheeps(arrayOfSheep) {
let count = 0
arrayOfSheep.forEach(sheep => {
if (sheep === true) {
count += 1
}
})
return count
}

countSheeps(array1)

// array of trues and falses
// iterate through array with forEach
// counter that adds 1 if element === true
// return counter 

// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// var summation = function (num) {
//   const nums = []
//   for (let i = 1; i <= num; i++) {
//     nums.push(i)
//   }
//   return nums.reduce((sum, num) => {
//     return sum += num
//   }, 0)
// }

var summation = function (num) {
  let sum = 0
  for (let i = 1; i <= num; i++) {
    sum += i
  }
  return sum
}

summation(2) 
//   -> 3
// 1 + 2

summation(8) 
//   -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// empty array
// for loop
  // num = add 1 to array num number of times, increase by 1 each time
// reduce to add up nums in array

// Digitize - convert number to reversed array of digits

// convert number to string
// convert string to array
// reverse array
// iterate through array using map and convert each str to num

const digitize = (num) => {
  return num.toString()
    .split('')
    .reverse()
    .map(char => parseInt(char))
}

// Needle in the Haystack

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// iterate through array
// if element strictly equals "needle", return string "found the needle at position [index #]"

const findNeedle = (arr) => {
  return arr.reduce((statement, elem, i) => {
    if (elem === "needle") {
      statement = `found the needle at position ${i}`
    }
    return statement
  }, '')
}
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// return "found the needle at position 5"

// more performant solution:
// don't need to iterate through array then?
function findNeedle2(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
findNeedle2([1, 2, 3, 'needle', 'noodle', 'nodding off'])