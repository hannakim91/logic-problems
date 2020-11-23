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

// Matrix Addition: https://www.codewars.com/kata/526233aefd4764272800036f/train/javascript

function matrixAddition(a, b){
  const matrixLength = a[0].length
  console.log('matrixLength', matrixLength)
  a = a.flat(), b = b.flat()
  const c = a.reduce((sum, num, i) => {
    let x;
    x = num + b[i]
    sum.push(x)
    return sum
  }, [])
  
  const result = []
  let array = []
  for (let i = 0; i < c.length; i++) {
    array.push(c[i])
    console.log(array)
    if (i === matrixLength - 1) {
      result.push(array)
      array = []
    }
    // result.push(c.slice(0, i))
  }
  return result
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

// Visualization:

// |1 2 3|     |2 2 1|     |1+2 2+2 3+1|     |3 4 4|
// |3 2 1|  +  |3 2 3|  =  |3+3 2+2 1+3|  =  |6 4 4|
// |1 1 1|     |1 1 3|     |1+1 1+1 1+3|     |2 2 4|

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

// 7

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