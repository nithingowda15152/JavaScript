console.log(document.body);
console.log(document.head);
console.log(document.title);
console.log(document.scripts);
console.log(document.images);
console.log(document.links);
console.log(document.forms);

//DOM Targetting Methods

//getElementById("id")-->target and element with specified id
console.log(document.getElementById("text"));

//getElementsByClassName("classname")-->to target multiple elements with specified classname
let ps=document.getElementsByClassName("para");
console.log(ps);

//returns html collection:Array like Object
//Arrays.from()--> html collection-Array
let arr=Array.from(ps)
console.log(arr);

//getElementsByTagname("Tagname"):To target multiple elements with specified tagname
let btns=document.getElementsByTagName("button");
console.log(btns);

// ! querySelector("selector") : to target a single element with specified css selector
console.log(document.querySelector("#text"));
console.log(document.querySelector('.para'));

// ! QuerySelectorAll("Selector") :  to target a multiple elements with specified css selector
let buttons = document.querySelectorAll("#btn_blk button")
console.log(buttons);

// nodelist : array like object