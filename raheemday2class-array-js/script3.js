let names1 = ["John", "Fred", "Janet", "Peter", "Doe"];

let names2 = ["bisi", "Kola", "Ade"];

// to add an item to an existing array we use .push
names1.push('ahneeka');

// if you want to add all the names together that is name1 and name2 we use CONCAT N.B concat is only used in arrays and concat is a function
let allNames = names1.concat(names2);
console.log(allNames);

// it's removes the last element in an array
allNames.pop();

console.log(allNames);



var names = ['John', 'Fred', 'Jane', 'Peter', 'doe'];
// what if we want to tell john,fred,Peter, and doe welcome

// to do this we will be using .map function or .forEach function. map and forEach does the same thing: it checks each of the values in the array

names.forEach((name)=>{ 
    console.log('welcome' + ' ' + name);
});

// what if we want to tell jane 'you are jane welcome to your space' we use if statement

const myname = 'Jane'   //|| 'doe';

names.map((name)=> {
    if (name === myname){
        console.log('you are' + ' ' + name + ' '+ 'welcome to your space');
    } else {
        console.log('welcome'+' '+ name)
    }
});


