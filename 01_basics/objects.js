    // object literals


const mySym = Symbol("key1")


const jsUser = {
    name: "Vasudev",
    "full name":"Vasudev Shastri",// u cant access this with dot operator except square notaion
    age : 18 ,
    [mySym] : "myKey1",
    location : "Mumbai" ,
    email : "vasudev@gmail.com",
    isLoggedIn:false,
    lastDay : ["Mon", "Tues"]
}

// console.log(jsUser.email);
// console.log(jsUser["lastDay"]); // the input value should be in form of string
// console.log(jsUser["isLoggedIn"]);
// console.log(jsUser[mySym]);

// jsUser.email = "vasu@google.com"
// //Object.freeze(jsUser)
// jsUser.email = "vasu@microberg.com"
// Object.freeze(jsUser)
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`);
}



console.log(jsUser.greeting2());
console.log(jsUser.greeting());
