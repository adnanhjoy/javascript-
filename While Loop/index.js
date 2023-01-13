var i = 1;
var sum = 0;

while(i<=100){
    if(i % 3 == 0 && i % 5 == 0){
        sum = sum +i;
    }
    i++;
    
}
document.write(sum);
document.write("<h5>The End</h5>")