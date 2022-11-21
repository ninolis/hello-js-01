'use strict';

//////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 1/36  Status: Done

/*
VARIABLE DECLARATION
Variables are used to store data and consist of an identifier (name) and an area of memory where their value is stored. A variable can be thought of as a box with an inscription (name) in which something lies (value).

<keyword> <variable name> = <value>
A variable declaration begins with the keyword const. Such a variable must be initialized with a value immediately, after that it cannot be overridden.

Attention
Creating a variable without the const keyword will result in an error.

const age = 20;
const username = "Mango";
const socialProfileTag = "@gluck";
const totalWorkerSalary = 4052;
In JavaScript, variable names are written in camelCase notation. The first word is written in lowercase letters, and each subsequent word begins with an uppercase letter. The names are case sensitive, that is, the variables user,usEr and User are different.

Declare two variables, productName for the product name and pricePerItem for storing the price per item. When declaring, assign the following product characteristics to the variables:

name - string "Droid"
price per item - number 2000
The variable productName is declared
The value of the variable productName is the string "Droid"
The variable pricePerItem is declared
The value of the variable pricePerItem is the number 2000
*/

// Change code below this line
/*
const productName = 'Droid';
console.log(productName);
// 'Droid'

const pricePerItem = 2000;
console.log(pricePerItem);
// 2000
*/

//////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 2/36  Status: Done

/*
OVERRIDING VALUES FOR VARIABLES
To declare a variable that we can assign a new value to in the future, use the keyword let. Creating a variable without the keyword let or const will result in an error.

let age = 5;
age = 10;

let username = "Mango";
username = "Poly";
An attempt to refer to a variable by name before its declaration will result in an error.

For example, you cannot try to read or change the value of a variable before declaring it:

// ❌ Wrong, there will be an error
age = 15; // ReferenceError: Cannot access 'age' before initialization
console.log(age); // ReferenceError: age is not defined

// Variable age declaration
let age = 20;

// ✅ Correct, we refer to the variable 'age' after the declaration
age = 25;
console.log(age); // 25
The name of the item has been changed to "Repair droid" and its price was increased by 1500 credits. Override the values of the pricePerItem and productName variables after they are declared.

The variable pricePerItem is declared with let
When declaring, the value - the number 2000 - is assigned to the variable pricePerItem
The new value that is 1500 more than the previous one is assigned to the variable pricePerItem
The variable productName is declared with let
When declaring, the value - the string "Droid" - is assigned to the variable productName
The new value - the string "Repair droid" - is assigned to the variable productName
 */

// Javascript Editor:
/*
let productName = 'Droid';
let pricePerItem = 2000;

// Change code below this line

productName = 'Repair droid';
pricePerItem += 1500;

console.log(productName, pricePerItem);
*/

//////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 3/36  Status: Done

/*
PRIMITIVE TYPES (NUMBERS, STRINGS, BOOLEANS)
In JavaScript, a variable is not associated with any data type; its value has a type. That is, a variable can store values ​​of different types.

Number - integers and floating-point numbers.
String - strings, a sequence of zero or more characters. The string begins and ends with a single ' or double quotation marks ".
Boolean - logical data type, status flags. There are only two values: true and false. For example, you can answer yes (true) or no (false) to the question "Is the light in the room is on?"
// Numbers
const age = 20;
const salary = 3710.84;

// Strings
const name = "Mango";
const description = "JavaSript essentials";

// Booleans
const isModalOpen = true;
const isLoggedIn = false;
Declare the following variables using the const or let keyword and assign the appropriate values to them.

topSpeed - number 160.
distance - number 617.54.
login - string "mango935".
isOnline - boolean true.
isAdmin - boolean false.
The variable topSpeed is declared
The value of the topSpeed variable is 160
The variable distance is declared
The value of the distance variable is the number 617.54
The variable login is declared
The value of the login variable is "mango935"
The variable isOnline is declared
The value of the isOnline variable is true
The variable isAdmin is declared
The value of the isAdmin variable is false
 */

// Javascript Editor:
/*
const topSpeed = 160;

const distance = 617.54;

const login = 'mango935';

const isOnline = true;

const isAdmin = false;
*/

//////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 4/36  Status: Done

/*
ARITHMETIC OPERATORS
The purpose, functionality and priority (order) of operations are no different from a high school algebra course. Operators return a value as the result of an expression.

const x = 10;
const y = 5;

// Addition
console.log(x + y); // 15

// Subtraction
console.log(x - y); // 5

// Multiplication
console.log(x * y); // 50

// Division
console.log(x / y); // 2
Useful
It is important to remember the correct naming of the components of an algebraic expression: +, -, * and / are called operators, and what they are used for (numbers) are operands.

Complete the code by assigning to the variable totalPrice an expression for calculating the total amount of the order. The variable pricePerItem stores the price of one product unit, and orderedQuantity - the number of product units in the order.

The variable pricePerItem is declared
The value of the variable pricePerItem is the number 3500
The variable orderedQuantity is declared
The value of the variable orderedQuantity is the number 4
The variable totalPrice is declared
The value of the variable totalPrice is the number 14000
Operator * used
 */

// Javascript Editor:
/*
const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = pricePerItem * orderedQuantity;
console.log(totalPrice);

*/

//////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 5/36  Status: Done

/*
TEMPLATE STRINGS
Template strings are an alternative to concatenation with more convenient syntax. The template string is enclosed in back quotes instead of double quotes, or single and may contain placeholders, which are denoted by a dollar sign and curly braces - ${expression}.

const guestName = "Mango";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, you are settled in ${roomNumber}`;
Declare the variable message and write in it a message about the purchase, a string in the format: "You picked <product name>, price per item is <product price> credits". Where <product name> and <product price> are the values ​​of the productName and pricePerItem variables. Use template string syntax.

The variable productName is declared
The value of the variable productName is the string "Droid"
The variable pricePerItem is declared
The value of the variable price is the number 3500
The variable message is declared
The value of the variable message is the string "You picked Droid, price per item is 3500 credits"
 */

// Javascript Editor:
/*
const productName = "Droid";
const pricePerItem = 3500;

// Change code below this line
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
console.log(message);
*/

//////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 6/36  Status: Done

/*
TASK: ORDERING A PRODUCT
A shop selling repair droids is ready to open, it remains to write a script to order them. Declare the variables and assign the appropriate values to them:

pricePerDroid - price per one droid, value 800
orderedQuantity - a number of droids in the order, value 6
deliveryFee - delivery fee, value 50
totalPrice - total price, do not forget about the delivery fee
message - message about the status of the order in the format "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."
The variable orderedQuantity is declared
The value of the orderedQuantity variable is the number 6
The variable pricePerDroid is declared
The value of the pricePerDroid variable is the number 800
The variable deliveryFee is declared
The value of the deliveryFee variable is the number 50
The variable totalPrice is declared
The value of the totalPrice variable is the number 4850
The variable message is declared
The value of the message variable is the string "You ordered droids worth 4850 credits. Delivery (50 credits) is included in total price."

 */

// Javascript Editor:
/*
// Change code below this line
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = deliveryFee + pricePerDroid * orderedQuantity;

const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
console.log(message);
*/

//////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 7/36  Status: Done

/*
DECLARING AND CALLING A FUNCTION
Function is a subroutine, an independent piece of code designed to repeatedly execute a specific task with different initial values.

A function can be thought of as a black box, it receives something at the input (data), and returns something at the output (the result of executing the code inside it).

// 1.  Declaration of the multiply function
function multiply() {
  // function body
  console.log("multiply function invocation");
}

// 2. Calling the multiply function
multiply(); // multiply function invocation
multiply(); // multiply function invocation
multiply(); // multiply function invocation
A function declaration begins with the keyword function, followed by its name - the verb that answers the question "What to do?" - and a pair of parentheses. The body of a function is enclosed in curly braces {} and contains instructions that must be executed when it is called. Then, when necessary, the function is called with a name and a pair of parentheses.

Declare a sayHi function, inside which you should add console.log() with the string "Hello, this is my first function!". After the declaration, call the sayHi function.

Function declaration expected
The name sayHi is assigned to the function
The body of the sayHi function contains console.log("Hello, this is my first function!")
After the declaration, there is a call to the sayHi function
 */

// Javascript Editor:
/*
// Change code below this line

function sayHi() {
  
  console.log("Hello, this is my first function!");
}

sayHi();
*/

//////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 8/36  Status: Done

/*
PARAMETERS AND ARGUMENTS
In parentheses, after the function name, there are parameters – an enumeration of the data that the function expects when called.

Parameters are local variables available only in the body of the function. They are separated by commas. There may be several parameters or they may not exist at all. In the latter case, just empty parentheses are written.

When calling a function, you can pass arguments in parentheses. Arguments are values for the declared parameters of the function.

// 1. Declaration of parameters x, y, and z
function multiply(x, y, z) {
  console.log(`The result of the multiplication is ${x * y * z}`);
}

// 2. Passing arguments
multiply(2, 3, 5); // The result of the multiplication is 30
multiply(4, 8, 12); // The result of the multiplication is 384
multiply(17, 6, 25); // The result of the multiplication is 2550
The order in which the arguments are passed must correspond to the order of the declared parameters: The value of the first argument will be assigned to the first parameter, the second argument to the second parameter, and so on.

The add function must be able to add three numbers and output the result to the console. Add three parameters to the function add, a, b and c, which will receive the values ​​of the arguments when it is called.

Complete console.log() to log the string "Addition result equals <result>", where <result> is the sum of the passed numbers.

The function add(a, b, c) is declared
The call add(15, 27, 10) outputs "Addition result equals 52" to the console
The calladd(10, 20, 30) outputs "Addition result equals 60" to the console
The call add(5, 10, 15) outputs "Addition result equals 30" to the console
Editor Javascript:
1
2
3
4
5
6
7
8
9
⌄
// Change code below this line
function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
  // Change code above this line
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);


 */

