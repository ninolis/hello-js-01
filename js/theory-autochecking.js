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
// start
/*

function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  // Change code above this line
  return message;
}


*/

// Javascript Editor:
// done
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
// start
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
// done
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
// start
/*
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line

  // Change code above this line
  return message;
}
*/

// Javascript Editor:
// done
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

 */

// Javascript Editor:
// start
/*

*/

// Javascript Editor:
// done
/*

*/
