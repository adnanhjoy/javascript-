function view(num){
   document.querySelector("#result").value += num;
};

function calculate(){
    var x = document.querySelector("#result").value;
    var y = eval(x);
    document.getElementById("result").value = y;
};

function clr(){
    document.querySelector("#result").value = "";

};