// Javascript Editor:
/*
// Change code below this line
function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
  // Change code above this line
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);
*/

//////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 9/36  Status: Done

/*
RETURNING VALUES
The return keyword is used to pass a value from the body of a function to external code. When the interpreter encounters a return, it immediately exits the function (terminates its execution), and returns the specified value to the place in the code where the function was called.

function multiply(x, y, z) {
  console.log("The code before return is executed as usual");

  // Return the result of the multiplication expression
  return x * y * z;

  console.log("This log will never be executed, it is after return");
}

// The result of the function can be saved to a variable
let result = multiply(2, 3, 5);
console.log(result); // 30

result = multiply(4, 8, 12);
console.log(result); // 384

result = multiply(17, 6, 25);
console.log(result); // 2550
A return keyword without an explicitly specified value returns the special value undefined. If there is no return in the body of the function, it will still return undefined.

Modify the code of the add function so that it returns the result of adding the values ​​of the three parameters a, b and c.

The function add(a, b, c) is declared
The add function has a return operator
The call add(15, 27, 10) returns52
The calladd(10, 20, 30) returns 60
The call add(5, 10, 15) returns 30
Calling a function with random but valid arguments returns the correct value
 */

// Javascript Editor:
/*

function add(a, b, c) {
  // Change code below this line
  return a + b + c;
 
  // Change code above this line
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

*/

//////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 10/36  Status: Done

/*
TASK: TEMPLATE STRINGS 2.0
The function makeMessage(name, price) composes and returns a message about the purchase. It declares two parameters, the values ​​of which will be set during its call.

name - product name
price - product price
Modify the function code so that the message variable contains the string "You picked <product name>, price per item is <product price> credits", where <product name> and <product price> are values of the parameters name and price. Use template string syntax.

Attention
Note that there are no calls to the makeMessage function in the code. From this task onwards, we will call your functions ourselves and check how they work. You will see the result of our checks in the Results block under the code editor.

The function makeMessage(name, price) is declared
The call makeMessage('Radar', 6150) returns "You picked Radar, price per item is 6150 credits"
The call makeMessage('Scanner', 3500) returns "You picked Scanner, price per item is 3500 credits"
The call makeMessage('Reactor', 8000) returns "You picked Reactor, price per item is 8000 credits"
The call makeMessage('Engine', 4070) returns "You picked Engine, price per item is 4070 credits"
 */

// Javascript Editor:
/*

function makeMessage (name, price) {
  // Change code below this line
   const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
};

makeMessage('Radar', 6150);
makeMessage('Scanner', 3500);
makeMessage('Reactor', 8000);
makeMessage('Engine', 4070);

*/

//////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 11/36  Status: Done

/*
TASK: MATH OPERATORS 2.0
The calculateTotalPrice function calculates and returns the total price. It takes two parameters, the values ​​of which will be assigned during its call.

orderedQuantity - the number of product units in the order
pricePerItem - price per item
Modify the function code so that the total price of the purchase, the result of multiplying the number of goods by the price of one, is recorded in the totalPrice variable.

The function calculateTotalPrice (orderedQuantity, pricePerItem) is declared
The call calculateTotalPrice(5, 100) returns 500
The call calculateTotalPrice(8, 60) returns 480
The call calculateTotalPrice(3, 400) returns 1200
The call calculateTotalPrice(1, 3500) returns 3500
The call calculateTotalPrice(12, 70) returns 840
Calling a function with random but valid arguments returns the correct value
 */

// Javascript Editor:
/*

function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerItem;;

  // Change code above this line
  return totalPrice;
};

console.log( calculateTotalPrice(5, 100)); // returns 500
console.log( calculateTotalPrice(8, 60)); // returns 480
console.log( calculateTotalPrice(3, 400)); // returns 1200
console.log( calculateTotalPrice(1, 3500)); // returns 3500
console.log( calculateTotalPrice(12, 70)); // returns 840

*/

//////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 12/36  Status: Done

/*
TASK: ORDERING PRODUCT 2.0
The makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) function composes and returns a repair droid purchase message. It declares three parameters, the values ​​of which will be set during its call.

orderedQuantity - number of droids in the order
pricePerDroid - price per droid
deliveryFee - delivery fee
Modify the function code so that it returns an order message in the format "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Don't forget about the delivery fee when calculating the total price.

The function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) is declared
The call makeOrderMessage(2, 100, 50) returns "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
The call makeOrderMessage(4, 300, 100) returns "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
The call makeOrderMessage(10, 70, 200) returns "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."
 */

// Javascript Editor:
/*

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line

const message = `You ordered droids worth ${pricePerDroid * orderedQuantity + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// You ordered droids worth 900 credits. Delivery (200 credits) is included in total price.

  // Change code above this line
  return message;
}

makeOrderMessage(2, 100, 50);
makeOrderMessage(4, 300, 100);
makeOrderMessage(10, 70, 200);

console.log( makeOrderMessage(2, 100, 50));
// returns "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."

console.log( makeOrderMessage(4, 300, 100));
// returns "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."

console.log( makeOrderMessage(10, 70, 200));
// returns "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."

*/

/////////////////////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 13/36  Status: Done

/*
COMPARISON OPERATORS >, >=, < AND <=
Comparison operators are used to compare two values. The result of their execution returns a boolean - true or false, that is, "yes" or "no".

> - more
< - less
>= - greater than or equal
<= - less or equal
const a = 2;
const b = 5;

console.log(a > b); // false
console.log(b > a); // true
console.log(a >= b); // false
console.log(b >= a); // true

console.log(a < b); // true
console.log(b < a); // false
console.log(a <= b); // true
console.log(b <= a); // false
The isAdult function declares one age parameter, the value of which will be set when it is called. Set the variable passed to an expression for checking the age of the user. A person is considered an adult at the age of 18 or over.

The isAdult(age) function is declared
The test expression uses the >= operator
The call isAdult(20) returns true
The call isAdult(14) returns false
The call isAdult(8) returns false
The call isAdult(37) returns true
 */

// Javascript Editor:
/*

function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;

  // Change code above this line
  return passed;
}

isAdult(20); // returns true
isAdult(14); // returns false
isAdult(8); // returns false
isAdult(37); // returns true

console.log(isAdult(20)); // returns true
console.log(isAdult(14)); // returns false
console.log(isAdult(8)); // returns false
console.log(isAdult(37)); // returns true

*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 14/36  Status: Done

/*
COMPARISON OPERATORS === AND !==
The "loose" operators == and != perform type conversion of compared values, which can lead to errors, especially for beginners.

// ❌ Bad, type casting is in progress
console.log(5 == "5"); // true
console.log(5 != "5"); // false
console.log(1 == true); // true
console.log(1 != true); // false
Therefore, to test for equality or inequality of two values, the operators === (strict equality) and !== (strict inequality) are used, which do not cast the types of the operands.

// ✅ Good, no casting is done
console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true
The isValidPassword(password) function checks the equality of the stored and entered passwords and returns the result of the check - boolean true or false. The variable SAVED_PASSWORD stores the value of the previously saved password. The entered password is passed to the password parameter.

Assign to the variable isMatch an expression for checking the equality of the previously entered and saved passwords. The result of the test expression must be true if the values ​​match, and false if not.

The function isValidPassword(password) is declared
The operator === is used in the password test expression
The call isValidPassword("mangodab3st") returns false
The call isValidPassword("kiwirul3z") returns false
The call isValidPassword("jqueryismyjam") returns true
 */

// Javascript Editor:
/*

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = SAVED_PASSWORD === password;

  // Change code above this line
  return isMatch;
}

isValidPassword("mangodab3st"); // returns false
isValidPassword("kiwirul3z"); // returns false
isValidPassword("jqueryismyjam"); // returns true

console.log( isValidPassword("mangodab3st")); // returns false
console.log( isValidPassword("kiwirul3z")); // returns false
console.log( isValidPassword("jqueryismyjam")); // returns true

*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 15/36  Status: Done

/*
STATEMENT IF...ELSE
Branches are used to execute different code depending on the condition. The principle of operation is simple - the result of the expression in the condition of the if block is converted to the boolean true or false.

if (condition) {
  // body if
} else {
  // body else
}
If the condition is converted to true, then the code in curly braces of the if body is executed, and the else block is ignored.

let cost;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 100
If the condition is converted to false, the code of the if block will be skipped, and the code in curly braces after the else block will be executed.

let cost;
const subscription = "free";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 0
Add the expression for checking the age of the user, the value of the age parameter, to the condition for the if statement.

If the user is an adult, the if block should be executed and the string "You are an adult" is written to the message variable.
Otherwise, the else block must be executed and the line "You are a minor" is written.
The function checkAge(age) is declared
The >= operator is used in the age test expression
The call checkAge(20) returns "You are an adult"
The call checkAge(8) returns "You are a minor"
The call checkAge(14) returns "You are a minor"
The call checkAge(38) returns "You are an adult"
 */

// Javascript Editor:
/*

function checkAge(age) {
  let message;

  if (age >= 18) { // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}

checkAge(20); // returns "You are an adult"
checkAge(8); // returns "You are a minor"
checkAge(14); // returns "You are a minor"
checkAge(38); // returns "You are an adult"

console.log(checkAge(20)); // returns "You are an adult"
console.log(checkAge(8)); // returns "You are a minor"
console.log(checkAge(14)); // returns "You are a minor"
console.log(checkAge(38)); // returns "You are an adult"

*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 16/36  Status: Done

/*
TASK: GOODS WAREHOUSE
The checkStorage(available, ordered) function checks the order capability and returns a result message. It declares two parameters, the values ​​of which will be set during its call:

available - the total number of products in the warehouse
ordered - units of goods in the order
Using branches, modify the function code so that:

If the order contains a number exceeding the number of goods in stock, the string "Not enough goods in stock!" Is written to the message variable.
Otherwise, the string "Order is processed, our manager will contact you." is written.
The function checkStorage(available, ordered) is declared.
The call checkStorage(100, 50) returns "Order is processed, our manager will contact you."
The call checkStorage(100, 130) returns "Not enough goods in stock!"
The call checkStorage(200, 20) returns "Order is processed, our manager will contact you."
The call checkStorage(200, 150) returns "Order is processed, our manager will contact you."
The call checkStorage(150, 180) returns "Not enough goods in stock!"
 */

