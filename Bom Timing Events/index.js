let message = document.querySelector("p");
document.querySelector("button").addEventListener("click", function(){
    message.innerHTML = "user registration succesful";
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);
});

document.querySelector("button").addEventListener("click", timeCount);
function timeCount(){
    let count = 1;
    message.innerText = count;
    setInterval(() => {
        count++
        message.innerText = count;
    }, 1000)
}