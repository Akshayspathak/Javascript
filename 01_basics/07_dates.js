//   Dates

let myDate = new Date()  // object
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);


// Dates create //

// let newCreatedDate = new Date(2003,0,18,5,10)  // time & Dates

let newCreatedDate = new Date("2024-01-14")
// console.log(newCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);     // milisec value of o/p
// console.log(newCreatedDate.getTime());


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());    // only months show o/p
console.log(newDate.getDay());       // only Day show o/p


newDate.toLocaleString('default',{
    weekday:"long"
})