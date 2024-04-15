
const coding = ["Js", "Java", "CPP", "ruby","HTML", "CSS"]

// coding.forEach( function (item) {            // function
//     console.log(item);
    
// })
                                                // Or
// coding.forEach((val)=> {
//     console.log(val);                            // Arrow Function

// })                                           // Or

// function printMe(item) {
//     console.log(item);                    // normal Function
// }
// coding.forEach(printMe)


// coding.forEach((item,index,arr)=>{            // All Parameter (item,index,arr)
//     console.log(item,index,arr);
// })




// **********[{},{},{}] ********************

const myCoding = [ 
    {
    name : "javascript",
    fileName : "java"
},
{
    name : "java",
    fileName : "java"
},
{                                // Array Madhe Object Madhe property Name Or FileName output madhe gheu Shakto
    name : "pythan",
    fileName : "py"
}]

myCoding.forEach( (item)=> {
    console.log(item.fileName);
    console.log(item.name);
})