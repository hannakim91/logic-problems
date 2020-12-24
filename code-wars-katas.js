// 6

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

// 7

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