// Encapsulation
let baseSalary = 30_000;
let overtime = 10;     // here we have a variable
let rate = 20;

    //    combining variables and functions this process is called procedural process
function getWages() {
    return baseSalary + (overtime * rate)  //here we have a function
}
console.log(getWages());

 
// object oriented way to solve this problem
// we have an employee object 
let employee = {
    baseSalary: 30_000, 
    overtime: 10,
    rate: 20,
    getWages: function () { // getWages is a key value pair function is it's value
        return this.baseSalary + (this.overtime * this.rate);
    }
};
employee.getWages
console.log(employee.getWages());

