window.addEventListener("load", function(){
    console.log("load");
});

window.addEventListener("unload", function(){
    console.log("Unload");
});

window.addEventListener("scroll", function(){
    console.log("Scroll");
});

window.addEventListener("resize", function(){
    let width = window.outerWidth;
    let height = window.outerHeight;
    console.log(`height: ${height}, width: ${width}`);
});

document.querySelector("details").addEventListener("toggle", function(e){
    
   e = e.target.open; 
    if(e == 1){
        console.log("Thanks for Open")
    }
    else{
        console.log("Close")
    }
    
})