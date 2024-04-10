// Immediately Invoked Function Expressions  (IIFE)


(function chai () {          //named IIFE
    console.log(`DB Chai`);
})();


( () => {
    console.log(`DB Connected`);
})();


(function Chai_code(name) {
    console.log(`yes DB ${name}`);
})("Akshay")