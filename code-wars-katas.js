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

// 7

// List Filtering
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// iterate through array using filter
  // if elem is a number && elem is positive
    // include it in array to return
    function filter_list(l) {
      return l.filter(elem => typeof elem === 'number' && elem >= 0)
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