// Javascript Editor:
// START
/*

function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  // Change code above this line
  return message;
}


*/

// Javascript Editor:
// FINISH
/*

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (available >= ordered) {
      message = 'Order is processed, our manager will contact you.';
    } else {
      message = 'Not enough goods in stock!';
    }
  // Change code above this line
  return message;
}

checkStorage(100, 50); // returns "Order is processed, our manager will contact you."
checkStorage(100, 130); // returns "Not enough goods in stock!"
checkStorage(200, 20); // returns "Order is processed, our manager will contact you."
checkStorage(200, 150); // returns "Order is processed, our manager will contact you."
checkStorage(150, 180); // returns "Not enough goods in stock!"

console.log(checkStorage(100, 50)); // returns "Order is processed, our manager will contact you."
console.log(checkStorage(100, 130)); // returns "Not enough goods in stock!"
console.log(checkStorage(200, 20)); // returns "Order is processed, our manager will contact you."
console.log(checkStorage(200, 150)); // returns "Order is processed, our manager will contact you."
console.log(checkStorage(150, 180)); // returns "Not enough goods in stock!"

*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 17/36  Status: Done

/*
COMBINED ASSIGNMENT OPERATORS
Combined operators are a shorter way of assigning a new value to a variable based on its previous value.

We will increase the value of the age variable by one from the previous value, simulating updating the age after the user's birthday.

let age = 25;
// Classic notation
age = age + 1;
console.log(age); // 26
The right side of the expression is executed first. Instead of age, 25 is substituted, the addition operation is performed, and 26 is written to the variable age

Let's refactor the age update operation using the combined assignment operator with addition.

let age = 25;
// Just shorter notation, works the same
age += 1;
console.log(age); // 26
Replace the expression with the standard math operators with the combined assignment operator with addition, subtraction, multiplication, and division.

The value of the variable a is equal to 7
Operator += used
The value of the variable b is equal to 6
Operator -= used
The value of the variable c is equal to 45
Operator *= used
The value of the variable d is equal to 2
Operator /= used
 */

// Javascript Editor:
// START
/*
let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a = a + 2;
b = b - 4;
c = c * 3;
d = d / 10;

*/

// Javascript Editor:
// FINISH
/*

let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

console.log(a); // returns 7
console.log(b); // returns 6
console.log(c); // returns 45
console.log(d); // returns 2


a += 2;
b -= 4;
c *= 3;
d /= 10;

// This time:
console.log(a); // returns 9
console.log(b); // returns 2
console.log(c); // returns 135
console.log(d); // returns 0.2

*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 18/36  Status: Done

/*
TASK: BALANCE CHECKING
The repair droid sales station is ready, all that remains is to write the software for the sales department.

The makeTransaction(pricePerDroid, orderedQuantity, customerCredits) function executes the transaction for the sale of droids and returns a message about the result of the operation. It declares three parameters, the values ​​of which will be set during its call:

pricePerDroid - price per droid
orderedQuantity - number of ordered droids
customerCredits - amount of funds on the customer's account
Add the following functionality to it:

Declare the variable totalPrice to store the total amount of the order and assign it an expression for calculating this amount.
Add a check to find out if the client can pay for the order:
if the amount to be paid exceeds the number of credits on the client's account, write the string "Insufficient funds!" to the message variable;
otherwise, subtract the purchase cost from the client's account and write a message to the message variable: "You ordered <number> droids, you have <number> credits left".
The function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) is declared
The call makeTransaction(3000, 5, 23000) returns "You ordered 5 droids, you have 8000 credits left"
The call makeTransaction(1000, 3, 15000) returns "You ordered 3 droids, you have 12000 credits left"
The call makeTransaction(5000, 10, 8000) returns "Insufficient funds!"
The call makeTransaction(2000, 8, 10000) returns "Insufficient funds!"
The call makeTransaction(500, 10, 5000) returns "You ordered 10 droids, you have 0 credits left"
 */

// Javascript Editor:
// START
/*
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line

  // Change code above this line
  return message;
}
*/

// Javascript Editor:
// FINISH
/*

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  const totalPrice = pricePerDroid * orderedQuantity;
  // if (customerCredits >= totalPrice) {
  //   message = `You ordered ${orderedQuantity} droids, you have ${
  //     customerCredits - totalPrice
  //   } credits left`;
  // } else {
  //   message = 'Insufficient funds!';
  // }

  if (totalPrice > customerCredits) {
    message = 'Insufficient funds!';
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } credits left`;
  }
  // Change code above this line
  return message;
}

makeTransaction(3000, 5, 23000); // returns "You ordered 5 droids, you have 8000 credits left"
makeTransaction(1000, 3, 15000); // returns "You ordered 3 droids, you have 12000 credits left"
makeTransaction(5000, 10, 8000); // returns "Insufficient funds!"
makeTransaction(2000, 8, 10000); // returns "Insufficient funds!"
makeTransaction(500, 10, 5000); // returns "You ordered 10 droids, you have 0 credits left"

console.log(makeTransaction(3000, 5, 23000)); // returns "You ordered 5 droids, you have 8000 credits left"
console.log(makeTransaction(1000, 3, 15000)); // returns "You ordered 3 droids, you have 12000 credits left"
console.log(makeTransaction(5000, 10, 8000)); // returns "Insufficient funds!"
console.log(makeTransaction(2000, 8, 10000)); // returns "Insufficient funds!"
console.log(makeTransaction(500, 10, 5000)); // returns "You ordered 10 droids, you have 0 credits left"

*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 19/36  Status: Done

/*
ELSE...IF BLOCK
The if...else construction can check and react to the fulfillment or non-fulfillment of only one condition.

let cost;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 100
The else...if block allows you to add another if statement with a condition after the else. At the end of the chain there can be a classic else block, which will be executed only if none of the conditions will be converted to true.

let cost;
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log(`Invalid subscription type - ${subscription}`);
}

console.log(cost); // 500
At the first satisfying condition, the checks will stop and only the body of the corresponding if block will be executed. Therefore, such an entry should be read as: "looking for the first fulfillment of the condition, ignoring everything else."

The checkPassword(password) function gets the user's password in the password parameter, checks it against the administrator password in the variable ADMIN_PASSWORD and returns the message about the result of the comparison, stored in the variable message.

If the value of the password parameter is null, then the user canceled the operation and the string "Canceled by user!" is written to the message variable.
If the value of the password parameter is the same as the value of ADMIN_PASSWORD, the string "Welcome!" is assigned to the variable message.
If none of the previous conditions are met, the string "Access denied, wrong password!" is written to the message variable.
The function checkPassword(password) is declared
The call checkPassword("mangohackzor") returns "Access denied, wrong password!"
The call checkPassword(null) returns "Canceled by user!"
The call checkPassword("polyhax") returns "Access denied, wrong password!"
The call checkPassword("jqueryismyjam") returns "Welcome!"
 */

// Javascript Editor:
// START
/*
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if () { // Change this line
    message =  'Canceled by user!';
  } else if () { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}
*/

// Javascript Editor:
// FINISH
/*

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { 
    message =  'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) { 
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

checkPassword("mangohackzor"); // returns "Access denied, wrong password!"
checkPassword(null); // returns "Canceled by user!"
checkPassword("polyhax"); // returns "Access denied, wrong password!"
checkPassword("jqueryismyjam"); // returns "Welcome!"

console.log(checkPassword("mangohackzor")); // returns "Access denied, wrong password!"
console.log(checkPassword(null)); // returns "Canceled by user!"
console.log(checkPassword("polyhax")); // returns "Access denied, wrong password!"
console.log(checkPassword("jqueryismyjam")); // returns "Welcome!"

*/

/*
RESULT

right answer
'Function Declaration' expected

right answer
The name 'checkPassword' is assigned to the function

right answer
The function 'checkPassword' has one parameter 'password'

right answer
The call checkPassword('mangohackzor') returns'Access denied, wrong password!'

right answer
The call checkPassword(null) returns'Canceled by user!'

right answer
The call checkPassword('polyhax') returns'Access denied, wrong password!'

right answer
The call checkPassword('jqueryismyjam') returns'Welcome!'
*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 20/36  Status: Done

/*
** TASK
The checkStorage(available, ordered) function checks the checkout capability and returns a result message. It declares two parameters, the values ​​of which will be set during its call.

available - available quantity of goods in the warehouse
ordered - units of goods in the order
Using branches, add the function code so that:

If there are no products in the order yet, that is, the value of the ordered parameter is equal to 0, the string "There are no products in the order!" is assigned to the message variable.
If there are more goods in the order than there are available in the warehouse, then the string "Your order is too large, there are not enough items in stock!" is assigned to the variable message`.
Otherwise, the string "The order is accepted, our manager will contact you" is assigned to the variable message.

** Test
The function checkStorage(available, ordered) is declared
The call checkStorage(100, 50) returns "The order is accepted, our manager will contact you"
The call checkStorage(100, 130) returns "Your order is too large, there are not enough items in stock!"
The call checkStorage(70, 0) returns "There are no products in the order!"
The call checkStorage(200, 20) returns "The order is accepted, our manager will contact you"
The call checkStorage(200, 250) returns "Your order is too large, there are not enough items in stock!"
The call checkStorage(150, 0) returns "There are no products in the order!"

 */

// Javascript Editor:
// START
/*
function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  // Change code above this line
  return message;
}
*/

