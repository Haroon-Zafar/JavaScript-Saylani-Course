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


var text; 

text = "This Is An Apple."

console.log(text);

// converting into lower-case 

console.log(text.toLowerCase());


