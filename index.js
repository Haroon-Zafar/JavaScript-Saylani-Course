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


var num = +prompt("What is your fav Number ? ", 5);

// Modulus Operator is being used if Remainder is zero it means Number is fully divisible by.

if(num % 2 === 0 ){
    console.log("This is an even Number.")
}

else{
    console.log("This is not an even number.")
}