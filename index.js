// This is my first js code
// alert("Hello World");
// alert("Hello User");

// THERE ARE 3 DATA TYPES

//  STRING

//  "abcd!1231!^@%&$*!@#" ANY TYPE OF TEXT CAN BE WRITTEN IN STRING DATA TYPE

// NUMBER

//  5 123 1.012 -2 -123.123

//  BOOLEAN

// TRUE FALSE

//  Variable : I want to save this variable in JavaScript

// var greeting = "Hello World" ;

// alert("greeting");

// var num = 24;

// alert(num);

// var nationality;

// nationality = "Pakistani";

// var booleanVariable = false;

// Another Way of Declaring Variable :
// Declaring the name of the variable first then after that declaring the value.

//
// alert(nationality, booleanVariable);

//  LEGAL AND ILLEGAL VARIABLE NAMES

// var hello world = abc;

// USE UNDERSCORES

// var hello_world = "abc";

//  CAMEL CASE

// var helloWorld = "abc";

// var where is my bag ==== > var whereIsMyBag

// var myName = "Haroon";

// var num = 5;

// num = num + 6;

// var num2 = 6;

// alert(num + num2);

// % Remainder Operator
// alert(5 % 6);

//  CLASS # 02

// var num = 5;

// alert(num++);
// >> 5

// alert(num);
// >> 6

// var num = 5;

// ++num ;

// alert(num --);
// // 6

// alert(num);

// var num = 5;

// ++ num ; // 6

// var num2 = num -- ; // num2 = 6

// alert(++num + num2); // 12

// String Concatenation
// Using + plus sign to join two texts

// var num = 5;

// var text = "Hello";

// var text2 = 5;

// console.log( text2 + num + text );

//  PROMPTS :
// Used to take inputs from User

// Taking Input from User in a field having hint What is your Name ? and store it in name variable.

// var favoriteNumber = prompt("What is your Favorite Number ? ", 5);

// This 5 will be used as Hint in the Input Field and in case user hasn't input any number 5 will be used as default.

// Console.log will print the value which is stored in name variable.

// Here it is concatenated because variable is taken as Text/String
// console.log(favoriteNumber + 5);

// How to Convert String into Num

// var favoriteNumber = prompt("What is your Favorite Number ? ", 5);

// // There are two ways to convert String into Numeric

// favoriteNumber = parseInt(favoriteNumber);
// // if you give Text inside Input Field now, it will return Not a Number (NaN)
// console.log(favoriteNumber + 5);

// Comparision Operators

// var num = 5;
// var num2 = 6;

// Always Use tripple equals to sign

// console.log( num !== num2 );

// Difference Between tripple and double Equals to.

//  "5" == 5  >> true
//  "5" === 5 >> false

//  String to Num using +prompt
// var num = +prompt("What is your fav Number ? ", 5);

// console.log(num + 5)

//  IF THEN ELSE STATEMENTS

// var num = +prompt("What is your fav Number ? ", 5);

// // Modulus Operator is being used if Remainder is zero it means Number is fully divisible by.

// if(num % 3 === 0 && num % 5 === 0 ){
//     console.log("Divisible by both 3 and 5.")
// }
// else if (num % 3 === 0 ){
//     console.log("Divisible by Only 3")
// }

// else{
//     console.log("Divisible by only 5.")
// }

//  AND OPERATOR &&
// console.log(true && false);
// // false

// console.log(true && true);
// // true

// console.log(false && false);
// // false

// 0 means the condition is not fulfilled or false
// "" empty string also doesn't fulfill IF condition.
// undefined
// null
//  are all considered false

// if(null){console.
// log(true);}

// console.log("undefined" && undefined);

// OR || OPERATOR :

// console.log((null && undefined) );

// // Calculating Percentage:

// var num = +prompt("Type your percentage : ")
// var grade;

