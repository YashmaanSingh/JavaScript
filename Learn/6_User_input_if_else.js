let a = Number(prompt("Enter the age ")) // This is correct code but it will not work there it will work in browser console
a = Number.parseInt(a) // this is how we do type casting in javascript
console.log(a)

if(a>=18){
    alert("This age is valid")  // alert is use to pop up the message in screen if IF condition is true
}
else if(a<18){
    alert("You are a kid: ")
}
else{
    alert("This is not valid age: ")
} 