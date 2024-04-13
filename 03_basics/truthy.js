// const userEmail = []    // " " Don't, [] Email

// if (userEmail) {
//     console.log("Got user Email");
    
// } else {
//     console.log("Don't have user email");
// }



// falsy values 

// false, 0, -0, bigInt 0n, "", null, undefined, NaN


// Truthy Values

// [], "0", 'false', " ", {}, function(){}, 


// if (userEmail.length === 0) {
//     console.log("Array is Empty");           // Array check length only
    
// }   


// // const emptyObj = {}

// // if (Object.keys(emptyObj).length === 0) {
// //     console.log("object is empty");

    
// }


//***** */ Nullish Coalescing Operator (??) : null undefined ******************************

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 20



// console.log(val1);


//************** Terniary Oparetor *********************


// condition ? true : false   ///syntex

const iceTea = 100

iceTea <=90 ? console.log("less then 90") : console.log("more then 90");