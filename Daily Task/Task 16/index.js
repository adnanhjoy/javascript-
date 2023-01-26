document.querySelector("button").addEventListener("click", function(){
    let text = this.innerHTML;
    console.log(text);
    write(text);
});

function write(text){
    document.querySelector("textarea").innerHTML += text;
};

document.addEventListener("keypress", function(event){
    let text = event.key;
    // document.querySelector("a").innerHTML = text;

    write(text);
});