// Javascript Editor:
// FINISH
/*

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (ordered === 0) {
    message = 'There are no products in the order!';
  } else if (ordered > available) {
    message = 'Your order is too large, there are not enough items in stock!';
  } else {
    message = 'The order is accepted, our manager will contact you';
  }
  // Change code above this line
  return message;
}

checkStorage(100, 50); // returns "The order is accepted, our manager will contact you"
checkStorage(100, 130); // returns "Your order is too large, there are not enough items in stock!"
checkStorage(70, 0); // returns "There are no products in the order!"
checkStorage(200, 20); // returns "The order is accepted, our manager will contact you"
checkStorage(200, 250); // returns "Your order is too large, there are not enough items in stock!"
checkStorage(150, 0); // returns "There are no products in the order!"

console.log(checkStorage(100, 50)); // returns "The order is accepted, our manager will contact you"
console.log(checkStorage(100, 130)); // returns "Your order is too large, there are not enough items in stock!"
console.log(checkStorage(70, 0)); // returns "There are no products in the order!"
console.log(checkStorage(200, 20)); // returns "The order is accepted, our manager will contact you"
console.log(checkStorage(200, 250)); // returns "Your order is too large, there are not enough items in stock!"
console.log(checkStorage(150, 0)); // returns "There are no products in the order!"

*/

// RESULT
/*
'Function Declaration' expected
The name 'checkStorage' is assigned to the function
The function 'checkStorage' has two parameters: 1st - 'available', 2nd - 'ordered'
The call checkStorage(100, 50) returns'The order is accepted, our manager will contact you'
The call checkStorage(100, 130) returns'Your order is too large, there are not enough items in stock!'
The call checkStorage(70, 0) returns'There are no products in the order!'
The call checkStorage(200, 20) returns'The order is accepted, our manager will contact you'
The call checkStorage(200, 250) returns'Your order is too large, there are not enough items in stock!'
The call checkStorage(150, 0) returns'There are no products in the order!'
Result of code execution:
The order is accepted, our manager will contact you
Your order is too large, there are not enough items in stock!
There are no products in the order!
The order is accepted, our manager will contact you
Your order is too large, there are not enough items in stock!
There are no products in the order!
*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 21/36  Status: Done

/*
** THEORY
Logical operators are used to test conditions with multiple expressions, such as branching.

The && operator converts all operands to a boolean and returns the value of one of them. It returns the left operand, if it can be converted to false, and the right operand otherwise.

expression && expression 
In the following example, both conditions will return true, so the whole expression will return true - the value of the right operand will be returned.

const age = 20;
console.log(age > 10 && age < 30); // true && true -> true
If at least one of the operands converts to false, that operand will be the expression result.

const age = 50;
console.log(age > 10 && age < 30); // true && false -> false
console.log(age > 80 && age < 120); // false && true -> false
That is, the logical "AND" stumbles on a lie and returns what it stumbled on or the last operand.

console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true

console.log(3 && false); // false
console.log(false && 3); // false
console.log(3 && true); // true
console.log(true && 3); // 3
Useful
Remember the six values ​​that are converted to `false`: `0`, `NaN`, `null`, `undefined`, an empty string `""` or `''` and the value `false` itself. Everything else is converted to `true`.

console.log(1 && 5); // true && true -> 5
console.log(5 && 1); // true && true -> 1
console.log(0 && 2); // false && true -> 0
console.log(2 && 0); // true && false -> 0
console.log("" && "Mango"); // false && true -> ''
console.log("Mango" && ""); // true && false -> ''
console.log("Mango" && "Poly"); // true && true -> 'Poly'
console.log("Poly" && "Mango"); // true && true -> 'Mango'


** TASK

The isNumberInRange(start, end, number) function checks if a number is in the range. It declares three parameters, the values ​​of which will be set during its call:

number - the number; the function check if the number is in the range
start - start of a number range
end - end of a number range
Assign to the variable isInRange an expression to test for the occurrence of number in a numeric range from start to end. That is, the number must be greater than or equal to start and less than or equal to end. The result of the test expression will be boolean true or false.


** Test
The function isNumberInRange(start, end, number) is declared
The && operator is used in the test expression
The call isNumberInRange(10, 30, 17) returns true
The call isNumberInRange(10, 30, 5) returns false
The call isNumberInRange(20, 50, 24) returns true
The call isNumberInRange(20, 50, 76) returns false

isNumberInRange(10, 30, 17); // returns true
isNumberInRange(10, 30, 5); // returns false
isNumberInRange(20, 50, 24); // returns true
isNumberInRange(20, 50, 76); // returns false

console.log(isNumberInRange(10, 30, 17)); // returns true
console.log(isNumberInRange(10, 30, 5)); // returns false
console.log(isNumberInRange(20, 50, 24)); // returns true
console.log(isNumberInRange(20, 50, 76)); // returns false


 */

// Javascript Editor:
// START
/*

function isNumberInRange(start, end, number) {
  const isInRange = ; // Change this line

  return isInRange;
}

*/

// Javascript Editor:
// FINISH
/*
function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // Change this line

  return isInRange;
}

isNumberInRange(10, 30, 17); // returns true
isNumberInRange(10, 30, 5); // returns false
isNumberInRange(20, 50, 24); // returns true
isNumberInRange(20, 50, 76); // returns false

isNumberInRange(10, 30, 17); // returns true
isNumberInRange(10, 30, 5); // returns false
isNumberInRange(20, 50, 24); // returns true
isNumberInRange(20, 50, 76); // returns false

console.log(isNumberInRange(10, 30, 17)); // returns true
console.log(isNumberInRange(10, 30, 5)); // returns false
console.log(isNumberInRange(20, 50, 24)); // returns true
console.log(isNumberInRange(20, 50, 76)); // returns false

*/

// RESULT
/*
'Function Declaration' expected
The name 'isNumberInRange' is assigned to the function
The function 'isNumberInRange' has three parameters: 1st - 'start', 2nd - 'end', 3rd - 'number'
The '&&' operator is used in the test expression
The call isNumberInRange(10, 30, 17) returns true
The call isNumberInRange(10, 30, 5) returns false
The call isNumberInRange(20, 50, 24) returns true
The call isNumberInRange(20, 50, 76) returns false

Result of code execution:
true
false
true
false
*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 22/36  Status: Done

/*
** THEORY
The operator || converts all operands to a boolean and returns the value of one of them. It returns the left operand, if it can be converted to true, and the right operand otherwise.

expression || expression
In the following example, the condition on the left will return true, so the result of the whole expression will be true - the value of the first operand which was converted to true will be returned.

const age = 5;
console.log(age < 10 || age > 30); // true || false -> true
Here the result will also be true, since at least one of the operands, in this case the right one, was converted to true.

const age = 40;
console.log(age < 10 || age > 30); // false || true -> true
And here none of the conditions are met, so we get false - the value of the last operand.

const age = 20;
console.log(age < 10 || age > 30); // false || false -> false
That is, the logical "OR" stumbles on the truth and returns what it stumbled on, or, it returns the last operand.

console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true

console.log(3 || false); // 3
console.log(false || 3); // 3
console.log(3 || true); // 3
console.log(true || 3); // true

** TASK
The checkIfCanAccessContent(subType) function checks if the user can access the content. The check is carried out by the type of subscription. Only users with a pro or vip subscription can be accessed.

Set the variable canAccessContent to a subscription test expression. If the value of the subType parameter is equal to the strings "pro" or "vip", the user will have access. The result of the test expression will be boolean true or false.

** Test
The function checkIfCanAccessContent(subType) is declared
The operator || is used in the test expression
The call checkIfCanAccessContent("pro") returns true
The call checkIfCanAccessContent("starter") returns false
The call checkIfCanAccessContent("vip") returns true
The call checkIfCanAccessContent("free") returns false

console.log(checkIfCanAccessContent("pro")); // returns true
console.log(checkIfCanAccessContent("starter")); // returns false
console.log(checkIfCanAccessContent("vip")); // returns true
console.log(checkIfCanAccessContent("free")); // returns false


 */

// Javascript Editor:
// START
/*
function checkIfCanAccessContent(subType) {
  const canAccessContent = ; // Change this line

  return canAccessContent;
}
*/

// Javascript Editor:
// FINISH
/*

function checkIfCanAccessContent(subType) {

  const canAccessContent = subType === "vip" || subType === "pro"; // Change this line

  return canAccessContent;
}

checkIfCanAccessContent("pro"); // returns true
checkIfCanAccessContent("starter"); // returns false
checkIfCanAccessContent("vip"); // returns true
checkIfCanAccessContent("free"); // returns false


console.log(checkIfCanAccessContent("pro")); // returns true
console.log(checkIfCanAccessContent("starter")); // returns false
console.log(checkIfCanAccessContent("vip")); // returns true
console.log(checkIfCanAccessContent("free")); // returns false

*/

// RESULT
/*
Result

Done

Assignment 22/36
'Function Declaration' expected
The name 'checkIfCanAccessContent' is assigned to the function
The function 'checkIfCanAccessContent' has one parameter - 'subType'
The test expression uses the '||' operator
The call checkIfCanAccessContent('pro') returns true
The call checkIfCanAccessContent('starter') returns false
The call checkIfCanAccessContent('vip') returns true
The call checkIfCanAccessContent('free') returns false

Result of code execution:
true
false
true
false

*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 23/36  Status: Done

/*
** THEORY
All the operators we've looked at before were binary. This means they contained two operands: left and right. Logical "NOT" is a unary operator that performs an operation on one operand to the right.

!expression
The operator ! converts the operand to a boolean, if necessary, and then does the inverse - replaces it with the opposite true -> false or false -> true.

console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !'Mango' -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !'' -> !false -> true

const isOnline = true;
const isNotOnline = !isOnline; // !isOnline -> !true -> false

** TASK
The isNumberNotInRange(start, end, number) function checks if a number is in a range. That is, the number must be less than or equal to start and greater than or equal to end. The result of the test expression will be boolean true or false.

It declares three parameters, the values ​​of which will be set during its call:

number - a number whose occurrence is checked to be not in the range
start - start of a numeric range
end - end of a numeric range
Assign to the variable isNotInRange the expression of the inverse of the variable isInRange value using the operator !.


** Test
The function isNumberNotInRange(start, end, number) is declared
The expression used the ! operator
The call isNumberNotInRange(10, 30, 17) returns false
The call isNumberNotInRange(10, 30, 5) returns true
The call isNumberNotInRange(20, 50, 24) returns false
The call isNumberNotInRange(20, 50, 76) returns true


 */

