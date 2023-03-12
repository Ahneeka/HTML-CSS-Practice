// constructor function: naming in constructor we use a pascal namespace 


// factory function
function createCircles(radius) { 
    return{
        radius,
        draw() {
            console.log('draw');
        }
    };
}

// constructor function
 