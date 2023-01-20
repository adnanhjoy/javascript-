let len = document.querySelectorAll(".button").length;

for(i = 0; i < len; i++){
let effect = document.querySelectorAll(".button")[i];
effect.addEventListener("click", function(){
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is clicked";
});
};