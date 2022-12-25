alert("Hello My People")

let userName = prompt("Enter userName");
while ( ! validateUserName(userName)){
    userName = prompt("Please enter a valid userName")
}
console.log(userName);

function validateUserName(name){
    if(name === null) return true;
    if(name.length < 10){
        return true;
    }
    return false;
}


let password = prompt("Enter userName");
while (! validatePassword(password)){
    password = prompt("Please enter a valid password")
}

console.log(password);

function validatePassword(password){
    if(password === null) return false;
    if(password.length > 6){
        return true;
    }
    return false;
}

let confirmPassword = prompt("Enter userName");
while (Password !== confirmPassword){
    confirmPassword = prompt("password do not match\n please enter password again")
}

console.log(confirmPassword);

function validateconfirmPassword(confirmPassword){
    if(password === null) return false;
    if(password.length > 6){
        return true;
    }
    return false;
}






