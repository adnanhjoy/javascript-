function ResultList (NameResult){
    var HighResult = NameResult[0][0];
    var HighResult = NameResult[0][1];
    for(var i = 1; i < NameResult.length; i++){
        if(HighResult < NameResult[i][1]){
            HighResult = NameResult[i][1];
            HighResult = NameResult[i][0];
        }
    }
    return HighResult;
}

var NameResult = [
    ["Adnan", 85],
    ["Farhan", 90],
    ["Joy", 75],
    ["Saimon", 95],
    ["Sohan", 92],
];
var Result = ResultList(NameResult);
document.getElementById("demo").innerHTML = (Result);
