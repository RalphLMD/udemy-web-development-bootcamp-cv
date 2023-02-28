function test() {
    var a = "3";
    var b = "8";

    var c = a;
    a = b;
    b = c 

    console.log("a is " + a);
    console.log("b is " + b);
}

console.log(test())

//1st method
var input = prompt("Type any input here:");
var inputCount = input.length;
alert("You have written the total number of characters: " + inputCount + " " + (142 - inputCount) + " characters left!" );

var inputCount140 = input.slice(0, 141);

alert(inputCount140);

//2nd method 
alert(prompt("Type any input here:").slice(0, 141));

var sample = "Hello World!";
sample = sample.toUpperCase();

// Challenge: Changing casing in string

// My solution
var sampleName = prompt("Type your name here: ");

sampleName = sampleName.slice(0, 1).toUpperCase() + sampleName.slice(1, 30).toLowerCase();

alert("Hello, " + name);

// Real solution
var name2 = prompt("Type your name here: ");

var firstChar = name2.slice(0, 1);
var convertFirstChar = firstChar.toUpperCase();

var restOfChar = name2.slice(1, name2.length);
restOfChar = restOfChar.toLowerCase(); // make rest of characters lowercase 

var capitalName = convertFirstChar + restOfChar;

alert("Hello, " + capitalName); 

// Challenge: Dog age to Human Age Formula

var dogAge = parseInt(prompt("What's your dog age?"));
var humanAge = (dogAge - 2) * 4 + 21;

alert("Your dog age is " + dogAge + " years old. and is equivalent to the human age of " + humanAge);

/* Stanford Karel - Challenge Diagonal Beeper

function main(){
   moveDiagonal();
}

function moveDiagonal(){
   putBeeper();
   moveToNextCol();
   faceFront();
   moveToNextCol();
   faceFront();
   moveToNextCol();
   faceFront();
   moveToNextCol(); 

   faceFront();
}

function faceFront(){
   turnLeft();
   turnLeft();
   turnLeft();
}

function moveToNextCol() {
   move();
   turnLeft();
   move();
   putBeeper();
}

Stanford Karel - Challenge Chess Board

function main(){
   beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
}
 
function goUpTurnRight() {
   turnRight();
   move();
   turnRight();
}
 
function goUpTurnLeft() {
   turnLeft();
   move();
   turnLeft();
}
 
function beepersRight() {
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();  
}
 
function beepersLeft() {
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}
*/

function greetPeople(times){
   console.log("Hello User " + times);
}

greetPeople(2);

// Using parameters
// My Method 
function buyBottle(money){
   var bottle =money / 1.5;
   console.log("User was able to spend $" + money + " , with total number of bottles: " + parseInt(bottle));
}

buyBottle(10);

// Real Method
function buyBottle2(money, costPerBottle){
   //var bottle = Math.floor(money / 1.5); //round-up

   //console.log("User was able to spend $" + money + " , with total number of bottles: " + bottle);
   
   console.log("User was able to buy total number of " + calcBottles(money, costPerBottle)) + " bottle/s";

   return calcChange(money, costPerBottle);
   //return money % 1.5;
}

// Using return values in another function
function calcBottles(startingMoney, costPerBottle) {
   var numberOfBottles = Math.floor(startingMoney/costPerBottle);

   return numberOfBottles;
}

function calcChange(startingMoney, costPerBottle) {
   var change = startingMoney % costPerBottle;

   return change;
}

console.log("Here is your change " + buyBottle2(5, 1.5));


// Using return to get an output

var change = buyBottle2(3);
console.log(change);


// Challenge: Life in Weeks Coding Exercise
function lifeInWeeks(age) {
   var remaining = 90 - age;
   var days = remaining * 365;
   var weeks = remaining * 52;
   var months = remaining * 12;

   console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}

lifeInWeeks(56);

// Challenge: BMI Calculator
// My solution
function bmiCalculator(weight, height) {
var calc = Math.floor(weight / (height ^ 2));

return calc;
}

var bmi = bmiCalculator(65, 1.8);
console.log("Your Body Mass Index is: " + bmi);

// Real solution
function bmiCalculator(weight, height) {
   var calc = Math.floor(weight / Math.pow(height, 2));
   
   return Math.round(calc);
   }
   
   var bmi = bmiCalculator(65, 1.8);
   console.log("Your Body Mass Index is: " + bmi);

// Challenge: Love Calculator
var boy = prompt("Input boy name: ");
var girl = prompt("Input girl name: ");

var lp = Math.random();
lp = lp * 100;
lp = Math.floor(lp) + 1;
console.log("boy and girl love compatibility: " + lp + "%");

// Using if else to make a condition - control flow
if (lp === 100) {
   alert("Your love compatibility is: " + lp + "%, True love");
} else if (lp > 30 && lp <= 70) {
   alert("Your love compatibility is: " + lp + "%, Maybe");
} else if (lp <= 30) {
   alert("Your love compatibility is: " + lp + "%, Impossible");
}

