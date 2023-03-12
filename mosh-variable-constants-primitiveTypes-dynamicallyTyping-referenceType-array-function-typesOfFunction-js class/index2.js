//constants

// if u need to reassign a value use let eg change value from 1 to 2 to any other value
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate)

// but if u do not need to reassign a value use const and no need to reassign;
const interestRates = 4.55
console.log(interestRates)

function greet() {
    console.log('hello  there')
}
greet();

function greet(lastName,firstName,age) {
    console.log('hello there I\'m ' + ' ' + lastName + ' ' + ' ' + firstName + ' '+'am'+' ' + age)
}
greet('Ahneeka','jas',19);

let colors = ['red', 'green', 'blue', 'yellow']
colors[4] = "pink";
console.log(colors)
