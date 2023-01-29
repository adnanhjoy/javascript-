let myDiv = document.querySelector("div");
let image = document.querySelector('img');
myDiv.children[0].addEventListener('click', function(){
    image.src = 'image/bulbon.gif';
});

myDiv.children[1].addEventListener('click', function(){
    image.src = 'image/bulboff.gif';
});