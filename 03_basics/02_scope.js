let a =300                // Global scope
if(true){
    let a = 10            // block of scope
    const b = 20
    // console.log("inner" ,a);

}

// console.log(a);


// *********** Nested Scope ******************
 function one () {
    const username = "Akshay"

    function two() {
        const website = "youtubes"
        console.log(username);
    }
    // console.log(website);
    two()
 }

//  one()


if (true) {

    const username = "Hitesh"
    if (username === "Hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    
}

//*************************************************************************************************** */


// *************** interesting *******************************

console.log(addOne(5))                            // o/p check only
function addOne(num){
    return num + 1
}