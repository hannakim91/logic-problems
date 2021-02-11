// Cracking the coding interview questions:

  // Question 1 (More math/logic): You have a 5-quart jug, a 3-quart jug, and an unlimited supply of water (no other measuring cups and you can't measure "Half" of the given jugs). How would you come up with exactly 4-quarts of water?

  // fill the five quart jug
  // use the five quart full -> fill three quart jug
    // now five quart has 2 qt left (assuming no spill :-P)
  // empty the three quart jug
  // empty five quart jug into three quart (now five has 0, three has 2)
  // fill the five quart again
    // fill three quart using the five quart until three is full
  // now 4qt left in five quart