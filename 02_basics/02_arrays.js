const marvel_heros = ["Thar","Ironman","Spiderman"]
const dc = ["Superman","Flash","batman"]

// marvel_heros.push(dc)      // Push Add Array + Array
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const allHeros = marvel_heros.concat(dc) // Concat Add 

// console.log(allHeros);

//************Or************ */

// const all_New_Heros = [...marvel_heros, ...dc]   // spread Or concat same
// console.log(all_New_Heros);

const another_Array = [1,2,3,[4,5],6,7,[2,3,[8,9,[0,1,2,3,4,5,]]]]
const real_another_Array = another_Array.flat(Infinity)                // All Array Show
// console.log(real_another_Array);

console.log(Array.isArray("Akshay"));

console.log(Array.from("Akshay"));             // Array Format String

console.log(Array.from({name:"Akshay"}));     // object Format o/p Empty [] array

let score1 = 100
let score2 = 200
let score3 = 300  
console.log(Array.of(score1,score2,score3));      // Add All Array.of
