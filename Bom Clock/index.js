let startTime = document.querySelector('button');
let countTime = document.querySelector('h1');

startTime.addEventListener('click',startClock);

function startClock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

        minute = formate(minute);
        second = formate(second);

    let time = hour + ':' + minute + ':' + second;

    countTime.innerHTML = time;

    setInterval(startClock, 1000);
};

function formate(value){
    if(value < 10){
        value = '0' + value;    
    }
    return value;
}