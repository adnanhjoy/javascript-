var len = document.querySelectorAll(".button").length;
for(i = 0; i < len; i++){
    document.querySelectorAll(".button")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        console.log(text);
        PlayAnimation(text);

    })
}

function PlayAnimation(text){
    var SelectedButton = document.querySelector("." + text);
    SelectedButton.classList.add("animadd");

    setTimeout(function(){
        SelectedButton.classList.remove("animadd")
    }, 1000);
};