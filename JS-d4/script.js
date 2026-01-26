let sentence = "I am a comma separated sentence";
let words = sentence.split(" ");
console.log(words)

let sentence2 = " I am a comma separated sentence"
let words2 = sentence2.split("a");
console.log(words2)


// Q1. find  the occurance of "r" in the given string.

// let str = "tu meri me tera me teri tu mera";
// let res = str.split("r");
// console.log(res) 

// syncronous function : we can move to other task after the previous task finishes its execution.
// Asyncronous function : we can move to other task simulaniously before the previous task finishes its execution.


// Regular Function

function demo (){
    console.log("demo")
    }
demo()
function add(a,b){
    return a+b;
}
console.log(sample(5,10))

// Arrow Function
// Advantage: doesn't need return and function keywoerd and it will perform asyncronously

const sample = (c,b)=> c+b;


// if have multiple statemnts then if have to add return 

// const sample = (c,b)=> {
//     return c+b;
// }
console.log(test(4,6))

// Anonymous function

let arr = [1,2,3,4,5]

let res = arr.map(function(x){
    return x+2
})
console.log(res)

// setTimeout(callback,timedelay);

// setTimeout(()=>{
//     console.log("sign up")
// },1000)

// let date = new Date()
// console.log(date)

// Callback function : A function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// self invoking function


(function(){
    console.log("demo")
})()
