var len = document.querySelectorAll("button").length;
for(i = 0; i < len; i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    document.querySelector("button")
    var text = this.innerHTML;
    console.log(text);
    font(text);
    PlayAnimation(text);

});
};

function font(text){
    document.querySelector("textarea").innerHTML += text;
};

document.addEventListener("keypress",function(event){
    var text = event.key;
    font(text);
    PlayAnimation(text);

});

function PlayAnimation(text){
    document.querySelector("." + text).classList.add("anim");

    setTimeout(function(){
        document.querySelector("." + text).classList.remove("anim");
    }, 500);
};