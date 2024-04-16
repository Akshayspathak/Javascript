// const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumbers = myNumbers.map(  (num) => { return num + 10})      // map use
// console.log(newNumbers);

// const newNum2 = myNumbers.forEach (  (num2) => {               // forEach use
//     console.log(num2);
// })


//******************* */ Chaining Method  ********************************

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const myNewNumbers = myNumbers
                             .map(  (num) => {return num * 10})      // msp use
                             .map(  (num) => { return num -2})
                             .filter ( ( num) => { return num >= 40})    // Filter use
                             console.log(myNewNumbers);

    










