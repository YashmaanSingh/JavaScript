// there are only three types of varable in Java Script 
// var = It is used before ES6 2015
// let = used for block level variable 
// const = It is used for constant 
// In javaScript variable can change in run time 
// JavaScript is a Dynamic language 
// let and  const is block scope and var is gobally scope that's why we var use is low 
let a = 10;
console.log(a)

a = "yashmaan"
console.log(a)

let b = 27
  
{ // this is how let block level scope work with same type variable name
    let b = "yashmaan"
    console.log(b)
}

console.log(b)
// a is a variable first its define a =10 (interger) and  after that it define a = yashmaan (String)


// Always try to use const in js   