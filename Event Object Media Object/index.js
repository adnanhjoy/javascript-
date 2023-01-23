let Media = document.querySelector("video");
Media.addEventListener("canplay", function(){
    console.log("Canplay");
});
Media.addEventListener("play", function(){
    console.log("Play");
});
Media.addEventListener("pause", function(){
    console.log("Pause");
});
Media.addEventListener("playing", function(){
    console.log("Playing");
});
Media.addEventListener("volumechange", function(){
    console.log("Volumechange");
});
Media.addEventListener("ended", function(){
    console.log("Thanks For Watching");
});