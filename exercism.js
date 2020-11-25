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