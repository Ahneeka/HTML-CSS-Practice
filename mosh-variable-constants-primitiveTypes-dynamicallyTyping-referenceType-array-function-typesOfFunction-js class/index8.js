// type of function:  

// performing a task
function greet(name, lastName){
    console.log("Hello my people!" +" " + "i'm" + " "+name + " " +lastName);
}

greet('Ahneeka','jas');

// calculating a value 
function square(number) {
    return number * number + number;
}

console.log(square(4));
    //  OR like this
let number = square(4);//square(4); this returns a value but we can use that value to initialize a variable
console.log(number);

//addition
function calcutateFourNums(num,num2,num3,num4) {
    return num + num2 + num3 + num4;
}
console.log(calcutateFourNums(2,2,2,2,));
    // OR like this
let value = calcutateFourNums(2,2,2,2)
console.log(value);
 
