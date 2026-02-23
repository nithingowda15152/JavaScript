//JSON-javascript object notation:most popular format of storing and transporting

let emp={
    ename:"nithin",
    eid:11,
    salary:1000000
}

console.log(emp);

//JSON-stringify():js object into json object
let jsonEmp=JSON.stringify(emp);
console.log(jsonEmp);

//JSON-parse():JSON object into normal js object
let newEmp=JSON.parse(jsonEmp)
console.log(newEmp);