// if (num >= 0 || num <= 100) {
//     if( num >= 80 && num <= 100 ){
//         grade = "A+";
//     } else if( num >= 70  && num < 80){
//         grade = "A";
//     } else if( num >= 60 && num < 70  ){
//         grade = "B";
//     } else if( num >= 50 && num < 60){
//         grade = "C";
//     }else if( num >= 50 && num < 60 ){
//         grade = "D";
//     }else if( num >= 33 && num < 50 && num >= 0  ){
//         grade = "E";
//     }
//     else{
//         grade = "F";
//     }

//     }

// console.log(grade);

//  ARRAYS !!!

// var months = ["January", "February", ];

// console.log(months);
//  >> ["January", "February"]

var months = ["January", "February", "April", 4];

// Adding at a specific Index
// months[2] = "March";

// This method is not effective when there are so many elements, we have to keep the track of the last index. If we don't have the last index we can't add the element at the desired index.

// Method 2

// months.push("March");

// console.log(months);
// but now output will be without commas when indexing

// deletes the element from the very last index.
// months.pop();

// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
//  months.unshift(1);

// I want a specific part to be removed from array and previous and  next data item remains same.
// I'll do splicing
//  can append elements too.

// months.splice(2, 1, "March", "Haroon");

// .slice() produces a copy of the edited string

// months = months.slice(0,1);
// console.log(months);

// LOOPS

// 1. for
// 2. while
// 3. do-while

// FOR LOOP  :

// for( var i = 1 ; i <= 10 ; i++ ){

//     // code of For loop here
//     console.log("2 X " + i + " = " + i*2);

// }

//  Finding an element from an array
// Iteration throughout the array.
// var cities = ["Karachi", "Islamabad", "Lahore", "Peshawar"];

// var city = prompt("Write your city name ? ");

// var found = false ;

// for ( var i = 0 ; i <= cities.length ; i ++ ){

//     if ( city.toLowerCase() === cities[i].toLowerCase()) {
//         console.log("Found " + city);
//         // Use `break` so that loop will not iterate through again and again once it finds the target.
//         found = true;
//         break;
//     }
// }
// if (!found) {
//     console.log("Not Found", city);
// }

//  Multi Line Comments
// Printing Patterns
/*

*
* * 
* * * 
* * * *
* * * * *

*/

// for ( var i = 1 ; i <= 5 ; i++ ){

//     var star = "";

//     for ( var j = 1 ; j <= i ; j ++ ){
//         star = star + "* ";

//     }
//     console.log(star);

// }

// var array = [[1, 2, 3], ["a", "b", "c"]];

// for(var i = 0 ; i < array.length; i ++ ){

//     for (var j = 0 ; j < array[i].length ; j ++ ){
//         console.log(array[i][j]);
//     }
// }

// String Find, Replace & Numbers Generation, Round Off, Fixed Decimal Value

// var text;

// text = "World War II"

// console.log(text);

// // converting into lower-case

// console.log(text.toLowerCase());

// // CONVERTING INTO UPPER-CASE

// console.log(text.toUpperCase());

// // Length of String.

// var length = text.length;

// // console.log(length);

// // .slice() method : It makes a copy of the string without changing the actual string.
// // .slice() starting index, ending index - 1, )

// var textSlicing = text.slice(0,);

// console.log(textSlicing);

// // SEARCHING AND REPLACING THE BANNED STRING
// for( var i = 0 ; i < text.length ; i ++ ){

//     if ( text.slice(i, i + 12) === "World War II"){
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }

// }

// console.log(text);

//  But JS has a more efficient of doing this.
// using .indexOf() method

var text;

// text = "World War II"

// var firstChar = text.indexOf("World War II");

// if (firstChar !== -1){

//     text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
// }

// // means character at last index
// var lastCharacter = text.charAt(text.length - 1 );
// console.log(text);
// console.log(lastCharacter);

// // Replacing a String with another one with one method.

// // .replace("String you want to replace","String you want to put in place of that replaced one" )
// var replacedText;

// replacedText = text.replace("War", "Peace");
// console.log(replacedText);

