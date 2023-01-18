let MyArray = [
    ["Adnan", 79],
    ["Farhan", 85],
    ["Sohan", 65],
    ["Saimon", 95],
];

function HighResult(MyArray){

    let HighestScorer = MyArray [0][0];
    let HighestScore = MyArray [0][1];

    for(let i = 1; i < MyArray.length; i++){
        if(HighestScore < MyArray[i][1]){
            HighestScore = MyArray[i][1];
            HighestScorer = MyArray[i][0];
            
        }
    }
return HighestScorer;
}

let Result = HighResult(MyArray);
console.log(Result);