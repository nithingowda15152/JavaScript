let addBtn=document.getElementById('addbtn')
let inputelement=document.getElementById('task')
let list=document.getElementById('tasklist')

addBtn.addEventListener("click",()=>{
    if(inputelement.value==""){
        alert('Enter the task')
    }
    else{
        let li=document.createElement('li')
        li.innerText=inputelement.value
        list.append(li)
        inputelement.value=''

        li.addEventListener('dblclick',()=>{
            li.remove()
        })
    }
})