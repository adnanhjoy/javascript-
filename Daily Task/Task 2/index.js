function highscore (score){
    max = score[0];
    for(var i = 1; i < score.length; i++){
        if(max < score[i]){
            max = score[i];
        }
    }
    return max;
}
var score = [10, 20, 30, 40];
var result = highscore(score);
document.getElementById("demo").innerHTML = (result);