// Javascript Editor:
// START
/*

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = ; // Change this line

  return isNotInRange;
}

*/

// Javascript Editor:
// FINISH
/*

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  return isNotInRange;
}

isNumberNotInRange(10, 30, 17); // returns false
isNumberNotInRange(10, 30, 5); // returns true
isNumberNotInRange(20, 50, 24); // returns false
isNumberNotInRange(20, 50, 76); // returns true

console.log(isNumberNotInRange(10, 30, 17)); // returns false
console.log(isNumberNotInRange(10, 30, 5)); // returns true
console.log(isNumberNotInRange(20, 50, 24)); // returns false
console.log(isNumberNotInRange(20, 50, 76)); // returns true

*/

// RESULT
/*
Result

Done

Assignment 23/36
'Function Declaration' expected
The name 'isNumberNotInRange' is assigned to the function
The function 'isNumberNotInRange' has three parameters: 1st - 'start', 2nd - 'end', 3rd - 'number'
The operator '!' is used in the test expression
The call isNumberNotInRange(10, 30, 17) returns false
The call isNumberNotInRange(10, 30, 5) returns true
The call isNumberNotInRange(20, 50, 24) returns false
The call isNumberNotInRange(20, 50, 76) returns true

Result of code execution:
false
true
false
true
*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 24/36  Status: Done

/*
** THEORY
same as before
** TASK
The getDiscount(totalSpent) function determines the discount value depending on the total amount of money spent (the totalSpent parameter) in the store for the entire time (affiliate program). The discount is written to the variable discount and returns from the function as a result of its operation.

Using branches and logical operators, complete the function code.

If spent from 50,000 (inclusive) or more credits - discount 10%(golden partner)
If spent from 20,000 (inclusive) to 50,000 credits - discount 5% (silver partner)
If spent from 5000 (inclusive) to 20,000 credits - discount 2% (bronze partner)
If spent less than 5000 credits - discount 0 (basic partner)
Discount values ​​for each level are stored in the constants of the same name. BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT and GOLD_DISCOUNT.

** Test
The function getDiscount(totalSpent) is declared
The call getDiscount(137000) returns 0.1
The call getDiscount(46900) returns 0.05
The call getDiscount(8250) returns 0.02
The call getDiscount(1300) returns 0
The call getDiscount(5000) returns 0.02
The call getDiscount(20000) returns 0.05
The call getDiscount(50000) returns 0.1

 */

// Javascript Editor:
// START
/*

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line

  // Change code above this line
  return discount;
}

*/

// Javascript Editor:
// FINISH
/*
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {  
    discount = SILVER_DISCOUNT;
  }  else if (totalSpent >= 5000 && totalSpent < 20000) {  
    discount = BRONZE_DISCOUNT;
  }  else {  
    discount = BASE_DISCOUNT;
  }  
  // Change code above this line
// **** OR
  // Change code below this line
  if (totalSpent < 5000) {
    discount = BASE_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else {
    discount = GOLD_DISCOUNT;
  }
  // Change code above this line

  return discount;
}
getDiscount(137000); // returns 0.1
getDiscount(46900); // returns 0.05
getDiscount(8250); // returns 0.02
getDiscount(1300); // returns 0
getDiscount(5000); // returns 0.02
getDiscount(20000); // returns 0.05
getDiscount(50000); // returns 0.1

console.log(getDiscount(137000)); // returns 0.1
console.log(getDiscount(46900)); // returns 0.05
console.log(getDiscount(8250)); // returns 0.02
console.log(getDiscount(1300)); // returns 0
console.log(getDiscount(5000)); // returns 0.02
console.log(getDiscount(20000)); // returns 0.05
console.log(getDiscount(50000)); // returns 0.1


console.log(
*/

// RESULT
/*
Result

Done

Assignment 24/36
'Function Declaration' expected
The name 'getDiscount' is assigned to the function
The function 'getDiscount' has one parameter - 'totalSpent'
The call getDiscount(137000) returns 0.1
The call getDiscount(46900) returns 0.05
The call getDiscount(8250) returns 0.02
The call getDiscount(1300) returns 0
The call getDiscount(5000) returns 0.02
The call getDiscount(20000) returns 0.05
The call getDiscount(50000) returns 0.1
Result of code execution:
0.1
0.05
0.02
0
0.02
0.05
0.1
*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 25/36  Status: Done

/*
** THEORY
The ternary operator is used as a more syntactically concise replacement for the if...else statement, when the same variable needs to be assigned different values ​​by condition.

<condition> ? <expression if condition is true> : <expression if condition is false>
It works according to the following scheme:

The condition is calculated.
If the condition is true, that is, it is converted to true, the expression after ? is calculated.
If the condition is false, that is, it is converted to false, the expression after the : is calculated.
The value of the calculated expression is returned as the result of the ternary operator.
let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type); // "adult"
Let's refactor by replacing the if...else with a ternary operator.

const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); // "adult"
Attention
The ternary operator should be used in simple assignment or return operations. It is bad practice (anti-pattern) to use it to replace complex branches.

** TASK
Refactor the solution to the "Warehouse" problem by replacing the if...else statement with a ternary operator.

** Test
The function checkStorage(available, ordered) is declared.
Ternary operator is used.
The call checkStorage(100, 50) returns "The order is accepted, our manager will contact you"
The call checkStorage(100, 130) returns "Not enough goods in stock!"
The call checkStorage(200, 20) returns "The order is accepted, our manager will contact you"
The call checkStorage(200, 150) returns "The order is accepted, our manager will contact you"
The call checkStorage(150, 180) returns "Not enough goods in stock!"


 */

// Javascript Editor:
// START
/*

function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  if (ordered > available) {
    message = "Not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }

  // Change code above this line
  return message;
}

*/

// Javascript Editor:
// FINISH
/*

function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  message =
    ordered > available
      ? 'Not enough goods in stock!'
      : 'The order is accepted, our manager will contact you';

  // Change code above this line
  return message;
}

checkStorage(100, 50); // returns "The order is accepted, our manager will contact you"
checkStorage(100, 130); // returns "Not enough goods in stock!"
checkStorage(200, 20); // returns "The order is accepted, our manager will contact you"
checkStorage(200, 150); // returns "The order is accepted, our manager will contact you"
checkStorage(150, 180); // returns "Not enough goods in stock!"

console.log(checkStorage(100, 50)); // returns "The order is accepted, our manager will contact you"
console.log(checkStorage(100, 130)); // returns "Not enough goods in stock!"
console.log(checkStorage(200, 20)); // returns "The order is accepted, our manager will contact you"
console.log(checkStorage(200, 150)); // returns "The order is accepted, our manager will contact you"
console.log(checkStorage(150, 180)); // returns "Not enough goods in stock!"


console.log(
*/

// RESULT
/*
Result

Done

Assignment 25/36
'Function Declaration' expected
The name 'checkStorage' is assigned to the function
The function 'checkStorage' has two parameters: 1st - 'available', 2nd - 'ordered'
Ternary operator is used
The call checkStorage(100, 50) returns 'The order is accepted, our manager will contact you'
The call checkStorage(100, 130) returns 'Not enough goods in stock!'
The call checkStorage(200, 20) returns 'The order is accepted, our manager will contact you'
The call checkStorage(200, 150) returns 'The order is accepted, our manager will contact you'
The call checkStorage(150, 180) returns 'Not enough goods in stock!'

Result of code execution:
The order is accepted, our manager will contact you
Not enough goods in stock!
The order is accepted, our manager will contact you
The order is accepted, our manager will contact you
Not enough goods in stock!
*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 26/36  Status: Done

/*
** THEORY
same as before

** TASK
The checkPassword(password) function compares the password passed to it (the password parameter) with the saved administrator password (the ADMIN_PASSWORD constant) and returns a string with a message about the result.

Using the ternary operator, modify the function so that:

If the values of password and ADMIN_PASSWORD are the same, the variable message is set to the string "Access is allowed".
Otherwise, set the message to the string "Access denied, wrong password!"

** Test
The function checkPassword(password) is declared
Ternary operator is used
The call checkPassword("jqueryismyjam") returns "Access is allowed"
The call checkPassword("angul4r1sl1f3") returns "Access denied, wrong password!"
The call checkPassword("r3actsux") returns "Access denied, wrong password!"

 */

// Javascript Editor:
// START
/*

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line

  // Change code above this line
  return message;
}


*/

// Javascript Editor:
// FINISH
/*

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  // Change code below this line
  message =
    password === ADMIN_PASSWORD
      ? 'Access is allowed'
      : 'Access denied, wrong password!';
  // Change code above this line
  return message;
}

checkPassword('jqueryismyjam'); // returns "Access is allowed"
checkPassword('angul4r1sl1f3'); // returns "Access denied, wrong password!"
checkPassword('r3actsux'); // returns "Access denied, wrong password!"

console.log(checkPassword('jqueryismyjam')); // returns "Access is allowed"
console.log(checkPassword('angul4r1sl1f3')); // returns "Access denied, wrong password!"
console.log(checkPassword('r3actsux')); // returns "Access denied, wrong password!"


console.log(
*/

