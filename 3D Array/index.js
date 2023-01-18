let MyArray = [
    ["Adnan", 01, 78],
    ["Farhan", 02, 45],
    ["Sohan", 03, 80],
    ["Joy", 04, 85],
    ["Saimon", 05, 65],
];

function HighestMark(MyArray){
    let HighestMarker = MyArray[0][0];
    let HighestMarks = MyArray[0][2];
    let Roll = MyArray[0][1];
    for(let i = 1; i < MyArray.length; i++){
        if(HighestMarks < MyArray[i][2]){
            HighestMarks = MyArray[i][2];
            HighestMarker = MyArray[i][0];
            Roll = MyArray[i][1];
        }
    }
    return HighestMarker;
    return Roll;
}

let Result = HighestMark(MyArray);
console.log(Result + " Roll ");