let heading = document.getElementById('heading')
console.log(heading);

// ! innerHTML : change the html of an element
heading.innerHTML = '<i>Have a Good day....</i>'

// ! innerText : change the content == but tags willnot work
heading.innerText = '<u>hellooo</u>'

// ! textContent : add the content
heading.textContent = 'today is the great day...'

// ! changing the value of html attribute
// heading.id = 'demo'

// ! setAttribute("attrname","attrval") : add new attribute
heading.setAttribute('title','Greetings...')

// ! style : add styles to the element
heading.style.color = 'blue'
document.body.style.backgroundColor = 'yellow'

// ! createElement("tagname") :  to create new HTML element
let newElement = document.createElement("div")
newElement.textContent = 'Hello I am div'
console.log(newElement);

// append(), appendChild() : add an element
document.body.appendChild(newElement)

// ! remove(), removeChild() : deleteing an element
// heading.remove()
document.body.removeChild(heading)