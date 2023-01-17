function Student(name,roll,gpa){
    this.name = name;
    this.roll = roll;
    this.gpa = gpa;

    this.Display = function(){
        console.log(this.name);
        console.log(this.roll);
        console.log(this.gpa);
    }
}

var Student1 = new Student("Adnan Hossain", 934677, 3.45);
var Student2 = new Student("Suhag Hossain", 934657, 3.55);
var Student3 = new Student("Farhan Ahmed", 934647, 3.65);

Student1.Display();
Student2.Display();
Student3.Display();