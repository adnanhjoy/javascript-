var h3 = document.createElement("h1");

var text = document.createTextNode("Joy");

h3.appendChild(text);

var myDiv = document.getElementsByClassName("my-div")[0];
myDiv.appendChild(h3);

var h2 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(h2);

var h1 = document.createElement("h1");
var text1 = document.createTextNode("Bangladesh");
h1.appendChild(text1);
var find = document.getElementsByTagName("h1")[0];
myDiv.insertBefore(h1,find);