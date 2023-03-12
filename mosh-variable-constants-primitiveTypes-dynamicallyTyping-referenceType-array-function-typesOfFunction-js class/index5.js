// Reference Types
// 1.Object
// 2.Array
// 3.Function

// instead of declaring multiple variables one by one e.g let name = "foo", let age = "19" we can but it in a persons  object 

// we have a person object with three properties or three value pairs name,age,and lastName
let persons = {
    name: "foo",
    age: 19,
    lastName: "John"
}; // the curly brace is an object literal
//  to run this console.log(persons)

// they are two ways to work with this property
// 1. Dot notation: we use the dot notation to read the value of a property 
persons.name = "Ahneeka"; // we reassign a new value pair N.B to run this console.log(persons.name)

// 2.Bracket notation
let selection = 'name'
// then we can now put persons[selection] = 'mary';
persons['name'] = "Mary"; // we reassign a new value pair N.B to run this u can use console.log(persons.name) or console.log(persons['name'];

console.log(persons['name']);

// key:value
// name:"foo"

function greet(){
    console.log("Hello there!");
}
greet();

function greet(firstName, lastName, age){
    console.log("Hello there! i'm " + firstName + " " + lastName+" " +"i'm"+' '+ age+' '+'years old');   
}
greet('Ahneeka','jas','19')

