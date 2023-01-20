var len = document.querySelectorAll(".mybutton").length;

for(var i = 0; i < len; i++){
var effect = document.querySelectorAll(".mybutton")[i];
effect.addEventListener("click", function(){
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is clicked";
});
};

// var effect = document.querySelectorAll(".mybutton")[1];
// effect.addEventListener("click", function(){
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " is clicked";
// });

// var effect = document.querySelectorAll(".mybutton")[2];
// effect.addEventListener("click", function(){
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " is clicked";
// });