// ROUNDING OFF NUMBERS :

var num = Math.random();

// console.log(Math.round(5.67));

// Ceiling Function --->   5.1 will be converted to 6 in ceiling function.
// .ceil() function

// console.log(Math.ceil(num));

// .floor() function
// 5.9 will be converted to 5

// console.log(Math.floor(num));

// GENERATING RANDOM NUMBERS
// always return random integer within 0-10 range.
// console.log(Math.floor(Math.random() * 100 ));

// // GUESSING A NUMBER GAME
// var guess = +prompt("Guess the number between 1-10");

// if (guess === num){
//     alert("Bingo! Correct Answer");
// }
// else if (guess === num + 1 || guess === num - 1 ){
//     alert("Close enough to the correct answer");
// }
// else {
//     alert("Try Again");
// }

// // CONVERTING STRING INTO NUMBER

// var num = 123;

// .toString() method

// var numToStr = num.toString();

// console.log(numToStr);

// // Fixing the decimal values of a number after a certain point.
// // .toFixed() returns a string.
// // .toFixed() method only prints the number of decimal values you want to print.
// console.log(num);
// console.log(num.toFixed(3));

// // to convert a string into a number which is returned by .toFixed() method. is to use the + sign before the string.

// console.log(+num.toFixed(3));

// DATE AND TIME
// new Date() method

// var date = new Date();
// console.log(date);

// Thu Sep 29 2022 23:30:40 GMT+0500 (Pakistan Standard Time)

// .toString() method

// console.log(date.toString());

// // .getDay() method
// // Starting from Sunday = 0
// console.log(date.getDay());

// // .getDate() method
// // returns the date of the month
// console.log(date.getDate());

// .getMonth() method
// returns the month of the year
// console.log(date.getMonth());

// .getFullYear() method
// returns the year
// console.log(date.getFullYear());

// .getHours() method
// returns the hours
// console.log(date.getHours());

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// console.log(dayNames[date.getDay()]);

// .getTime() method
// returns the time in milliseconds since January 1970

//  Used highly in comparision

// console.log(date.getTime());

// comparision of two dates

// var date1 = new Date("September 30, 2022");
// var date2 = new Date();

// // //  Convert miliseconds into seconds

// var timeInSeconds = (date2.getTime() - date1.getTime())/1000;

// //  Convert seconds into minutes

// var timeInMinutes = (timeInSeconds)/60;

// //  Convert minutes into hours

// var timeInHours = (timeInMinutes)/60;

// console.log(timeInHours);

// var date = new Date("September 30, 2026");

// // It means that it will return the day ( Monday, Tuesdat etc ) on Sep 30, 2026
// console.log(date.getDay());
// console.log(date.getMonth())

// //  Difference between two dates

// var today = new Date();
// var doomsday = new Date("June 30, 2035");

// var msToday = today.getTime();
// var msDoomsDay = doomsday.getTime();

// var msDiff = msDoomsDay - msToday;

// // 1000 = for seconds, 60 for minutes , 60 for hours, 24 for days, to get days
// var diff = msDiff/(1000 * 60 * 60 * 24);

// console.log(diff);

// if Time is Important you can specify it as well.

// var d = new Date("July 21, 1993 13:25:00");

//  we can set dates as well

// var date = new Date();

// console.log("Before Setting the setFullYear Function ", date.getFullYear());

// date.setFullYear(2023);

// console.log(date.getFullYear());

// THERE IS NO SUCH FUNCTION AS .setDay()

// ***********************************    FUNCTIONS    ***********************************
// Types of Functions :
//  Builtin Functions ( have round brackets in their ends. )
//  User Defined Functions ( have curly brackets in their ends. )
// always use function keyword to define a function.
// function functionName(){
//     // code
// }

// function tellTime() {
//   // tells the time
//   var now = new Date();
//   var theHr = now.getHours();
//   var theMin = now.getMinutes();
//   alert("Current Time : " + theHr + ":" + theMin);
// }

