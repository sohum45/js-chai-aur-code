 // scopes 
//var c = 300   global scope
let a =300 
 
if(true){    //block scope
    let a =10
    const b=20
    var c =30
    console.log("INNER" , a);
}



console.log(a);// not defined
// console.log(b);// b is not available
// console.log(c);// prints 30 and not 300 



