var len = document.querySelectorAll("button").length;
for(i = 0; i < len; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        console.log(text);
        Write(text);
    });
};

function Write(text){
    document.querySelector("textarea").innerHTML += text;
};

document.addEventListener("keypress",function(event){
    var text = event.key;
    Write(text);

});
