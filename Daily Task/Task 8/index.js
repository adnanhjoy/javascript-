let h3 = document.createElement("h1");
let text = document.createTextNode("Joy");

h3.appendChild(text);

var div = document.querySelector(".para");
div.appendChild(h3);

var h1 = document.querySelector("h1");
div.removeChild(h1);

var h2 = document.createElement("h1");
var text1 = document.createTextNode("Bangladesh");
 
h2.appendChild(text1);
var find = document.getElementsByTagName("h1")[0];
div.insertBefore(h2,find);