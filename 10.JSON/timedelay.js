//Time Delay

//JavaScript is synchronous by default,-Code runs line by line, one after another.
//To make it Asynchronus-have some methods which delays

//1.setTimeout(function,delay)
// console.log("Hello Guys");
// setTimeout(()=>{
//     console.log("Taaaaataaa");
// },2000)//this will print after 2seconds
// console.log("Byeeeee");

//2.setInterval(function,delay)
// setInterval(()=>{
//     console.log("Have a Good Day");
//     console.log("bye");
// },3000)
// console.log("Good Morning");


//Task-->when u click on the button,the execution should stop
//3.clearTimeout()
// let wish=setTimeout(()=>{
//     document.getElementById('demo').innerText='Happyyy Birthdayy'
// },3000);

// let stopBtn=document.querySelector('button')
// stopBtn.addEventListener('click',()=>{
//     clearTimeout(wish)
// })

//4.clearInterval()
// let mytime=setInterval(()=>{
//     let d=new Date()
//     document.getElementById('demo').innerText=d.toLocaleTimeString()
// },1000)

 let stopbtn=document.querySelector('button')
 stopbtn.addEventListener('click',()=>{
     clearInterval(mytime)
})

