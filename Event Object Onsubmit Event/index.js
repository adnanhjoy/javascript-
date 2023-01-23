var form = document.querySelector("form");
var Name = form.querySelector("div [name=name]");
var Email = form.querySelector("div [name=email]");
var Password =  form.querySelector("div [name=password]");

form.addEventListener("submit", formHandle);

function formHandle(e){
    e.preventDefault();
    var userInfo = {
        Name: Name.value,
        Email: Email.value,
        Password: Password.value,
    };
    console.log(userInfo);
    Name.value = "";
    Email.value = "";
    Password.value = "";
};
