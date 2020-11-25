// EASY

  // Pangram
  export const isPangram = (string) => {
    const onlyLetters = string.replace(/(\W|_|\d)/g, '').toLowerCase()
    const set1 = new Set(onlyLetters)
    if (set1.size === 26) {
      return true
    }
    return false
  };

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
