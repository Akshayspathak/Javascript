// singleton
// object.create

// object literals
const mySym = "key2"
const jsUser ={
    name:"Akshay",
    [mySym]: "mykey1",
    age:22,
    location: "abad",
    email: "Akshay@com",
    osLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
console.log(jsUser.age);
// console.log(jsUser.email);
// console.log(jsUser[mySym]);

jsUser.greeting = function () {
    console.log("hello JS user");
}
jsUser.greetingTwo= function () {
    console.log(`hello JS user,${this.email}`);
}



console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
console.log(jsUser.name);









