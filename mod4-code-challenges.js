// 1
// Based on a series of stock prices I've saved from yesterday, write some code that could tell me the best profit possible if I had bought and sold stock during the day.
// For example: 
// given the stock prices below, the function should
// return 6 (buying for $5 and selling for $11, making a $6 profit)
// stock_prices_yesterday = [10, 7, 5, 8, 11, 9]
// Returns 6

// 2
// Given an integer, write a function to return its roman numeral representation.

// For example:

// integerToRoman(1) => “I”
// integerToRoman(4) => “IV”
// integerToRoman(49) => “XLIX”

// type of problem: patterns + match - each roman numeral corresponds to # value - so i would need to know what each is
// i = 1's
// X = 10's { i : 1, x: 10...}

// create an object mapping each roman numeral to # 
// conditions on - integer is smaller than 5, i'd know i only want to use I's as return value
// if integer is between 5-10
// this would be very lengthy-- 
