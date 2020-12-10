// Write a function that returns the unique elements in an array (or a list)[6, 4, 1, 2, 4, 6, 4, 1, 3]=> [6, 4, 1, 2, 3]

//idea 1 - set object
// idea 2 -iterator method (reduce)
  // if/else condition - if element in new array already exists, don't add it again

  const array = [6, 4, 1, 2, 4, 6, 4, 1, 3]
  const uniqueElements = (array) => {
    return array.reduce((uniqueList, elem) => {
      if (!uniqueList.includes(elem)) {
        uniqueList.push(elem)
      } 
      return uniqueList
    }, [])
  }
  
  // uniqueElements(array)
  
  const uniqueObjects = (array) => {
    const unique = array.reduce((obj, elem) => {
      if (!obj[elem]) {
        obj[elem] = 1;
      } else {
        obj[elem] = obj[elem] + 1;
      }
      return obj;
    }, {})
    return Object.keys(unique);
  }
  
  uniqueObjects(array)
  // idea 3 - create an object with key - each unique element, value - how many times it occured
  
    //reduce run time by using addtl memory
    // how more efficient? only going through array once
    // adding things to obj doesn't take time
      // big o running time = n, but addtl mem
  
  // big o running time
    // how many times? idea 2 = n*n = n^2
  
  // tips: be able to analyze what is the big o of something?
  // don't forget semicolons even with JS - best practice
  
  // for loops