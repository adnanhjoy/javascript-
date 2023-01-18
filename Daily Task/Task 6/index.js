let NumberofWon = 0;
let NumberofLoss = 0;

for(i = 0; i < 5; i++){
    let GuessNumber = parseInt(prompt("Enter Your Guessing Number 1 to 5: "));
    let RandomNUmber = Math.floor(Math.random()*5)+1;

    if(GuessNumber == RandomNUmber){
        document.write("You Have won" + "</br>" + "</br>");
        NumberofWon++;
    }
    else{
        document.write("You Have loss ! The Random Number was " + RandomNUmber + "</br>" + "</br>");
        NumberofLoss++;
    }
}
document.write("You Have Won " + NumberofWon + " Times"  + "</br>" + "</br>");
document.write("You Have loss " + NumberofLoss + " Times");