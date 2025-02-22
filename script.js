// import { add } from "/.math";

//console.log("2 nd java", userEmail);

//primitive types

// number
let userId = 0777385411;
console.log("User Id:", userId);
console.log("type of user id:", typeof userId);

// string

let userEmail = "rumesh@gmail.com";
console.log("User Email:", userEmail);
console.log("type of user Email:", typeof userEmail);

// Boolean
let isAuth = false;
console.log("User Auth:", isAuth);
console.log("type of user Auth:", typeof isAuth);

// Null
let phoneNUmber = null;
console.log("User phoneNUmber:", phoneNUmber);
console.log("type of user phoneNUmber:", typeof phoneNUmber);

// undefined
let dob;
console.log("User DOB:", dob);
console.log("type of user DOB:", typeof dob);

let uniqueId = Symbol("id");
console.log("User uniqueId:", uniqueId);
console.log("type of user uniqueId:", typeof uniqueId);

// object types
let person = { name: "Rumesh", age: 32 };
console.log("value of  person:", person);
console.log("type of  person:", typeof person);

let myArray = [1, 2, 3, 4, 5];
console.log("value of  myArray:", myArray);
console.log("type of  myArray:", typeof myArray);

function greet(name) {
  // template literals es6
  return `Hello, ${name}`;
}

console.log("value of  greet:", greet("rumesh"));
console.log("type of  greet:", typeof greet);

// after es6

const greetTwo = (name) => {
  return `Hello, ${name}`;
};

console.log("value of  greet2:", greetTwo("rumesh"));
console.log("type of  greet2:", typeof greetTwo);

//destructuring

let person1 = { name: "ranud", age: 10 };
const { name, age } = person1;

console.log("name:", person1.name);
console.log("age:", person1.age);

console.log("name:", name);
console.log("age:", age);

let user = {
  name: "rum",
  age: 32,
  data: {
    uuid: "34785666",
    image: ["ssssss", "sssss"],
  },
};

const { uuid } = user.data;
// optional chaining
//nullish
console.log("user uuid", user?.data?.uuid ?? "N/A");

// Spread & Rest Operator ES6

const myArray2 = [1, 2, 3, 4, 5];

// myArray2.push(6);
// myArray2.pop(2);

const myArray3 = [...myArray2, 6, 7];
console.log(myArray2, myArray3);

// import export

// console.log(math(100, 50));

const mainTitle = document?.querySelector("#main-title");
console.log(mainTitle);
