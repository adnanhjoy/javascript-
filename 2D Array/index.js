function HighestRunScore(playersinfo){
    var HighestScorer = playersinfo[0][0];
    var HighestScore = playersinfo[0][1];
    for(var i = 1; i < playersinfo.length; i++){
        if(HighestScore < playersinfo[i][1]){
            HighestScore = playersinfo[i][1];
            HighestScorer = playersinfo[i][0];
        }
    }
    return HighestScorer;
}

var playersinfo = [
    ["Adnan", 21], 
    ["Suhag", 20],
    ["Ahad", 26], 
    ["Sumon", 27], 
    ["Ashik", 19], 
    
];
var maxscore = HighestRunScore(playersinfo);
console.log(maxscore);