// RESULT
/*
Result

Done

Assignment 26/36
'Function Declaration' expected
The name 'checkPassword' is assigned to the function
The function 'checkPassword' has one parameter - 'password'
Ternary operator is used
The call checkPassword('jqueryismyjam') returns 'Access is allowed'
The call checkPassword('angul4r1sl1f3') returns 'Access denied, wrong password!'
The call checkPassword('r3actsux') returns 'Access denied, wrong password!'

Result of code execution:
Access is allowed
Access denied, wrong password!
Access denied, wrong password!

*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 27/36  Status: Done

/*
** THEORY
In some cases, the inconvenience of reading complex if...else branches can be avoided by using the "flatter" syntax of the switch branch statement.

The scope of switch is limited to problems with one general question (what to compare) and many answer options (what to compare with).

switch (value) {
  case value:
    statements;
    break;

  case value:
    statements;
    break;
}
Its syntax consists of a switch (value) block - what to compare and many individual cases case value: - what to compare with. For comparison, the strict equality operator === is used. That is, you cannot compare for more or less, only for equality.

The value in the switch (value) block is a string or number that is compared for strict equality with all values ​​in the case value: blocks in order, from top to bottom.

The break statement at the end of each case block is necessary to interrupt further checks and go directly to the code after the switch in the case when the equality test returns true.

** TASK
The getSubscriptionPrice(type) function gets a string with the user's subscription type (the type parameter), checks it against the three possible types of monthly subscriptions, and returns the price stored in the price variable.

If the value of the type parameter is a string:

"starter" - subscription price is 0 credits.
"professional" - subscription price is 20 credits.
"organization" - subscription price is 50 credits.
Initially, the body of the function had an if...else statement that looked like this.

if (type === "starter") {
  price = 0;
} else if (type === "professional") {
  price = 20;
} else if (type === "organization") {
  price = 50;
}
After refactoring, the if..else statement was replaced with switch. Complete the switch statement code to make the function work correctly.


** Test
The function getSubscriptionPrice(type) is declared
The call getSubscriptionPrice("professional") returns number 20
The call getSubscriptionPrice("organization") returns number 50
The call getSubscriptionPrice("starter") returns number 0


 */

// Javascript Editor:
// START
/*

function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch () { // Change this line
    case : // Change this line
      price = ; // Change this line
      break;

    case : // Change this line
      price = ; // Change this line
      break;

    case : // Change this line
      price = ; // Change this line
      break;
  }

  // Change code above this line
  return price;
}

*/

// Javascript Editor:
// FINISH
/*

function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (type) { // Change this line
    case "starter": // Change this line
      price = 0; // Change this line
      break;

    case "professional": // Change this line
      price = 20; // Change this line
      break;

    case "organization": // Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}

getSubscriptionPrice("professional"); // returns number 20
getSubscriptionPrice("organization"); // returns number 50
getSubscriptionPrice("starter"); // returns number 0

console.log(getSubscriptionPrice("professional")); // returns number 20
console.log(getSubscriptionPrice("organization")); // returns number 50
console.log(getSubscriptionPrice("starter")); // returns number 0

console.log(
*/

// RESULT
/*
Result

Done

Assignment 27/36
'Function Declaration' expected
The name 'getSubscriptionPrice' is assigned to the function
The function 'getSubscriptionPrice' has one parameter - 'type'
Switch statement is used
The call getSubscriptionPrice('_stаrter_') returns undefined
The call getSubscriptionPrice('professional') returns 20
The call getSubscriptionPrice('organization') returns 50
The call getSubscriptionPrice('starter') returns 0

Result of code execution:
20
50
0

*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 28/36  Status: Done

/*
** THEORY
If no values ​​match, you need to execute the default code, which is similar to the else block for the if...else statement. To do this, after all the case blocks, a default block is added.

switch (value) {
  case value:
    statements;
    break;

  case value:
    statements;
    break;

  default:
    statements;
}
The break statement after the default block is not needed, since this is the last thing that will be executed in the switch and control will be transferred to the code behind it.

** TASK
The checkPassword(password) function takes the password in the password parameter, checks it against the administrator password in the ADMIN_PASSWORD variable, and returns a message about the result of the comparison, which is stored in the message variable.

If the value of the parameter password:

is equal to null, it means the user canceled the operation and the string "Canceled by user!" is written to message.
matches the value of ADMIN_PASSWORD, the string "Welcome!" is assigned to the variable message.
does not satisfy any of the previous conditions, the string "Access denied, wrong password!" is written to the message variable.
Refactor the code by replacing the if..else statement with a switch statement and don't forget about the default block (analogous to else).

** Test
The function checkPassword(password) is declared
The call checkPassword("mangohackzor") returns "Access denied, wrong password!"
The call checkPassword(null) returns "Canceled by user!"
The call checkPassword("polyhax") returns "Access denied, wrong password!"
The call checkPassword("jqueryismyjam") returns "Welcome!"


 */

// Javascript Editor:
// START
/*

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line

  if (password === null) {
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  // Change code above this line
  return message;
}


*/

// Javascript Editor:
// FINISH
/*

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  // Change code below this line

  switch (password) {
    case null:
      message = 'Canceled by user!';
      break;

    case password === ADMIN_PASSWORD:
      message = 'Welcome!';
      break;

    default:
      message = 'Access denied, wrong password!';
  }

  // Change code above this line
  return message;
}

checkPassword("mangohackzor"); // returns "Access denied, wrong password!"
checkPassword(null); // returns "Canceled by user!"
checkPassword("polyhax"); // returns "Access denied, wrong password!"
checkPassword("jqueryismyjam"); // returns "Welcome!"

console.log(checkPassword("mangohackzor")); // returns "Access denied, wrong password!"
console.log(checkPassword(null)); // returns "Canceled by user!"
console.log(checkPassword("polyhax")); // returns "Access denied, wrong password!"
console.log(checkPassword("jqueryismyjam")); // returns "Welcome!"


console.log(
*/

// RESULT
/*
Result

Done

Assignment 28/36
'Function Declaration' expected
The name 'checkPassword' is assigned to the function
The function 'checkPassword' has one parameter - 'password'
Switch statement is used
The call checkPassword('mangohackzor') returns 'Access denied, wrong password'
The call checkPassword(null) returns 'Canceled by user!'
The call checkPassword('polyhax') returns 'Access denied, wrong password'
The call checkPassword('jqueryismyjam') returns 'Welcome!'

Result of code execution:
Access denied, wrong password!
Canceled by user!
Access denied, wrong password!
Welcome!

*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 29/36  Status: Done

/*
** THEORY
same
** TASK
The getShippingCost(country) function should check the possibility of product delivery to the user's country (the country parameter) and return a message about the result, which stored in the message variable. Be sure to use the switch statement.

The format of the returned string is "Shipping to <country> will cost <price> credits", where the corresponding values ​​must be substituted for <country> and <price>.

List of countries and delivery fee:

China - 100 credits
Chile - 250 credits
Australia - 170 credits
Jamaica - 120 credits
The list shows that delivery is not available everywhere. If the specified country is not in the list, then the function should return the string "Sorry, there is no delivery to your country"

** Test
The function getShippingCost(country) is declared
The switch statement is used in the function body.
The call getShippingCost("Australia") returns "Shipping to Australia will cost 170 credits"
The call getShippingCost("Germany") returns "Sorry, there is no delivery to your country"
The call getShippingCost("China") returns "Shipping to China will cost 100 credits"
The call getShippingCost("Chile") returns "Shipping to Chile will cost 250 credits"
The call getShippingCost("Jamaica") returns "Shipping to Jamaica will cost 120 credits"
The call getShippingCost("Sweden") returns "Sorry, there is no delivery to your country"


 */

// Javascript Editor:
// START
/*

function getShippingCost(country) {
  let message;
  // Change code below this line

  // Change code above this line
  return message;
}


*/

// Javascript Editor:
// FINISH
/*

function getShippingCost(country) {
  let message;
  // Change code below this line
  switch (country) {
    case 'Australia':
      message = 'Shipping to Australia will cost 170 credits';
      break;
    case 'China':
      message = 'Shipping to China will cost 100 credits';
      break;
    case 'Chile':
      message = 'Shipping to Chile will cost 250 credits';
      break;
    case 'Jamaica':
      message = 'Shipping to Jamaica will cost 120 credits';
      break;
    default:
      message = 'Sorry, there is no delivery to your country';
  }

  // Change code above this line
  return message;
}

getShippingCost('Australia'); // returns "Shipping to Australia will cost 170 credits"
getShippingCost('Germany'); // returns "Sorry, there is no delivery to your country"
getShippingCost('China'); // returns "Shipping to China will cost 100 credits"
getShippingCost('Chile'); // returns "Shipping to Chile will cost 250 credits"
getShippingCost('Jamaica'); // returns "Shipping to Jamaica will cost 120 credits"
getShippingCost('Sweden'); // returns "Sorry, there is no delivery to your country"

console.log(getShippingCost('Australia')); // returns "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // returns "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // returns "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // returns "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // returns "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // returns "Sorry, there is no delivery to your country"



console.log(
*/

// RESULT
/*
Result

Done

Assignment 29/36
'Function Declaration' is expected
The name 'getShippingCost' is assigned to the function
The function 'getShippingCost' has one parameter - 'country'
Switch statement is used
The call getShippingCost('Australia') returns Shipping to Australia will cost 170 credits'
The call getShippingCost('Germany') returns 'Sorry, there is no delivery to your country'
The call getShippingCost('China') returns 'Shipping to China will cost 100 credits'
The call getShippingCost('Chile') returns 'Shipping to Chile will cost 250 credits'
The call getShippingCost('Jamaica') returns 'Shipping to Jamaica will cost 120 credits'
The call getShippingCost('Sweden') returns 'Sorry, there is no delivery to your country'

Result of code execution:
Shipping to Australia will cost 170 credits
Sorry, there is no delivery to your country
Shipping to China will cost 100 credits
Shipping to Chile will cost 250 credits
Shipping to Jamaica will cost 120 credits
Sorry, there is no delivery to your country

*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 30/36  Status: Done

/*
** THEORY
In order to find out the length of a string, that is, the number of its characters, strings have a built-in property length, the value of which can be obtained by referring to it through a dot after the name of a variable or string literal.

const productName = "Repair droid";

// If the variable stores a string
console.log(productName.length); // 12

// If string literal
console.log("Repair droid".length); // 12

** TASK
The getNameLength(name) function takes a name (the name parameter) and returns a string specifying its length. Supplement the template string in the message variable with the length of the string from the name parameter.


** Test
The function getNameLength(name) is declared
The function getNameLength("Poly") call returns "Name Poly is 4 characters long"
The function getNameLength("Harambe") call returns "Name Harambe is 6 characters long"
The functiongetNameLength("Billy") call returns "Name Billy is 5 characters long"
The function getNameLength("Joe") call returns "Name Joe is 3 characters long"


 */