// Challenge: BMI Calculator Advanced
// Using if else condition in BMI Calculator - My Solution
function bmiCalculator (weight, height) {
   var bmi = Math.floor(weight/Math.pow(height, 2));
   
   var interpretation;

   if (bmi < 18.5) {
      interpretation = ("Your BMI is " + bmi + ", so you are underweight.");
   }
    else if (bmi >= 18.5 && bmi <=24.9) {
      interpretation = ("Your BMI is " + bmi + ", so you have a normal weight.");
   }
   else if (bmi >24.9) {
      interpretation = ("Your BMI is " + bmi + ", so you are overweight.");
   }

   return interpretation;
}

bmiCalculator(65, 1.8);

// Solution
function bmiCalculator (weight, height) {
   var bmi = weight / Math.pow (height, 2);
   
   if (bmi < 18.5) {
      interpretation = ("Your BMI is " + bmi + ", so you are underweight.");
   }
   if (bmi >= 18.5 && bmi <=24.9) {
      interpretation = ("Your BMI is " + bmi + ", so you have a normal weight.");
   }
   if (bmi >24.9) {
      interpretation = ("Your BMI is " + bmi + ", so you are overweight.");
   }

   return interpretation;
}

bmiCalculator (80, 1.8);

// Challenge: Leap Year Challenge
function isLeap(year) {
   var message;
   
   if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      message = "Leap year."
   } else {
      message = "Not leap year."
   }
       
   return message;
}

// Challenge: Fizzbuzz
var output = [];
var count = 1;

function fizzBuzz() {

   // while (count <= 100){
   //    if (count % 3 === 0 && count % 5 === 0) {
   //       output.push("FizzBuzz");
   //    } else if (count % 3 === 0) {
   //       output.push("Fizz");
   //    } else if (count % 5 === 0) {
   //       output.push("Buzz");
   //    } else {
   //       output.push(count);
   //    }
   // count++;
   // }

   for (var count = 1; count < 101; count++){
         if (count % 3 === 0 && count % 5 === 0) {
             output.push("FizzBuzz");
         } else if (count % 3 === 0) {
            output.push("Fizz");
         } else if (count % 5 === 0) {
            output.push("Buzz");
         } else {
            output.push(count);
         }
      count++;
   }

   console.log(output);
}


// Challenge: Who's buying lunch?
function whosPaying(names) {
   var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]; // Create array
   var noOfNames = names.length; // Get total no 
   var randomName = Math.floor(Math.random() * noOfNames); // Randomize name
   var pickedName = names[randomName]; // Store random name
       
      return pickedName + " is going to buy lunch today!";
}

// Challenge: 99 Bottles of Beer

// My solution
function beer(){
   var bottles = 100;
   while (bottles >= 0 ) {
      if (bottles != 0) {
         console.log(bottles + " bottles of beer on the wall, " + bottles + ". Take one down and pass it around, " + (bottles - 1) + " bottles of beer on the wall.");
      } else if (bottles == 1){
         console.log(bottles + " bottle of beer on the wall, " + bottles + ". Take one down and pass it around, no more bottles of beer on the wall.");
      } else {
         console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
      }
      
      bottles--;
   }
}

// Real solution
function beer() {
   var numberOfBottles = 99
   while (numberOfBottles >= 0) {
      var bottleWord = "bottle";
      if (numberOfBottles === 1) {
        bottleWord = "bottles";
      } 
      console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
      console.log(numberOfBottles + " " + bottleWord + " of beer,");
      onsole.log("Take one down, pass it around,");
	   numberOfBottles--;
      console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
   }
}

// Challenge: Fibonacci 
function fibonacciGenerator(n) {
   var fArray = [];
   if (n === 0) {
      fArray.push(0);
      return fArray;
   } else if (n === 1) {
      fArray.push(0, 1);
      return fArray;
   } else {
      fArray.push(0, 1);
      for (var i = 0; i < n; i++){
         var seq = fArray[i] + fArray[i+1];
         fArray.push(seq);
         if (n == fArray.length){
            return fArray;
          }
      }
   }
}

// Alternative solution
function fibonacciGenerator (n) {
   var fibonacci = [];
   var answer;

   for(var i=0; i<n; i++) {
     if (fibonacci.length < 2) {
       fibonacci.push(i);
     } else {
       answer = fibonacci[i-2] + fibonacci[i-1];
       fibonacci.push(answer);
     }
   }
   
   return fibonacci;
}

// Real solution
function fibonacciGenerator (n) {
   var output = [];
   
   if (n === 1){
      output = [0];
   } else if (n === 2){
      output = [0, 1];
   } else {
      output = [0, 1];
      output.push(output[output.length - 2] + output[output.length - 1]);
   }


   return output;
}


var output = fibonacciGenerator(9);
console.log(output);