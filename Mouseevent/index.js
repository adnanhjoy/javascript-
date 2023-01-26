console.clear();
let div = document.querySelector("div");

div.addEventListener("click", function(){
    console.log("Clicked");
});

div.addEventListener("dblclick", function(){
    console.log("Dblclicked");
});

div.addEventListener("mousedown", function(){
    console.log("Mousedown");
});

div.addEventListener("mouseup", function(){
    console.log("Mouseup");
});

div.addEventListener("mouseenter", function(){
    console.log("Mouseenter");
});

div.addEventListener("mouseleave", function(){
    console.log("Mouseleve");
});

div.addEventListener("mousemove", function(){
    console.log("Mousemove");
});

div.addEventListener("mouseover", function(){
    console.log("Mouseover");
});

let button = document.querySelectorAll("button");

Array.from(button).map((buttons) => {
    buttons.addEventListener("click", function(e){
        console.log(e.target.innerText);
    });
});