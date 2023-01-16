var Name = [" Adnan", " Joy", " Sihab", " Hasibul"];
document.write(Name + "</br>"+ "</br>");

Name.push(" Ashik");     //push method er kaj hocche array sesher dike name jog kor
document.write(Name + "</br>"+ "</br>");

Name.pop(" Suhag");      //pop method er kaj hocche array seser dike name reove kore
document.write(Name + "</br>"+ "</br>");

Name.shift(" Utshob");    //shift method er kaj hocche array prothom theke remove kore
document.write(Name + "</br>"+ "</br>");

Name.unshift(" Istiak");    //unshift method er kaj hocche array prothom dike add kore
document.write(Name + "</br>"+ "</br>");

Name.splice(3, 0," Shawon"," Momin"); // splice method er kaj hocche array fixed kore dewa jai kothai add hobe r kthai remoev hobe
document.write(Name + "</br>"+ "</br>");

Name.splice(1,2);       // Splice methoder kaj hocche arry theke remove kora
document.write(Name + "</br>" + "</br>");

var NewArray = Name.slice(1);
document.write(NewArray + "</br>" + "</br>"); // slice method er kaj hocche arry theke method slice kore new array creat kore
document.write(Name + "</br>" + "</br>");


