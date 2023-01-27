let input = document.querySelector("input");
input.addEventListener("blur", function(e){
    input.style.backgroundColor = "transparent";
    input.value = e.target.value.toUpperCase();
    input.style.color = "black";
    // console.log("Blur");
});

input.addEventListener('focus', function(){
    input.style.backgroundColor = "black";
    input.style.color = "white";
    // console.log("Focus");
});

input.addEventListener('focusin', function(){
    console.log('Focusin');
});

input.addEventListener('focusout', function(){
    console.log('Focusout');
});