// Javascript Editor:
// START
/*

function getNameLength(name) {
  const message = `Name ${} is ${} characters long`; // Change this line

  return message;
}


*/

// Javascript Editor:
// FINISH
/*

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}

getNameLength('Poly'); // call returns "Name Poly is 4 characters long"
getNameLength('Harambe'); // call returns "Name Harambe is 6 characters long"
getNameLength('Billy'); // call returns "Name Billy is 5 characters long"
getNameLength('Joe'); // call returns "Name Joe is 3 characters long"

console.log(getNameLength('Poly')); // call returns "Name Poly is 4 characters long"
console.log(getNameLength('Harambe')); // call returns "Name Harambe is 6 characters long"
console.log(getNameLength('Billy')); // call returns "Name Billy is 5 characters long"
console.log(getNameLength('Joe')); // call returns "Name Joe is 3 characters long"


console.log(
*/

// RESULT
/*
Result

Done

Assignment 30/36
'Function Declaration' is expected
The name 'getNameLength' is assigned to the function
The function 'getNameLength' has one parameter - 'name'
The call getNameLength('Poly') returns Name Poly is 4 characters long
The call getNameLength('Harambe') returns Name Harambe is 7 characters long
The call getNameLength('Billy') returns Name Billy is 5 characters long
The call getNameLength('Joe') returns Name Joe is 3 characters long

Result of code execution:
Name Poly is 4 characters long
Name Harambe is 7 characters long
Name Billy is 5 characters long
Name Joe is 3 characters long

*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 31/36  Status: Done

/*
** THEORY
String is an indexed set of zero or more characters, enclosed in single, double, or back quotes.

String indexing starts with zero. For example, in the string 'JavaScript', the letter 'J' is at position 0, and 't' is at position 9. In this case, the length of the string 'JavaScript' is equal to 10, that is, the index of the last element is always one less than its length.

The syntax of square brackets string [index] is used to access the value of a string element.

const productName = "Repair droid";
console.log(productName[0]); // "R"
console.log(productName[5]); // "r"
console.log(productName[11]); // "d"
console.log(productName[productName.length - 1]); // "d"
The content of the string cannot be changed, only read. That is, you cannot take some character and replace it as soon as the string is created - it is like that forever. You can only create a whole new string and assign it to a variable instead of the old one.

** TASK
Complete the code by assigning to the declared variables the expressions of accessing the corresponding elements or properties of the string in the course variable.

courseTopicLength - string length.
firstElement - the first element of the string.
lastElement - the last element of the string.


** Test
The variable courseTopic is declared
The value of the courseTopic variable is the string "JavaScript essentials"
The variable courseTopicLength is declared
The value of the courseTopicLength variable is the number 21
The variable firstElement is declared
The value of the firstElement variable is the string "J"
The variable lastElement is declared
The value of the lastElement variable is the string "s"


 */

// Javascript Editor:
// START
/*

const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic;
const firstElement = courseTopic;
const lastElement = courseTopic;

// Change code above this line


*/

// Javascript Editor:
// FINISH
/*
const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// Change code above this line
console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);

console.log(
*/

// RESULT
/*
Result

Done

Assignment 31/36
The variable 'courseTopic' is declared
The value of the courseTopic variable is the string 'JavaScript essentials'
The variable 'courseTopicLength' is declared
The value of the courseTopicLength variable is the number 21
The variable 'firstElement' is declared
The value of the firstElement variable is the string 'J'
The variable 'lastElement' is declared
The value of the lastElement variable is the string 's'

Result of code execution:
21
J
s

*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 32/36  Status: Done

/*
** THEORY
The string method slice(startIndex, endIndex) is used to create a copy of part or all of a string. It makes a copy of the string elements from startIndex up to, but not including endIndex, and returns a new string.

const productName = "Repair droid";
console.log(productName.slice(0, 4)); // "Repa"
console.log(productName.slice(3, 9)); // "air dr"
console.log(productName.slice(0, productName.length)); // "Repair droid"
console.log(productName.slice(7, productName.length)); // "droid"

** TASK
The getSubstring(string, length) function takes a string and returns the substring from the beginning character to the value passed in the parameter length. It declares two parameters, the values ​​of which will be set during its call:

string - original string
length - the number of characters to slice starting from the beginning of the string for the resulting substring
Assign to the variable substring an expression for creating a substring of length characters from the beginning of the string.


** Test
Оголошена функція getSubstring(string, length)
Виклик функції getSubstring("Hello world", 3) повертає "Hel"
Виклик функції getSubstring("Hello world", 6) повертає "Hello"
Виклик функції getSubstring("Hello world", 8) повертає "Hello wo"
Виклик функції getSubstring("Hello world", 11) повертає "Hello world"
Виклик функції getSubstring("Hello world", 0) повертає ""


 */

// Javascript Editor:
// START
/*

function getSubstring(string, length) {
  const substring = ; // Change this line

  return substring;
}

*/

// Javascript Editor:
// FINISH
/*
function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line

  return substring;
}

getSubstring("Hello world", 3); // повертає "Hel"
getSubstring("Hello world", 6); // повертає "Hello"
getSubstring("Hello world", 8); // повертає "Hello wo"
getSubstring("Hello world", 11); // повертає "Hello world"
getSubstring("Hello world", 0); // повертає ""

console.log(getSubstring("Hello world", 3)); // повертає "Hel"
console.log(getSubstring("Hello world", 6)); // повертає "Hello"
console.log(getSubstring("Hello world", 8)); // повертає "Hello wo"
console.log(getSubstring("Hello world", 11)); // повертає "Hello world"
console.log(getSubstring("Hello world", 0)); // повертає ""


console.log(
*/

// RESULT
/*
Result

Done

Assignment 32/36
'Function Declaration' is expected
The name 'getSubstring' is assigned to the function
The function 'getSubstring' has two parameters: 1st - 'string', 2nd -'length'
The function getSubstring('Hello world', 3) call returns 'Hel'
The function getSubstring('Hello world', 5) call returns 'Hello'
The function getSubstring('Hello world', 8) call returns 'Hello wo'
The function getSubstring('Hello world', 11) call returns 'Hello world'
The function getSubstring('Hello world', 0) call returns''

Result of code execution:
Hel
Hello 
Hello wo
Hello world

*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 33/36  Status: Done

/*
** THEORY
same

** TASK
The formatMessage(message, maxLength) function takes a string (the message parameter) and formats it if the length exceeds the value in the maxLength parameter.

Complete the function code so that if the length of the string:

does not exceed maxLength, the function returns it in its original form.
is greater than maxLength, then the function truncates the string to maxLength characters and adds ellipsis "..." to the end, and then returns the truncated version.


** Test
The function formatMessage(message, maxLength) is declared
The function formatMessage("Curabitur ligula sapien", 16) call returns "Curabitur ligula..."
The function formatMessage("Curabitur ligula sapien", 23) call returns "Curabitur ligula sapien"
The function formatMessage("Vestibulum facilisis purus nec", 20) call returns "Vestibulum facilisis..."
The function formatMessage("Vestibulum facilisis purus nec", 30) call returns "Vestibulum facilisis purus nec"
The function formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) call returns "Nunc sed turpis..."
The function formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) call returns "Nunc sed turpis a felis in nunc fringilla"



 */

// Javascript Editor:
// START
/*

function formatMessage(message, maxLength) {
  let result;
  // Change code below this line

  /// Change code above this line
  return result;
}

*/

// Javascript Editor:
// FINISH
/*
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line

  if (maxLength >= message.length) {
    result = message;
  } else {
    result = `${message.slice(0, maxLength)}...`;
  }
  /// Change code above this line
  return result;
}

formatMessage('Curabitur ligula sapien', 16); // call returns "Curabitur ligula..."
formatMessage('Curabitur ligula sapien', 23); // call returns "Curabitur ligula sapien"
formatMessage('Vestibulum facilisis purus nec', 20); // call returns "Vestibulum facilisis..."
formatMessage('Vestibulum facilisis purus nec', 30); // call returns "Vestibulum facilisis purus nec"
formatMessage('Nunc sed turpis a felis in nunc fringilla', 15); // call returns "Nunc sed turpis..."
formatMessage('Nunc sed turpis a felis in nunc fringilla', 41); // call returns "Nunc sed turpis a felis in nunc fringilla"

console.log(formatMessage('Curabitur ligula sapien', 16)); // call returns "Curabitur ligula..."
console.log(formatMessage('Curabitur ligula sapien', 23)); // call returns "Curabitur ligula sapien"
console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // call returns "Vestibulum facilisis..."
console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // call returns "Vestibulum facilisis purus nec"
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // call returns "Nunc sed turpis..."
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // call returns "Nunc sed turpis a felis in nunc fringilla"

// console.log(
*/

