// EASY
  // # Difference Of Squares

  // Find the difference between the square of the sum and the sum of the squares of the first N natural numbers.

  // The square of the sum of the first ten natural numbers is
  // (1 + 2 + ... + 10)² = 55² = 3025.

  // The sum of the squares of the first ten natural numbers is
  // 1² + 2² + ... + 10² = 385.

  // Hence the difference between the square of the sum of the first
  // ten natural numbers and the sum of the squares of the first ten
  // natural numbers is 3025 - 385 = 2640.

  // You are not expected to discover an efficient solution to this yourself from
  // first principles; research is allowed, indeed, encouraged. Finding the best
  // algorithm for the problem is a key skill in software engineering.

  function findArr(num) {
    const arr = []
    for (let i = num; i >= 1; i--) {
      arr.push(i)
    }
    return arr
  }
  
  function squareOfSum(num) {
    // create an array including this.num and this.num - 1 until 1
    // iterate through array using reduce
      // add up all the numbers
    // return square of that number 
    const arr = findArr(num)
    const sum = arr.reduce((sum, num) => {
      return sum += num
    }, 0)
    return sum * sum
  }
  
  function sumOfSquares(num) {
    // create array including num - 1, subtracting 1 at a time from num
    // iterate through each number in array with reduce
      // find square of each number
      // add to sum (return value)
    const arr = findArr(num)
    const squaresAdded = arr.reduce((sum, num) => {
      sum += num * num
      return sum
    }, 0)
    
    return squaresAdded
  }
  sumOfSquares(1)
  sumOfSquares(5)
  sumOfSquares(100)
  
  function difference(num) {
    return squareOfSum(num) - sumOfSquares(num)
  }
  
  difference(1)
  difference(5)
  difference(100)
  
  squareOfSum(1)
  squareOfSum(5)
  squareOfSum(100)

  // twoFer

  export const twoFer = (name) => {
    return `One for ${name || "you"}, one for me.`
  };

  // Pangram
  export const isPangram = (string) => {
    const onlyLetters = string.replace(/(\W|_|\d)/g, '').toLowerCase()
    const set1 = new Set(onlyLetters)
    if (set1.size === 26) {
      return true
    }
    return false
  };

  // gigasecond

  export const gigasecond = (date) => {
    const dateInMS = Date.parse(date)
    const addGigaseconds = dateInMS + 1000000000000
    const gigasecondDate = new Date(addGigaseconds)
    console.log(gigasecondDate)
    return gigasecondDate
  }

  // DiffieHellman
  
  export class DiffieHellman {
    constructor(p, g) {
      this.p = p,
      this.g = g,
      this.isGoodArgs()
    }
    isInRange(num) {
      if ((num < 1) || (num > 9998)) {
        throw new Error("Numbers not in range")
      }
    }

    isPrime(num) {
      if ((num > 2) && (num % 2 === 0) || (num % 3 === 0)) {
        throw new Error("Number is not prime")
      }
    }

    isGoodArgs() {
      this.isInRange(this.p)
      this.isInRange(this.g)
      this.isPrime(this.p)
      this.isPrime(this.g)
    }

    getPublicKeyFromPrivateKey(privateKey) {
      if (privateKey <= 1 || privateKey >= this.p) {
        throw new Error("Remove this statement and implement this function");
    }
      const publicKey = this.g ** privateKey % this.p
      return publicKey
    }

    getSharedSecret(privateKey, publicKey) {
      return publicKey ** privateKey % this.p
    }
  }

  // resistorColor

  export const colorCode = (color) => {
    return COLORS.indexOf(color)
  };
  
  export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
  
  // resistorColorDuo

  export const decodedValue = (resistors) => {
    let firstTwoResistors = resistors.slice(0, 2)
    const numbers = firstTwoResistors.map(resistor => COLORS.indexOf(resistor))
    const joined = numbers.join('')
    return Number(joined)
  };
  
  const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

  // protein translation
  function splitToCodons(RNA) {
    if (!RNA) {
      return [];
    } else if (RNA.length % 3 !== 0) {
      throw new Error('Invalid codon');
    }
  
    const codons = []
    let i = 0
    while (i < RNA.length) {
      codons.push(RNA.slice(i, i+3))
      i += 3
    }
    return codons
  }
  
  function translateToProtein(codon) {
    const protein = codon === 'AUG' ? 'Methionine'
          : codon === 'UUU' || codon === 'UUC' ? 'Phenylalanine'
          : codon === 'UUA' || codon === 'UUG' ? 'Leucine'
          : codon === 'UCU' || codon === 'UCC' || codon === 'UCA' || codon === 'UCG' ? 'Serine'
          : codon === 'UAU' || codon === 'UAC' ? 'Tyrosine'
          : codon === 'UGU' || codon === 'UGC' ? 'Cysteine'
          : codon === 'UGG' ? 'Tryptophan'
          : codon === 'UAA' || codon === 'UAG' || codon === 'UGA' ? null
          : 'error'
    return protein
  }

  // instead of conditional chaining, could have turned codons into key-value pairs by name/codon that translate into that protein name and use .find/.map 
  
  // const codons = {
  //   Methionine: ['AUG'],
  //   Phenylalanine: ['UUU', 'UUC'],
  //   Leucine: ['UUA', 'UUG'],
  //   Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
  //   Tyrosine: ['UAU', 'UAC'],
  //   Cysteine: ['UGU', 'UGC'],
  //   Tryptophan: ['UGG'],
  //   STOP: ['UAA', 'UAG', 'UGA']
  // }

  export const translate = (RNA) => {
  
    const codons = splitToCodons(RNA)
  
    return codons
      .slice(0)
      .reduce((proteins, codon, i, arr) => {
        const protein = translateToProtein(codon)
  
        if (protein && protein !== 'error') {
          proteins.push(protein)
        } else if (protein === 'error') {
          console.log(proteins)
          throw new Error('Invalid codon')
        } else if (codons[0] === 'UAA' || codons[0] === 'UAG' || codons[0] === 'UGA') {
          proteins = []
        }
        
        if (codons[i-1] === 'UAA' || codons[i-1] === 'UAG' || codons[i-1] === 'UGA') {
          arr.splice(i-1)
          proteins.pop()
        }
  
        return proteins
      }, [])
  };