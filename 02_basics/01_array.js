  // *****************array*********************************

//   The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.


const myArr = [0,1,2,3,4,5,7,8]
const myHeros = ["shiktiman", " Bhim"]
// console.log(myArr[2]);
// console.log(myHeros[1]);


//****************Array Methods**************************************** */


// myArr.push(10)
// myArr.push(9)              // push Add the Value
// myArr.pop()              // last value delete karta


// myArr.unshift(101)     // Unshift Add Starting Add value
// myArr.shift()             // shift Start in 1

// console.log(myArr.includes(7));   // compare True or False ( value Include or Not)
// console.log(myArr.indexOf(3));   // index of value in o/p



// const newArr = myArr.join()    // String convert

// console.log(myArr);  
// console.log(newArr);     

// console.log(typeof newArr);     



//***********slice, splice************************** */

console.log("A",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("c",myArr);
console.log(myn2);