// RESULT
/*
Result

Done

Assignment 33/36
'Function Declaration' is expected
The name 'formatMessage' is assigned to the function
The function 'formatMessage' has two parameters: 1st - 'message', 2nd -'maxLength'
The function formatMessage('Curabitur ligula sapien', 16) call returns 'Curabitur ligula...'
The function formatMessage('Curabitur ligula sapien', 23) call returns 'Curabitur ligula sapien'
The function formatMessage('Vestibulum facilisis purus nec', 20) call returns 'Vestibulum facilisis...'
The function formatMessage('Vestibulum facilisis purus nec', 30) call returns 'Vestibulum facilisis purus nec'
The function formatMessage('Nunc sed turpis a felis in nunc fringilla', 15) call returns 'Nunc sed turpis...'
The function formatMessage('Nunc sed turpis a felis in nunc fringilla', 41) call returns 'Nunc sed turpis a felis in nunc fringilla'

Result of code execution:
Curabitur ligula...
Curabitur ligula sapien
Vestibulum facilisis...
Vestibulum facilisis purus nec
Nunc sed turpis...
Nunc sed turpis a felis in nunc fringilla

*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 34/36  Status: Done

/*
** THEORY
There are situations when all characters in a string need to be converted to one case, upper or lower. For example, when searching for a keyword, when the user enters the string 'saMsUng', and it must be compared with the string 'samsung' or 'SAMSUNG'.

console.log("saMsUng" === "samsung"); // false
console.log("saMsUng" === "SAMSUNG"); // false
In order not to require absolutely accurate input, you can "normalize" the string entered by the user, that is, convert all its characters to upper or lower case. The string methods toLowerCase() and toUpperCase() will return a new string in the appropriate case, without changing the original.

const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput); // 'saMsUng'
console.log(userInput === BRAND_NAME); // false
console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
console.log(normalizedToUpperCaseInput === BRAND_NAME); // true


** TASK
The normalizeInput(input) function takes a string (input parameter) and returns the same string, but in lowercase. Assign to the variable normalizedInput an expression to create a lowercase string from the input parameter.

** Test
The function normalizeInput(input) is declared
The function normalizeInput("Hello world") call returns "hello world"
The function normalizeInput("This ISN'T SpaM") call returns "this isn't spam"
The function normalizeInput("Big SALE") call returns "big sale"

 */

// ** Javascript Editor:
// ** START
/*

function normalizeInput(input) {
  const normalizedInput = ; // Change this line

  return normalizedInput;
}

*/

// ** Javascript Editor:
// ** FINISH
/*

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}

normalizeInput("Hello world"); // call returns "hello world"
normalizeInput("This ISN'T SpaM"); // call returns "this isn't spam"
normalizeInput("Big SALE"); // call returns "big sale"

console.log(normalizeInput("Hello world")); // call returns "hello world"
console.log(normalizeInput("This ISN'T SpaM")); // call returns "this isn't spam"
console.log(normalizeInput("Big SALE")); // call returns "big sale"


console.log(
*/

// RESULT
/*
Result

Done

Assignment 34/36
'Function Declaration' is expected
The name 'normalizeInput' is assigned to the function
The function 'normalizeInput' has one parameter - 'input'
The function normalizeInput('Hello world') call returns 'hello world'
The function normalizeInput('This ISN'T a SpaM') call returns 'this isn't a spam'
The function normalizeInput('Big SALES') call returns 'big discounts'

Result of code execution:
hello world
this isn't spam
big sale

*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 35/36  Status: Done

/*
** THEORY
The string method includes (substring) checks if the substring substring is included in the string, returns true if it is included and false otherwise. The case of characters in the string and substring matters, since, for example, the letter "a" is not equal to the letter "А".

const productName = "Repair droid";

console.log(productName.includes("a")); // true
console.log(productName.includes("A")); // false
console.log(productName.includes("droid")); // true
console.log(productName.includes("Droid")); // false
console.log(productName.includes("Repair")); // true
console.log(productName.includes("repair")); // false

** TASK
The checkForName(fullname, name) function takes two parameters and returns boolean true or false - the result of checking whether the substring name is in the string fullname.

fullname - full name consisting of two words (first and last name) separated by a space
name - name to check for occurrence in the fullname parameter
Assign to the variable result an expression for checking the occurrence of the name (the name parameter), in the full name (the fullname parameter). Let the function strictly relate to the case of letters (case-sensitive), that is, "Petya" and "petya" are different names for it.


** Test
The function checkForName(fullname, name) is declared.
The function checkForName("Egor Kolbasov", "Egor") call returns true
The function checkForName("Egor Kolbasov", "egor") call returns false
The function checkForName("Egor Kolbasov", "egOr") call returns false
The function checkForName("Egor Kolbasov", "Zhenya") call returns false
The function checkForName("Vadim Nekrasov", "Vadim") call returns true
The function checkForName("Vadim Nekrasov", "vadim") call returns false
The function checkForName("Vadim Nekrasov", "Dima") call returns false


 */

// Javascript Editor:
// START
/*

function checkForName(fullName, name) {
  const result = ; // Change this line
  return result;
}

*/

// Javascript Editor:
// FINISH
/*
function checkForName(fullName, name) {
  const result = fullName.includes(name); // Change this line
  return result;
}

checkForName('Egor Kolbasov', 'Egor'); // call returns true
checkForName('Egor Kolbasov', 'egor'); // call returns false
checkForName('Egor Kolbasov', 'egOr'); // call returns false
checkForName('Egor Kolbasov', 'Zhenya'); // call returns false
checkForName('Vadim Nekrasov', 'Vadim'); // call returns true
checkForName('Vadim Nekrasov', 'vadim'); // call returns false
checkForName('Vadim Nekrasov', 'Dima'); // call returns false

console.log(checkForName('Egor Kolbasov', 'Egor')); // call returns true
console.log(checkForName('Egor Kolbasov', 'egor')); // call returns false
console.log(checkForName('Egor Kolbasov', 'egOr')); // call returns false
console.log(checkForName('Egor Kolbasov', 'Zhenya')); // call returns false
console.log(checkForName('Vadim Nekrasov', 'Vadim')); // call returns true
console.log(checkForName('Vadim Nekrasov', 'vadim')); // call returns false
console.log(checkForName('Vadim Nekrasov', 'Dima')); // call returns false


console.log(
*/

// RESULT
/*
Result

Done

Assignment 35/36
'Function Declaration' is expected
The name 'checkForName' is assigned to the function
The function 'checkForName' has two parameters: 1st - 'fullName' and 2nd - 'name'
The function checkForName('Egor Kolbasov', 'Egor') call returns true
The function checkForName('Egor Kolbasov', 'egor') call returns false
The function checkForName('Egor Kolbasov', 'egOr') call returns false
The function checkForName('Egor Kolbasov', 'Zhenya') call returns false
The function checkForName('Vadim Nekrasov', 'Vadim') call returns true
The function checkForName('Vadim Nekrasov', 'vadim') call returns false
The function checkForName('Vadim Nekrasov', 'Dima') call returns false

Result of code execution:
true
false
false
false
true
false
false

*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 36/36  Status: Done

/*
** THEORY
same

** TASK
The checkForSpam(message) function takes a string (the message parameter), checks it for the forbidden words spam and sale, and returns the result of the check. Words in the string of the message parameter can be in arbitrary case, for example SPAM or sAlE.

If you find a forbidden word (spam or sale) then the function returns boolean true.
If there are no forbidden words in the string, the function returns boolean false.

** Test
The function checkForSpam(message) is declared.
The function checkForSpam("Latest technology news") call returns false
The function checkForSpam("JavaScript weekly newsletter")call returns false
The function checkForSpam("Get best sale offers now!") call returns true
The function checkForSpam("Amazing SalE, only tonight!") call returns true
The function checkForSpam("Trust me, this is not a spam message") call returns true
The function checkForSpam("Get rid of sPaM emails. Our book in on sale!") call returns true
The function checkForSpam("[SPAM] How to earn fast money?") call returns true

 */

// Javascript Editor:
// START
/*

function checkForSpam(message) {
  let result;
  // Change code below this line

  // Change code above this line
  return result;
}


*/

// Javascript Editor:
// FINISH
/*

function checkForSpam(message) {
  let result;
  // Change code below this line
  result =
    message.toLowerCase().includes('spam') ||
    message.toLowerCase().includes('sale');
  // Change code above this line
  return result;
}

checkForSpam('Latest technology news'); // call returns false
checkForSpam('JavaScript weekly newsletter'); // call returns false
checkForSpam('Get best sale offers now!'); // call returns true
checkForSpam('Amazing SalE, only tonight!'); // call returns true
checkForSpam('Trust me, this is not a spam message'); // call returns true
checkForSpam('Get rid of sPaM emails. Our book in on sale!'); // call returns true
checkForSpam('[SPAM] How to earn fast money?'); // call returns true

console.log(checkForSpam('Latest technology news')); // call returns false
console.log(checkForSpam('JavaScript weekly newsletter')); // call returns false
console.log(checkForSpam('Get best sale offers now!')); // call returns true
console.log(checkForSpam('Amazing SalE, only tonight!')); // call returns true
console.log(checkForSpam('Trust me, this is not a spam message')); // call returns true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // call returns true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // call returns true


console.log(
*/

// RESULT
/*
Result

Done

Assignment 36/36
'Function Declaration' is expected
The name 'checkForSpam' is assigned to the function
The function 'checkForSpam' has one parameter 'message'
The function checkForSpam('Latest technology news') call returns false
The function checkForSpam('JavaScript weekly newsletter') call returns false
The function checkForSpam('Get best sale offers now!') call returns true
The function checkForSpam('Amazing SalE, only tonight!') call returns true
The function checkForSpam('Trust me, this is not a spam message') call returns true
The function checkForSpam('Get rid of sPaM emails. Our book in on sale!') call returns true
The function checkForSpam('[SPAM] How to earn fast money?') call returns true

Result of code execution:
false
false
true
true
true
true
true

*/

///////////////////////////////////////////////
// JS V2 block-1 Autochecking  ASSIGNMENT 36/36  Status: Done

/*
** THEORY

** TASK


** Test



 */

// Javascript Editor:
// START
/*

*/

// Javascript Editor:
// FINISH
/*


console.log(
*/

// RESULT
/*

*/
