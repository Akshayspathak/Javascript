// ********************************Note**************************************************************

// object use For in Loop
// Array use For of Loop



// for of

//["","",""]  String 
//[{},{},{}]  Object


const arr = [1,2,3,4,5]               // Array object

for (const number of arr) {
    // console.log(number);
}

const str = ["Akshay", "Adi", "Motya", "piya"]    // String object

for (const value of str) {
    // console.log(value);
    
}


// ****************** maps ****************************
const map = new Map()
map.set("Adi", "Jalna")                  // String
map.set("Motyaa", "Aurangabad")
 map.set("Piya", "Pune")
map.set("Hiteesh", "MP")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':-', value);
    
}



const myObject = {
    'Game1' : 'NFS',                   // Object   but output is not iterable 
    'Game2' : 'spiderman'
}


// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);               // for of not use for Object
// }


// **** for in loop ****************************

const myObject2 = {
    js : "javascript",                                // for in use for Object
    cpp : "C++",
    i : "Apple",
    rb : "ruby"
}

for (const key in myObject2) {
    // console.log(` ${key} shotcut is for  ${myObject2[key]}`);
        
    }



    const programming = ["HTML", "CSS","JS","React"]            // for in use Array
for (const key in programming) {
   console.log(programming[key]);                                            // key data output Madhe
    }


// ********************************Note**************************************************************

// object use For in Loop
// Array use For of Loop




