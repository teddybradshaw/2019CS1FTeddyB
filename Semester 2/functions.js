// CHALLENGE 1

/*
* The following function returns the sum of two numbers
*/

function add(param1, param2){
    return param1 + param2;
}

/*
* To use the function, you need to make a function call
*/

var a = 3;
var b = 5; 

console.log(a + "+" + b + " = " + add(a,b));

/*
* Write three other functions for multiplying, subtracting, and dividing and
* test the functions as shown above.
*/

 function multiply(param1, param2){
     return param1 * param2;
 }

 var a = 3;
var b = 5;

console.log(a + "*" + b + " = " + multiply(a,b));


 function divide(param1, param2){
     return param1 / param2;
 }

 var a = 3;
var b = 5;

console.log(a + "/" + b + " = " + divide(a,b));

function subtract(param1, param2){
     return param1 - param2;
 }

 var a = 3;
var b = 5;

console.log(a + "-" + b + " = " + subtract(a,b));


// CHALLENGE 2

/*
* Loops allow us to do a repetetive action without repeting the lines of code needed.
* For example:
*
* for(var i=0; i<10; i++){
*    console.log(i);
* }
* 
* Outputs the numbers 0,1,2,3,4,5,6,7,8,9
* 
* Write a function that takes two numbers, a min and a high, and outputs the numbers 
* between the min and high. The function declaration has been done for you.
*/

 

function showNumbers(min, high){
    for(var i=min; i<high; i++){
        console.log(i);
        console.log(showNumbers);
    }
}

showNumbers(0,10)

// CHALLENGE 3

/*
* Modify the function above to take three parameters: min, high, countBy.
* Count by refers to the interval between numbers. For example:
* 
* showNumbers(3,12,4) 
*
* should display 3,7,11
*/

function showNumbers(min, high, countBy){
    for(var i=min; i<high; i+=countBy){
        console.log(i);
    }
}

showNumbers(33,10,4)