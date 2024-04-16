// const myNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20]

// const myNewNum =  myNum.filter(  (num) =>{
//     return num > 12 })                             // return karne //

// console.log(myNewNum);


///////////////// Mini Project //////////////////////////////////

const books = [
    {title: 'Book 1', genre: 'Fiction', publish: 1995, edition: 25},
    {title: 'Book 2', genre: 'non-Fiction', publish: 1988, edition: 32},
    {title: 'Book 3', genre: 'History', publish: 1971, edition: 50},
    {title: 'Book 4', genre: 'non-Fiction', publish: 1968, edition: 70},
    {title: 'Book 5', genre: 'Fiction', publish: 2001, edition: 15},
    {title: 'Book 6', genre: 'History', publish: 2005, edition: 13},
    {title: 'Book 7', genre: 'non-Fiction', publish: 2010, edition: 10},
    {title: 'Book 8', genre: 'History', publish: 2012, edition: 12},
    {title: 'Book 9', genre: 'Fiction', publish: 2015, edition: 9},
    {title: 'Book 10', genre: 'History', publish: 2022, edition: 2},
    {title: 'Book 11', genre: 'non-Fiction', publish: 2024, edition: 1},
]

let userBooks = books.filter(  (bk) => {
    return bk.genre == 'History' && bk.publish >= 2000
})

console.log(userBooks);