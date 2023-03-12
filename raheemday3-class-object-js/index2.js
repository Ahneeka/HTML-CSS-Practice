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
     

// map -> Welcome, firstName, lastName. You are age years old

// array.filter()
// array.find()
// array.forEach
// array.from()
// array.keys()
// array.values()
// spread operator for array and objects


//array.filter(): filter is to check through an array and pick some of the items that match our conditions

const lessAdult = users.filter((user) =>{
    if(user.age <= 21){
        return true ;
    }else{
        return false;
    }
});

console.log(lessAdult);


//an array that does not have object
const nums = [4, 7, 17, 9, 20, 35, 75, 3, 8,  25]; // return numbers that are even

const evenNum = nums.filter((num)=>{
    if(num % 2 === 0) { 
    return true;
    } else {
        return false;
    }
});

console.log(evenNum);


const oddNum = nums.filter((num)=>{
    if(num % 2 !== 0) { 
    return true;
    } else {
        return false;
    }
});

console.log(oddNum);