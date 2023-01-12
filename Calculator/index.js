var num1 = parseFloat(prompt("Enter First Number:"));
var op = prompt("Enter Your Operator:");
var num2 = parseFloat(prompt("Enter Second Number:"));
var sum, sub, mul, div, mod;

if(op == "+"){
sum = num1 + num2;
document.write("The Summation is = " +sum);
}
else if(op == "-"){
sub = num1 - num2;
document.write("The Subtraction is = " +sub);
}
else if(op == "*"){
mul = num1 * num2;
document.write("The Multiplication is = " +mul);
}
else if(op == "/"){
div = num1 + num2;
document.write("The Division is = " +div);
}
else if(op == "%"){
mod = num1 % num2;
document.write("The Modolus is = " +mod);
}
else
document.write("Error");

