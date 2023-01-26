let keyboard = document.querySelector("textarea");
keyboard.addEventListener("keydown", function(e){
    if(e.repeat){
        alert("Please No Repeat");
    };
});

keyboard.addEventListener("keyup", function(){
    console.log("keyup");
});

keyboard.addEventListener("keypress", function(e){
    if(e.shiftKey){
        console.log("Shift + " + e.key);
    }else{
        console.log(e.key);             //(code use for keycode value. key value for keyword, keyCode for ascii value.)
    }
                
});