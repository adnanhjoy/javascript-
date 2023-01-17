console.clear();
function highestscore (score){
    var max = score[0];
for(i = 1; i < score.length; i++){
if (max < score[i]){
    max = score[i];
}
}
return max;
}
var score = [20, 3, 76, 23, 78];
var maxscore = highestscore(score);
console.log(maxscore);
