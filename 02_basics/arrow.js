const user ={
    username : "VASUDEV",
    price:999,

    welcomeMsg: function(){
        console.log(`${this.username} welcome to the website`);
        console.log(this);
    }
}
// user.welcomeMsg()
// user.username = "Sam"
// user.welcomeMsg()

console.log(this); // current context is empty because in node enviroment this refers to empty


// function chai(){
//     let username = "vasudev"
//     console.log(this.username); // u cant use this inside functions
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

const chai = () => {  // => this is a arrow function
    let username = "vasudev"
    console.log(this.username );
}

// arrow functions 

// const addTwo =(num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));


//    implicit return type declaration of arrow 
//  const addTwo =(num1,num2) =>  (num1 + num2)  // for single line statement 
//  console.log(addTwo(3,4));

// object return 

const addTwo = (num1, num2) => ({username: "hitesh"})

 








