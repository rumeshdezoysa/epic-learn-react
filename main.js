// document.addEventListener("DOMContentLoaded", () => {
//   console.log("dom is ready");
// });

// variable declaration with var....
// global variable  can be access any where

// global variable
var userEmail = "rumesh@gmail.com"; //camel case
var user_email = "rumesh@gmail.com"; //sanke case
const APP_URL = "http://127.0.0.1:5500/index.html";
var UserEmail = "rumesh@gmail.com"; //pascal case

var message;

// ES6 2015
// scope locally and function wise
// local scope,hoysting     with var variable type..... unexpected behaviour

//block scoped...
{
  let message2;
  const message3 = "const";

  // can not assign value for const
  //   message3 = "const";
}

// function block
function myFunction() {
  let myVar = 5000;

  //   return myVar;
  console.log("Log2:", myVar);
}

// later initilization
message = "hello";
message2 = "ddd";
console.log(message);
// console.log(message2);
// console.log(myFunction());

myFunction();

//automatic declaration

x = 500;
console.log("automatic declar:", x);

// condition block

if (true) {
  let message2;
  message2 = "Sssss redeclaration let message2";
  console.log("if", message2);
}
