let Picture = ["image/1.jpg","image/2.jpg","image/3.jpg","image/4.jpg"];
let image = document.querySelector("img");
let count = 0;

function previous(){
    count--;
    if(count < 0){
        count = Picture.length - 1;
        image.src = Picture[count];
    }else{
        image.src = Picture[count];
    }
}
function next(){
    count++;
    if(count >= Picture.length){
        count = 0;
        image.src = Picture[count];
    }else{
        image.src = Picture[count];
    }
}