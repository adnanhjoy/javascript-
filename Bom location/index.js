let myDiv = document.querySelector(".my-div");

let p1 = myDiv.children[0];
p1.innerHTML = location.href;

let p2 = myDiv.children[1];
p2.innerHTML = location.protocol;

let p3 = myDiv.children[2];
p3.innerHTML = location.hostname;

let p4 = myDiv.children[3];
p4.textContent = location.port;

let p5 = myDiv.children[4];
p5.innerText = location.pathname;

document.querySelector("button").addEventListener("click", function(){
    location.assign("https://adnanhossaincse.blogspot.com");
});