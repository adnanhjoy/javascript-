function HighestRunScore(playersinfo){
    var max = playersinfo[0][0];
    var max = playersinfo[0][1];
    for(var i = 1; i < playersinfo.length; i++){
        if(max < playersinfo[i][1]){
            max = playersinfo[i][1];
            max = playersinfo[i][0];
        }
    }
    return max;
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