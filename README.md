# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rachelpr/lotide`

**Require it:**

`const _ = require('@rachelpr/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  `head(...)` : A function to retrieve the first element from an array
*  `tail(...)` : A functon to retrieve every element in array except for the first one
*  `middle(...)` : A function that returns the middle-most elements of the provided array
*  `countLetters(...)` : A function that will take in a string and return a count of each letter in the string
*  `countOnly(...)` : A function that takes an array and an object and returns the count of everything that the object listed
*  `eqArrays(...)` : A function that compares if two arrays are equal
*  `eqObjects(...)` : A function that will take in two objects and return true or false based on a perfect match
*  `findKey(...)` : A function that takes an object and a callback. Returns the first key for which the callback returns truthy
*  `findKeyByValue(...)` : A function that will take in an object and a value. Returns the first key that contains the given value
*  `flatten(...)` : A function that takes an array with nested elements and returns a "flattened" version
*  `letterPositions(...)` : A function that will return all the indices in the string provided
*  `map(...)` : A function that takes two arguments and returns a new array based on the results of the callback
*  `takeUntil(...)` : A function that will keep collecting items from a provided array until the callback provided returns truthy
*  `without(...)` : A function that will return a subset of elements, removing any that are unwanted
*  `assertArraysEqual(...)`: A function that will take two arrays and test them for equality and print a message to  the console
*  `assertEqual(...)`: A function that will test if two values are equal and prints an appropriate message 
*  `assertObjectsEqual(...)`: A function that will take in two objects and console.log an appropriate message