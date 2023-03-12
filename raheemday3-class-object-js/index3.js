// array.find(): it is use to return if it is there or not that is it returns true or false
// array.find() and array.filter() worksthe same way just that array.find() will not return all the condition that matches it  will return only the first one

const nums = [4, 8, 17, 9, 20, 35, 75, 3, 8,  25];
const anyOdd = nums.find((num)=>{
    if(num % 2 !== 0) { 
    return true;
    } else {
        return false;
    }
}); // example of array.find if  you have large list of dates and u want to check out of the dates that we have is there anyone that is in april we use .find

console.log(anyOdd);