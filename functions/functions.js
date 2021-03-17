// Functions allow us to create reusable code in JavaScript

/* function heyBodhi() {
    console.log('Hi, Bodhi!');
}

heyBodhi(); */

// Functions always have the parentheses () at the end which
// can pass arguments
// everything inside the {} is run any time the function is called.

// Passing Values to Functions with Arguments
// parameters act as placeholders for the values that will be
// inputed to a function

/*
      function ourFunctionWithArgs(a, b) {
          console.log(a-b);
      }

      ourFunctionWithArgs(10, 5); will output 5 */

// Global Scope and Functions
// scope refers to the visibility of variables
// global variables refer to variables that can be read anywhere 
// in the JavaScript application.
// typeof is JavaScript keyword that will return the type of variable when you call it

/* var myGlobal = 10;

   function fun1() {

   }

   function fun2(){
       var output = "";
       if (typeof myGlobal != 'undefined') {
           output += "myGlobal: " + myGlobal;
       }
       if (typeof oopsGlobal != 'undefined') {
           output += " oopsGlobal: " + oopsGlobal;
       }
       console.log(output);
   }