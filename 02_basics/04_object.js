// object singleton

// const tinderUser = new Object()  // singleton object
// const tinderUser = {}            // non Singleton object
// console.log(tinderUser);

const user= new Object()
user.id = "1234"
user.name = "Akshay"
user.mail = "Akshay@gmail.com"
user.isLoggedIn = false

// console.log(user);

const regularUser = {
    email:"some@gamil.com",
    fullName: {
        userfullName: {
            firstname:"Hitesh",
            lastname: "chaudhar"
        }
    }
}

// console.log(regularUser.fullName.userfullName.firstname)


const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}
const obj3 = {5: "e", 6:"f"}

// const obj4 = Object.assign (obj1,obj2,obj3)
// console.log(obj4);

const obj5 = {...obj1,...obj2}
// console.log(obj5);


const users = [ {
    id : 1,
email:".com"}]


// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));

//****************de-structure ******************/

const course ={
    coursename:"JS in Hindi",
    price:"999",
    courseTech:"Hitesh"                    // change name

}

const {courseTech: akshay} = course       // name changes bt value same o/p same
// console.log(courseTech);
console.log(akshay);


//********************Api***************************** */