// we have to call this function. otherwise it is a dead piece of code which do nothing until and unless called upon.
// var time = tellTime();

// console.log(time);

// tellTime();

// function add(parametr1, parameter2) {
//   // var a = 10;
//   // var b = 20;
//   var c = parametr1 + parameter2;

  // return tells that the function is done and it will return the value of c to the variable which called this function.
//   return c;
// }
// if given parameters are not equal to the parameters in the function then it will return NaN ( Not a Number )
// console.log(add(10, 20));

// if some function is not returning anything then it will return undefined.

// var abc = 10;

// function demo(){
//     var abc = 20;
//     console.log(abc);
// }

// //  what value will be the outcome ?
// // it will print 20 because the variable abc is defined inside the function demo() and it is not a global variable. MEANS LOCAL VARIABLE IS PREFFERED OVER GLOBAL VARIABLE.
// demo();

// LOOPS

// // FOR LOOP

// for ( var i = 0; i < 10; i++){
//     console.log(i);
// }

// // WHILE LOOP

// var i = 0;
// while (i < 10){
//     console.log(i);
//     i++;
// }

// DO WHILE LOOP
// Important thing about this loop is that it will always run even when condition is false.
// var i = 0;
// do {
//     console.log(i);
//     i++;
// }
// while (i < 3);

// EVENTS
// Events are the actions that are performed by the user on the webpage.
// Events are of two types :
// 1. Builtin Events
// 2. User Defined Events
// Events are part of the DOM ( Document Object Model )

// function test(val) {
//   console.log(val);
// }

// onFocus and onBlur
// There are many textfields and you are writing in just one TextField so when you click on it, only it will be focused ( blue boundry appear or so and so ) and onBlur is opposite of that.    


// How to read the value of a textfield in js from html file. 
// now creating a function which will read the value of the textfield and print it in the console.
// there is a property in js DOM, it takes all the information about a specific field

// function checkAddress(fieldId){
//     if(document.getElementById(fieldId).value === ""){
//         alert("Please fill the address");
//     }
// }


// function checkVal(){
//     // in order to read the value of a textfield we have to use .document.getElementById().value
    
//     var textInput = document.getElementById("text1");
//     // why have we added .value beacuse it will return the value of the textfield. Otherwise the whole html line will be printed in the console.
//     console.log(textInput.value);   
// }

// .getElementById() method is used to get the entire information and value of a textfield.












// ADVANCED JS CLASS # 01 

// function abc(){
//   return function(){
//     return "Hello World";
//   }
// }
// // Calling the function abc()
// console.log(abc()()); // Hello World


// console.log(abc()); // it prints entire function. 
// ƒ (){
//   return "Hello World";
// }



// always use let and const instead of var.


// Scopes in JS
// 1. Global Scope
// 2. Local Scope
// 3. Block Scope


// Now local variables become everything inside the curly bracketts.
// it includes the functions, if else, for loops as well.


// IIFE means Immediately Invoked Function Expressions

// Function is kept within a round bracket and after the name of the function we have to add round brackets to call the function.
// this will cause the function to be called immediately after it is defined.
// It is called immediately not after it is defined but after it is defined and it is kept inside the round brackets.
// Why is it needed ? 

// (function (){
//   var foo = function (){
//     return 1;
//   }
//   foo() === 1;
//   ( function (){
//     var foo = function (){
//       return 2;
//     }
//     foo() === 2;
//   })
// })();


// // CASE # 01 


// // Here abc variable is LOCAL   
// (function (){
//   var abc = "Hello";
//   console.log(abc);

// })()


// // CASE # 02 

// // Here abc variable is GLOBAL
// // USE of GLOBAL VARIABLE IS RESTRICTED . 

// var abc = "Hello";
// console.log(abc);

// (function (){

// })()


// // If function is residing within curly brackets then it is a LOCAL FUNCTION.





// Hoisting in JS
// Hoisting means that the variables and functions are declared at the top of the code when a file is executed.
// Same happens with functions 


