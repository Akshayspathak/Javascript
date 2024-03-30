const name = "AAkash"
const repo = 50
// console.log(name + repo + " More" );  // old syntax of string

console.log(`This is my name is ${name.toUpperCase()} my repo is ${repo}`);

const gameName = new String (`akshay-sudhir-pathak`)

console.log(gameName.charAt(2));     //  for index position
console.log(gameName.indexOf('y'));  //  same

const newString = gameName.substring(0,2)  // concat method
console.log(newString);


const newString2 = gameName.slice(-6,2)  // slice method
console.log(newString2);

const newStringOne = "      Akshay      "
console.log(newStringOne);
console.log(newStringOne.trim());   // remove spaces


const url = "https://aakash.com/aakash30%more" // replace values
console.log(url.replace ('30%','-'));
console.log(url.includes('aakash'));          // valus aahe ka nahi url madhe check 


console.log(gameName.split("-"));   // separeter values