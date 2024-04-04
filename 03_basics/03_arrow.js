// function chai () {
//     let username="Ak"
//     // console.log(this.username);
// }
// chai()




const chai = () => {
    let username = "Ak"
    console.log(this.username);
}
// chai()

//-****************************Arrow Function ***************

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,2));

// Or


// const addTwo = (num1,num2) =>  num1 + num2  // Or implicit return 
// const addTwo = (num1,num2) =>  (num1 + num2) // () use

const addTwo = (num1,num2) =>  ({username: "Ak"}) // object return
    
    console.log(addTwo(3,2));

   







