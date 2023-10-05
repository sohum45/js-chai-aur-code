 // scopes 
//var c = 300   global scope
let a =300 
 
if(true){    //block scope
    // let a =10
    // const b=20
    // var c =30
    // console.log("INNER" , a);
}



//console.log(a);// not defined
// console.log(b);// b is not available
// console.log(c);// prints 30 and not 300 



 // nested Scope

function one(){
    const username = "Vasudev"

    function two(){
        const website = "Youtube"

        console.log(username);
    }
   // console.log(website);

    two()
}

//one()

if(true){
    const user = "sohum"
    if(user === "sohum"){
        const website ="utube"
        //console.log(user + website);
    }
   // console.log(website);// scope was in if
}
//console.log(user);// out of scope

// ***************** interesting ***************



console.log(addone(5));// u can write here also 
function addone(num){  // u are declaring the functions only
    return num+1
}




console.log(add2(5));// this shows error here because function is hollded in variable 
const add2 = function(num){   //declaring functions as well as hollding it in a variable
    return num+2
}
add2(5)





