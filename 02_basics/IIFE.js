// Immediately Invoked Function Expressions(IIFE)

(function chai(){    // named iife
    console.log(`DB CONNECTED`);
})  ();
   // sometimes u need to end the invoking function with ';'


// (() =>{  // unamed or simple iife
//     console.log(`DB CONNECTED TWO`);
// }) ()


( (name) =>{ // writing of two iife separated by semicolon and also with parameter
    console.log(`DB CONNECTED TWO ${name}`);
}) ('hitesh')






