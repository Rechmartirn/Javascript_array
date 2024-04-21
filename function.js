
const prompt = require('prompt-sync')();
function nainai(){
    let a = Number(prompt("Enter the first number: "));
    let b = Number(prompt("Enter the second number: "));
    let sum=a+b;
    console.log("Value A = "+a);    
    console.log("Value B = "+b);
    console.log("Sum="+sum);
};

nainai(); //calling function

// function sum(a,b){
//     return (a+b);
// }