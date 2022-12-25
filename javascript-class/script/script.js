let number = new Array();
number.push(1);
number.push("Hello")
console.log(number);

let names = ["Glory", "Jude", "Peter", "Micheal", "Ernest"]
names.forEach((name) => console.log(name));

let newNames = names.map((name => "Hello, " + name))


let userMap = new Map();
let user1 = {
    school: "Semicolon",
    cohort: "13",
}

let userObject = {
    name: "Tayo",
    age: 15,
    gender:"Male",
    height: "6'4",
    user1: "NATIVE"
};
console.log(userObject);

userMap.set("one, uno");
userMap.set(userObject, user1);

for(i of userMap.keys()){
    console.log (i);
}


//Destructuring an Array

let name = ["Adebayo", "Olubisi", "Joseph"];

let [, ,hello] = names;
console.log(hello);