// var a; // Initializition
// Initialization means the alotment of memory to the variable.


// a = a + 1; // Assignment
// Assignment means that we are giving a value to the variable.


// Hoisting in functions 

// If a function is called before it is defined then it will not give any error. It will work just fine.
// It will work fine just because of Hoisting 
// xyz();


// function xyz(){
//   let abc = "Function is defined After it is called.";
//   console.log(abc);
// }


// // var vs let vs const

// // Using var
// a = 5;

// let a;

// console.log(a); // 5


// Using let 
// a = 5;

// let a;

// console.log(a); // Uncaught SyntaxError: Cannot access 'a' before initialization

// Why is it so ?
// Because let is a block scoped variable and var is a function scoped variable. 

// Hoisting doesn't work with let and const now.





// Arrow Functions or Lambda Functions

// Arrow functions are the new way of writing functions in JS.
// Arrow functions are also called as lambda functions in other languages.
// Lambda functions are the functions which are written in one line.


// .map() is a function which is used to iterate over an array.
// it takes a function as a parameter and it will iterate over the array and will return the value of the function.
// functions passed as parameter are called as CALLBACK FUNCTIONS.

// const evens = [2, 4, 6, 8, 10];

// function will take a value as a parameter and will return the value of the parameter.
// const odds = evens.map( function (val){
//   return val-1;
// });

// console.log(evens, odds); // [2, 4, 6, 8, 10]


// Arrow Function 

// function keyword is omitted
// parameter () brackets are omitted
// place a fat arrow => after the parameter
// any thing before fat arrow is parameter and after that is the return.

// const odds =   evens.map( val =>val-1);

// console.log(evens, odds); // [2, 4, 6, 8, 10]
// // works fine

// FOR RETURNING AN OBJECT. 

// const odds =   evens.map( val =>({odd: val-1, even: val}));

// console.log(evens, odds); // [2, 4, 6, 8, 10]


// For Multiple Parameters

// const odds =   evens.map( (val, index) =>val+index);
// // index is the second parameter of the function.
// // index = [0, 1, 2, 3, 4]
// console.log(evens, odds); // [2, 4, 6, 8, 10] [2, 5, 8, 11, 14]





// // DEFAULT PARAMETERS 

// // They are the parameters which are passed to the function if no parameter is passed to the function.

// function f(x, y = 7, z = 42){
//   return x + y + z;
// }

// console.log(f(1)) ; // 1 + 7 + 42 = 50




// REST PARAMETERS

// Rest parameters are the parameters which are passed to the function in the form of an array.
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
// Variadic functions are functions which take a variable number of arguments.
// unknown and can be adjusted at the time the method is called or executed.


// It will put all the parameters in an array and will return the length of the array.
// function f(x, y, ...a){
//   return (x + y) * a.length;
// }

// f(1, 2, "hello", true, 7) === 9; // true

// rest parameter is starting from a
// a is an array which contains all the parameters passed to the function.
// here in this case a = ["hello", true, 7]



// SPREAD OPERATORS

// Spread Operators are the operators which are used to spread the array into individual elements.

// const evens = [2, 4, 6, 8, 10];
// const evens2 = [12, 14, 16, 18, 20];

// // Merging two arrays

// const arr = [evens, evens2];

// console.log(arr); // [[2, 4, 6, 8, 10], [12, 14, 16, 18, 20]]
// // It produces a 2-D array 
// // but we wanted a single 1-D array from 2 - 20

// const evens = [2, 4, 6, 8, 10];
// const evens2 = [12, 14, 16, 18, 20];

// // Merging two arrays
// // WITH SPREAD OPEATOR 

// const arr = [...evens, ...evens2 ];

// console.log(arr); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const obj1 = {
  name : "Haroon",
}

const obj2 = {
  email : "mr.haroon@gmail.com",
}

const user = {...obj1, ...obj2};

console.log(user); // {  "name": "Haroon",  "email": "mr.haroon@gmail.com"}
