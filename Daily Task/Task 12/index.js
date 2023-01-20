let num1 = parseInt(prompt("Enter Your First Number: "));
let op = prompt("Enter Your Operator: ");
let num2 = parseInt(prompt("Enter Your Second Number: "));


let sum, sub, mul, div, mod;

if(op == "+"){
    sum = num1 + num2;
    document.write("The Summation is: " + sum);
}
else if(op == "-"){
    sub = num1 - num2;
    document.write("The Subtraction is: " + sub);
}
else if(op == "*"){
    mul = num1 * num2;
    document.write("The Multiplication is: " + mul);
}
else if(op == "/"){
    div = num1 / num2;
    document.write("The Division is: " + div);
}
else if(op == "%"){
    mod = num1 % num2;
    document.write("The Modulas is: " + mod);
}else{
    document.write("Error");
}