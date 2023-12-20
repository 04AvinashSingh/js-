// singleton

//object.create

//object literal
const mySym = Symbol("key1")

const jsuser={
    name:"Avinash",
    "full name":"Avinash kumar",
    age:20,
    location:"Bangalore",
    email:"Avinash@google.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySym])

Jsuser.email = "Avinash@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "Avinash@microsoft.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());