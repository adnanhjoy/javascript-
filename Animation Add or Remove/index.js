var len = document.querySelectorAll(".anim").length;
for(i = 0; i < len; i++){
    document.querySelectorAll(".anim")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        console.log(text);
    })
}