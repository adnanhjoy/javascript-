const message = (text = "Hello Bangladesh") => {
    console.log(`${text}`)
};

message();
message("I Love Bangladesh");

const sum =(x,y,...z) => {
    console.log(`x = ${x} y = ${y} z = ${z}`);
};
sum(10,20,30,40,50,60);