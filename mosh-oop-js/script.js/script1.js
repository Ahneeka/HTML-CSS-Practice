// we will cover some basics concepts of object
// 1.creating objects
// 2.factories and constructors
// 3.primitives and references types: and how they behave differently
// 4.working with properties: such as add and removing properties
// 5.private properties
// 6.getters and setters


// object literals
const circle = { // this is refered to as properties and circle have 3 members
    radius: 1,
    location:{
        x: 1,
        y: 1
    },
    draw: function  () {  // if a member is a function it is refered to as a method coz function and method is use to define logic
        console.log('can we be friends ');
    }
};
// to access the circle members we use dot notation
circle.draw();
