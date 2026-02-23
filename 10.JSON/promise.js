//Promise--is an object,powerful way to work with asynchronus js
//mock--as of now--pending state
//mock completed--fullfilled state
//mock not completed--rejected state

let mypromise=new Promise((res,rej)=>{
    let mock=true
    if(mock===true){
        res("Thank you for attending mock")
    }
    else{
        rej("Do attend the mock without fail")
    }
})
console.log(mypromise);

//then:resolved
//.then() is used to handle the successful result (resolved value) of a Promise.
//It runs only when the promise is fulfilled (resolved).
mypromise.then((data)=>{
    console.log(data);})

//catch():rejected
//.catch() is used to handle errors (rejected state) in a Promise.
mypromise.catch((err)=>{console.log(err);})

//finally():always
mypromise.finally(()=>{console.log('all the best');})

// ! async and await

// async is a keyword used before a function.
// It makes a function always return a Promise.
async function greet() {
    return "Hello";
}
console.log(greet());

// await:
// await is used inside an async function.
// It waits for a Promise to finish (resolve),It pauses execution until the Promise completes
function mockTest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Mock completed");
        }, 2000);
    });
}
async function result() {
    let res = await mockTest();
    console.log(res);
}
result();

