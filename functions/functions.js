// Functions allow us to create reusable code in JavaScript

/* function heyBodhi() {
    console.log('Hi, Bodhi!');
}

heyBodhi(); // will log 'Hi, Bodhi' */

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
        oopsGlobal = 5; if leave 'var' out when inside of function the variable
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
       console.log(output); // console will log "myGlobal: 10"
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
            var outerwear = "sweater"; console.log will return "sweater" over "T-shirt"

            return outerwear;
         }

         console.log(myOutfit()); will return "sweater"
         console.log(outerWear); will return "T-shirt" */

         // Return a Value from a Function with Return
         // you can return a value from a function with 'return'

         /* 
            function minusSeven(num) {
                return num -7;
            }

            console.log(minusSeven(10)); will return 3

            function timesFive(num) {
                return num * 5;
            }

            console.log(timesFive(5)); will return 25 */

    //Understanding Undefined Value Returned from a Function
    // Functions can have return values, but they don't have to

    /*
      var sum = 0;
      function addThree() {
          sum = sum + 3;
      } 
        */
    
    // if return value is not specified, then the return value will simply be undefined

    // Assignment with a Returned Value

    /* var changed = 0;

    function change(num) {
        return (num + 5) / 3;
    }

    changed = changed(10);

    var processed = 0;

    function processArg(num) {
        return (num + 3) / 5;
    }

    processed = processArg(7); which will evaluate to 2

    // Stand In Line
    // a queue is an abstract data structure in which items are kept in order
    /*
      function nextInLine(arr, item) {

        arr.push(item); // will push new item to back of an array
        return arr.shift(); // will return first item in the array
      }

    var testArr = [1,2,3,4,5];

    console.log("Before: " + JSON.stringify(testArr));
    console.log(nextInLin(testArr, 6));
    console.log("After: " + JSON.stringify(testArr));
    // JSON.stringify will convert an item such as an array to a string that will be
       printed to the console
    
    // console 1 will return Before: [1,2,3,4,5]
    // console 2 will return 1
    // console 3 will return After: [1,2,3,4,5,6]
    */

    // Boolean Values
    // A JavaScript datatype that returns true or false
    /*
      function welcomeToBooleans() {
          return true;
      } */

    // Use Conditional Logic with If Statements
    /*
      function ourTrueOrFalse(isItTrue) {
          if (isItTrue) {
              return "Yes, it's true";  // will return if condition is met
          }
          return "No, it's false"; // will return if condition is not met
      }

      function trueOrFalse(wasThatTrue){
          if (wasThatTrue) {
              return "Yes, that was true";
          }
          return "No, that was false";

      }

      console.log(trueOrFalse(true)); // will return "Yes, that was true" */

      // Comparison with the Equality Operator
      // most common boolean operator in JavaScript is the Equality Operator
      /*
         function testEqual(val) {
             if (val == 12) {
                 return "Equal";
             }
             return "Not Equal";
         }

         console.log testEqual(10); // would log "Not Equal" */

         // Comparison with the Strict Equality Operator
         // use === instead of ==, will not let 3 === '3' be equal because data types are not
         // the same
         /*
            function testStrict(val) {
                if (val === 7) {
                    return "Equal";
                }
                return "Not Equal";
            }

           console.log(testStrict('7')); // would return "Not Equal"

           // Practice Comparing Different Values
           /*
             function compareEquality(a, b) {
                 if (a == b) {
                     return "Equal";
                 }
                 return "Not Equal";
             }

             console.log(compareEquality(compareEquality(10, "10"));
             // would return "Equal" because of the == */
         


