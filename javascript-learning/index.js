/*Statement*/

console.log("working");

let name = "Bolaji";
let height = 34;
var age = 12;
const API_KEy = "123YJjsn0n992";

let firstName = "Dean";
let lastName = "Michael";
console.log(firstName + " " + lastName);
alert(firstName + " " + lastName);

console.log(firstName);
console.log(age);
console.log(API_KEy);
console.log(typeof(firstName));
console.log(typeof (lastName));

console.log(`${firstName} ${lastName} is ${age} years old`);
//console.log(firstName + " " + lastName);

let user = {
  id: "SKU-1234",
  surName: "Kayode",
  firstName: "Mayowa",
  age: 12,
  phoneNumber: "08023478924",
};

let client = {
    id: "",
    surName: "",
    firstN: "",
    phoneNumber: "",
  };

// console.log(user.id);
// console.log(user["id"]);
// user["age"] = 10;
// console.log(Object.keys);


// let userId = prompt("What's your id number ?");
// client.id = userId;
// let fName = prompt("What's your firstName ?");
// client.firstN = fName;
// let surName = prompt("What's your surName ?");
// client.surName = surName;
// let phoneNumber = prompt("What's your phone number ?");
// client.phoneNumber = phoneNumber;

// alert(user);

number = [2, 4, 6, 8, 10]

for(let i = 0; i < number.length; i++){
    console.log(number[i])
}

for(let i in number){
    console.log(i)
}

//functions
function sum(firstNumber,secondNumber){
    return firstNumber + secondNumber
}

let sub = function(firstNumber, secondNumber){
    return firstNumber - secondNumber
}

let add = (firstNumber, secondNumber) => firstNumber + secondNumber

function allTogether(add1, add2){
    return add1(2,3) + add2(4,3)
}

console.log(sum(1, 2))
console.log(sub(5,3))
console.log(add(5,6))


console.log("Amirah");
setTimeout(()=> console.log("Dean"))
console.log("Kayode")

let sum = (param1,param2)=>{
    x = param1 + 1;
    param2(param1, x);
}

// let sub = (num1,num2) =>{
//     return num1 - num2
// }

sum(5, (num1,num2) =>{
    return num1 - num2
})