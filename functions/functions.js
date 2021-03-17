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
        oopsGlobal = 5; if leave var out when inside of function the variable
                        will remain global
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
   }  */

   // Local Scope and Functions

   // variables declared within functions as well as function parameters have 
   // local scope
   /*
      function myLocalScope() {
          var myVar = 5; variable only readable within the function
          console.log(myVar);
      }

      myLocalScope(); this will be able log myVar

      console.log(myVar); console will not be able to read myVar because it is trying
      to read the variable outside of the function. */

      // Global vs. Local Scope in Functions
      // it is possible to have local and global vraiables with the same name
      // in that situation the local variable takes precedence over the global variable

      /*
         var outerWear = "T-Shirt"; global variable because it is declared outside of
                          a function

         function myOutfit() {

            return outerwear;
         }

         console.log(myOutfit());