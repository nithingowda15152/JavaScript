//Event Propagation

let child=document.getElementById('child')
let parent=document.getElementById('parent')
let gp=document.getElementById('gp')

child.addEventListener('click',(e)=>{//e->event object,automatically declared by js
    e.stopPropagation()
    console.log('child clicked');
    child.style.backgroundColor='yellow'
},false)//false-bubbling phase->event trigger comming upward
//if TRUE-capturing phase->event trigger comming downward

parent.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('parent clicked');
    parent.style.backgroundColor='pink'
},false)

gp.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log(' clicgpked');
    gp.style.backgroundColor='yellow'
},false)