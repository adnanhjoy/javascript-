var len = document.querySelectorAll(".button").length;
for(i = 0; i < len; i++){
    document.querySelectorAll(".button")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        console.log(text);
        
        switch (text){
            case "Music":
                var audio = new Audio("sound/music.mp3");
                audio.play();
                break;
            case "Speech":
                var audio = new Audio("sound/speech.mp3");
                audio.play();
                break;
            case "Nashed":
                var audio = new Audio("sound/nasheed.mp3");
                audio.play();
                break;
        };
    });
    
};
