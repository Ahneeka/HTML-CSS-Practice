// array.forEach(): it works the same way as map

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
     

users.forEach((user) => {
    console.log('You are welcome what your name  and how old are you'+ ' ' + "i'm"+ ' '+ user.firstName + ' ' + user.lastName + ' '+ "i'm" + ' ' + user.age+ ' ' + 'Years old');
});
       //or 

       users.forEach((user) => {
        console.log(user);
    });