let picture = ["image/1.jpg","image/2.jpg","image/3.jpg","image/4.jpg"];
let image = document.querySelector("img");
let count = 0;

function previous(){
    count--;
    if(count < 0){
        count = picture.length - 1;
        image.src = picture[count];
    }else{
        image.src = picture[count];
    }
}
function next(){
    count++;
    if(count >= picture.length){
        count = 0;
        image.src = picture[count];
    }else{
        image.src = picture[count];
    }
}