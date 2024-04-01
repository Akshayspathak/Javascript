// console.log(Math); // ty console all property show

// console.log(Math.abs(-4)); // -ve value o/p +ve 
// console.log(Math.round(4.3)) // roundup
// console.log(Math.ceil(4.3)) // 4.3=5
// console.log(Math.min(4.3,2.1,4.4,0.5,)) // min value
// console.log(Math.max(4.3,2.1,4.4,0.5,)) // max value

console.log(Math.random()); //random value
console.log(Math.random()*10);
console.log((Math.random()*10) + 1); // min value 1...... 0 yenar nahi


// ****************  Min or Max defined ****************



const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min + 1))+min);