// ************************ Reduce ******************************************
// const array1 = [1, 2, 3, 4];             // sytex

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// Expected output: 10




// const myNums = [1,2,3]

// const total = myNums.reduce(function (acc, currval) {     // function use
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc + currval
    
// },0)

// console.log(total);


// **************** Arrow Function **************************


const myNums = [1,2,3]

const myTotal = myNums.reduce( (acc, currval) => acc + currval ,0)

console.log(myTotal);

// *************  Ex. Shopping Markets ******************************


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },

    {
        itemName: "python course",
        price: 3999
    },

    {
        itemName: "Data course",
        price: 5000
    },

    {
        itemName: "rudy course",
        price: 10000
    },
]

const priceToPay = shoppingCart.reduce(  (acc,item) =>  acc + item.price,0)
console.log(priceToPay);