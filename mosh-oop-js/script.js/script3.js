// constructor function:it another wa of creating an object.when defining a constructor we use upper case for the naming convention


// factory function
function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}

// calling this function to create a new circle
const   circle = createCircle(1);


// consructor function
function Circle(radius) {
    // but in the body instead of returning an object we are going to use the this keyword to se the properties of this object
    this.radius = radius;
    this.draw = function (){
        console.log("draw");
    }
}
// creating a new circle
const another = new Circle(2);


// consructor property: every object in javascript has a property called constructor that refers a function that was used to construct or create an object

// we have two objects circle and another so to check for their constructor properties we check on the console  by calling the object.constructor eg another.constructor

// N.B every object has a constructor property
