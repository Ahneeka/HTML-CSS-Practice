// Array.from(): it has to do with transformation of array


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
     


const new_array = Array.from(users, (user) => {
    return {
        fullName: user.firstName + ' ' + user.lastName , age: user.age,
    }
});

console.log(new_array);