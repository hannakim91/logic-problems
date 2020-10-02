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

// 7

// 8 

// The Feast of Many Beasts https://www.codewars.com/kata/5aa736a455f906981800360d
function feast(beast, dish) {
  
  if (beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length -1)) {
    return true
  }
  else return false
}

