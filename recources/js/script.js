//Comments are numbered like this: (C*number*)

//Gives 'num1'-'num3' the value of 'false' (C1)
var num1 = false
var num2 = false
var num3 = false
//End of comment (C1)
//Makes $screen work in-place of $("#screen"); same with $number (C2)
var $screen = $("#screen");
var $number = $(".number");
//End of comment (C2)
var currentNumber = 1
var parentheses = false
var click = 0


function stuff(){
    if (click > 6){
        click = click - 7;
        console.log(click)
    }
}

function findAnswer(){
    num1 = parseInt(num1);
   num2 = parseInt(num2);
   if (op == "+") {
    answer = num1 + num2
   }
   if (op == "-") {
    answer = num1 - num2
   }
   if (op == "x") {
    answer = num1 * num2
   }
   if (op == "/") {
    answer = num1 / num2
   }
}

function findAnswer2(){
    num1 = parseInt(num1);
   num2 = parseInt(num2);
   if (op == "+") {
    if (num1 == 9, num2 == 10) {
        answer = 21
    } else {
    answer = num1 + num2
    }
   }
   if (op == "-") {
    answer = num1 - num2
   }
   if (op == "x") {
    answer = num1 * num2
   }
   if (op == "/") {
    answer = num1 / num2
   }
}

//Displays stuff on the screen depending on button pressed (C3)
document.getElementById("decimal").onclick = function writeDecimal()
{
    $screen.append(".");
}

$("#plus").on('click', function() {
    if (num1 != false) {
    stuff()
    $screen.append("+");
    if (currentNumber == 1) {
        currentNumber = 2;
        console.log(currentNumber)
        op = "+";
    } else {
        $screen.empty()
        findAnswer();
   $screen.append(answer + "+");
   num1 = (answer)
   num2 = false
   op = "+";
    }
   }
   return;
})

document.getElementById("minus").onclick = function writeMinus()
{
    if (num1 != false) {
    stuff()
    $screen.append("-");
    if (currentNumber == 1) {
        currentNumber = 2;
        op = "-";
    } else {
        $screen.empty()
        findAnswer();
   $screen.append(answer + "-");
   num1 = (answer)
   num2 = false
   op = "-";
    }
    }
    return;
}

document.getElementById("times").onclick = function writeTimes()
{
    if (num1 != false) {
    stuff()
    $screen.append("x");
    if (currentNumber == 1) {
        console.log(currentNumber)
        console.log(click)
        currentNumber = 2;
        op = "x";
    } else {
        $screen.empty()
        findAnswer();
   $screen.append(answer + "x");
   console.log(click)
   num1 = (answer)
   num2 = false
    op = "x";
    }
    }
    return;
}

document.getElementById("divide").onclick = function writeDivide()
{
    if (num1 != false) {
    stuff()
    $screen.append("/");
    if (currentNumber == 1) {
        currentNumber = 2;
        op = "/";
    } else {
        $screen.empty()
        findAnswer();
   $screen.append(answer + "/");
   num1 = (answer)
   num2 = false
    op = "/";
    }
    }
    return;
}

document.getElementById("parentheses").onclick = function writeParentheses()
{
    if (parentheses == false) {
    $screen.append("(");
    parentheses = true
    } else {
        $screen.append(")")
        parentheses = false
        op = "x";
        currentNumber = 2
    }
}

document.getElementById("square").onclick = function writeSquare()
{
    stuff()
    $screen.empty();
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);
    if (currentNumber == 1) {
    //Makes num2 the same as the number pressed and then multiplies them (C6)
    num2 = num1
    answer = num1 * num2
    } else {
        num3 = num2
        square = num2 * num3
        if (op == "+") {
            answer = num1 + square
           }
           if (op == "-") {
            answer = num1 - square
           }
           if (op == "x") {
            answer = num1 * square
           }
           if (op == "/") {
            answer = num1 / square
           }
    }
    //End of comment (C6)
    $screen.append(answer)
    num1 = answer
    num2 = false
    num3 = false
    currentNumber = 1
}

document.getElementById("squareroot").onclick = function writeSquareroot()
{
    $screen.append("");
    if (currentNumber == 1) {
        currentNumber = 2;
    }
}

document.getElementById("clear").onclick = function writeClear()
{
    $screen.empty();
    num1 = false
    num2 = false
    num3 = false
    currentNumber = 1
    parentheses = false
    click = 0
}

document.getElementById("equal").onclick = function writeEqual()
{    
    /*
    document.getElementById("screen").innerHTML = "21";
    */
   $screen.empty();
   findAnswer2();
   var answerLength = answer.toString();
   /*
   if (num1 == 9, num2 == 10, op == "+") {
    answer = 21
   }*/
   if (answerLength.length > 14) {
    $screen.empty();
    $screen.append("Too long");
   }
    else {
   $screen.append(answer);
   }
   click = answerLength.length;
   num1 = answer
   num2 = false
   num3 = false
   currentNumber = 1
}
//End of comment (C3)

//Displays number clicked on screen and saves the content place on screen (C4)
$number.on('click', function() {
    click++;
    if (click > 6){
        return;
    }
    console.log(click)
    var numberPressed = $(this).html();
    $screen.append(numberPressed);
    //If the current number is 1, then it checks if there any numbers have been
    //pressed, if not, it assigns the number pressed to num1, if it has, it appends
    //it onto whats already there, then it repeats with num2 (C5)
    if (currentNumber == 1) {
        console.log("currentNumber = 1")
        if (num1 == false) {
            console.log("num1 = false")
            num1 = numberPressed;
        } else {
            num1 = num1 + numberPressed;
        }
    }
    if (currentNumber == 2) {
        console.log("currentNumber = 2")
        if (num2 == false) {
            console.log("num2 = false")
            num2 = numberPressed;
        } else {
            num2 = num2 + numberPressed;
        }
    }
    //End of comment (C5)
});
//End of comment (C4)