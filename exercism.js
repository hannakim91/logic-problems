// EASY
  
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