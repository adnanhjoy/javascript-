console.clear();
var Name = document.querySelectorAll("input[name=form]");
var Checkbox = document.querySelectorAll("input[name=check]");
var District = document.querySelector("#zilla");


Array.from(Name).map((Name) => {
    Name.addEventListener("change", Message);
});
Array.from(Checkbox).map((Checkbox) => {
    Checkbox.addEventListener("change", Checked);
});

District.addEventListener("change", Districted);

function Checked(e){
    if(e.target.checked){
        console.log(e.target.value);
        };
};
function Message(e){
    console.log(e.target.value);
};

function Districted(e){
    console.log(e.target.value);
};