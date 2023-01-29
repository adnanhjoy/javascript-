alert("This Page is Harmful");


function deletePicture(){
    let value = confirm("Are you sure delete this item ?");
    if(value){
        console.log("Delete this item");
    }
    else{
        console.log("No deleted")
    }
};

deletePicture();

function welcomeMessage(){
    let name = prompt("Enter Your Name:");
    let h1 = document.createElement('h1');
    let text;
    if(name == null || name == ''){
        text = 'No Name Found';
    }else{
        text = 'Welcome ! '+name;
    }

    let textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
};

welcomeMessage();