var NumberofWon = 0;
var NumberofLoss= 0;

for(i = 1; i <= 5; i++){
    var GuessNumber = parseInt(prompt("Enter Your Guessing Number: "));

    var RandomNUmber = Math.floor(Math.random()*5)+1;
    
    if(GuessNumber == RandomNUmber){
        console.log("You Have won");
        NumberofWon++;
    }
    else{
        console.log("You Have loss ! The Random Number was " + RandomNUmber);
        NumberofLoss++;
    }
}
document.write("You Have Won " + NumberofWon + " Times"  + "</br>" + "</br>");
document.write("You Have loss " + NumberofLoss + " Times");
