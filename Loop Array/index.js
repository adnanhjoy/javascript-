//Input From Keyboad
var num = Array();
for (var i = 0; i < 5; i++){
    num[i] = parseInt(prompt("Enter Your Number: "));
}
sum = 0;

for(var i = 0; i < 5; i++){
    sum = sum + num[i];
}

document.write("The Summation is: "+sum + "</br>"+"</br>");

//input without keybord
var num = [10, 20, 30, 40, 50];
sum = 0;

for(var i = 0; i < 5; i++){
    sum = sum + num[i];
}

document.write("The Summation is: "+sum);