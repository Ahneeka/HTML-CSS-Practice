// Assignment
//  create a function that accept a number as a parameter and return the square of that number, then using the function, find the square of the numbers in this array [6 , 9, 12, 15, 30, 19, 88, 678, 633]

function square(number){
    return number * number 
}
console.log(square(2));
    //  or
let sameSquare = square(2)
console.log(sameSquare);



let numbers = [6, 9, 12, 15, 30, 19, 88, 678, 633];

let someSquare = numbers.map((number)=>{
    return square(number)
});

console.log(someSquare);
        // or

const numberss = [6, 9, 12, 15, 30, 19, 88, 678, 633];
function findSquare(n){
    return n**2;
}

numberss.map((num) =>{
    const square = findSquare(num);
    console.log(square);
});



// let {log} = console;
// log('hello world');

// let x = 5;
// console.log((x=6));


// let z= 'hello, world';
// let y = 'number';
// console.log(y == typeof z);

// const nums = [1,2,3];
// nums.push(4);
// nums.pop();
// nums.push(4);
// nums.unshift(5,4); //unshift will shift 1,2,3,4 to 5,4,1,2,3,4
// nums.shift()// shift will shift the 5 so it will be 4,1,2,3,4
// console.log(nums);


// let x = '10';
// let y = 20;
// console.log(x + y);

// let x = ['rice ', 'beans'];
// let y = ['rice ', 'beans'];

// console.log(x == y);

let x = [1, 2, 3, 4, 5];
let y = x.filter((e) => e % 2 === 0)
console.log(y);
const arr = [1, 2, 3];
arr.length = 0;
arr.push(4);
console.log(arr);