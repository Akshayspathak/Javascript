// *************** for ***************

for (let i = 5; i <= 15; i++) {

const element = i
if (element == 8) {
    // console.log("this is a best Number");
    
}
    // console.log(i);
    
} 


for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loops value : ${i}`);
    for (let J = 0; J <= 10; J++) {
        // console.log(`inner loop value: ${J} and inner loop value ${i}`);

        // console.log(i + '*' + J + '=' + i+J);    // PADHE    
        
        
        
    }
}



//******** Array********************* */


let myArray = ["Akshay","Adi","Motya", "Piya"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


//************* Break & Countinue  ***********************/

for (let index = 1; index <= 20; index++) {
    if (index == 6) {
        console.log("Best value is 6");
       break
        
    }
  console.log(`my value is ${index}`);
}

// for (let index = 1; index <= 20; index++) {
//     if (index == 6) {
//         console.log("Best value is 6");
//         continue
        
//     }
//   console.log(`my value is ${index}`);
// }