var effect = document.querySelector("#demo");

effect.addEventListener("mouseover", function(){
    effect.classList.add("style");
} );
effect.addEventListener("mouseout", function(){
    effect.classList.remove("style");
});
