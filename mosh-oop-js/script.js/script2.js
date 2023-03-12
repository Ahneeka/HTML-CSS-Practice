// factories and constructor: it also use to define an object

// object literal syntax is not a good way to create an objects and duplicate it if this object have atleast one method. if an object have one or more methods we say that objects have behavior like a person that can do defferend things


// the solution is to use factories and constructor

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
circle.draw();

