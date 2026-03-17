function print(num){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(num);
           res();
        },1000)
    })
}

print(1)
.then(()=>print(2))
.then(()=>print(3))
.then(()=>print(4))
.then(()=>print(5))

// why asyn and await exist 
//1. to avoid promise chaining 
// 2.to execute the asyncrnous code properly without confusion 
//3. to handle the promise in a better way 

//important !!!!!
// async function always returns a promise 
// await - it will pause the async function untill the promise returns a result.

const pro = new promise ((res,rej)=>{
    setTimeout(()=>
        res("Promise resolved")
    },1000
})

// function getData({
// pro.then ((res) => console.log(res))
// console.log("After Promise");
//}
//it will print afrer promise then promise resolve , which is logically not understandable

async function getData(){
    const value = await pro;
    console.log(value):
    // logic of async function code
    console.log("After promise");

}

// it will print promise resolve first then after promise 
getData();

