// object 
// an object is like an array of items but in this case it's not just a list we have to create an index for it. N.B object must always have key and value  and the value can be anything not only a string
const num = [3,4,9,4,6,2]; // array
const details = {
    firstName:"john",// key:and value
    lastName:"Doe",
    age: 19,
    gender:"female",
    isActive: true,
    subjects:['math', 'english', 'pysics', 'biology'], // an object can have an array
    parents:{
        father:'Abel',
        mother:'janet'
    }
};// object
details.subjects.push('chemistry')
details.subjects.unshift('agric', 'furthermath')
details.subjects.shift()


console.log("hi i'm" + " " + details.firstName + ' ' + details.lastName); 

console.log(num[2]);//array
console.log(details["firstName"]);//object
console.log(details);
console.log(details['parents']['father']); //this is to get access to the either father or mother
      //or
console.log(details.parents.father)      
console.log(details['subjects']);
      //or
console.log(details.subjects);

// combnation of array and object together
const users = [
    {
        firstName: 'John',
        lastName: 'Smith',
        age: 21
    },
    {
        firstName: 'jane',
        lastName: 'mary',
        age: 15
    },
    {
        firstName: 'Ade',
        lastName: 'Bisi',
        age: 20
    },
    {
        firstName: 'Kola',
        lastName: 'wole',
        age: 22
    },
];

console.log(users[0].age);
     
