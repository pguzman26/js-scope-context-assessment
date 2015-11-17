'use strict';

// Study the following code. Then answer the questions that follow.
//
// NOTE: You must answer the first four questions before answer the last
// question. The last question asks you to change this code in a way that
// renders previous answers nonsensical.
//
// NOTE: Line numbers are annotated line numbers, not editor line numbers.

/*1*/ var alderaan = "Boom";
/*2*/ var deathStar = function deathStar(){
/*3*/   var laserQuantity = 1;
/*4*/   var laserSize = "huge";
/*5*/   var fire = function fire(){
/*6*/   conosole.log(this)
/*7*/   };
deathStar();
/*8*/ };

// Suppose we had declared another function between line 7 and 8. Would that
// new function have access to the value stored in the variable `laseQuantity`
// on line 3?
//
//     `true`
// This is a scope chain. And it does have access to laseQuantity on line 3.

var q1 = function q1() {
  something goes here.
}

};

//

// Which scope(s) may access the variable `laswerQuantity`? Choose one or many
// of the following:
//
//     `['alderaan', 'deathStar', 'fire', 'global']`
//
var q2 = [fire];
//

// Which of the following are defined within the scope of the `fire` function?
// Choose one or all of the following:
//
//     `['alderaan', 'chartreuse', 'frickinLasers', 'laserSize']`
//
var q3 = ['alderaan', 'laserSize'];
//

// Edit line 6 to read `conosole.log(this)`. Insert a line between 7 and 8 that
// invokes `fire`. If we invoked `deathStar` in a browser environment, what
// would the execution context of line 6 be?
//
var q4 =
//

// Edit line 1 to read `var alderaan = { name: 'Alderaan' }`.
//
// Refactor `deathStar` to be an object with properties and methods instead of
// function within a function.
//
// Finally, write the code that would call the `deathStar`'s `fire` method in
// the context of `alderaan`.
//
var q5 = function fireOnAlderaan () {
  // your code here
};
