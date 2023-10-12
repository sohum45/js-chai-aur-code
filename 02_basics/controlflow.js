// if statement 
// if (3!=2){  // cond. -> true executes andar k code ie. scope 
//     console.log(true)  
// }
  
// === checks type of data entered

if ( 3 === "3" ){  // strict checking
    console.log("executed");  
}


// const temp = 38
//  if (temp>50){
//     console.log("less than 50");
//  }
// console.log("temp is greater than 50");
// const score = 200;
// if(score > 100){
//     var power = "fly"
//     console.log(`User gets: ${power} this as power`);
// }

// const balance = 1000
// // if (balance >500) console.log("test");
// if(balance <200){
//     console.log("gareeb ke chode");
// }
// else if(balance > 200 && balance < 700){
//     console.log("amiri dikhata hai");
// }
// else if( balance >700 && balance< 2000){
//     console.log("raees ke chode");
// }
// else {
//     console.log("hat sale");
// }

const userLoggedIn = true
const debit = true
const loggedInFromGoogle = false;
const loggedInFrmEmail = true

if (userLoggedIn && debit && 2==3){
    console.log("aloowed to buy courses");
}

if(loggedInFromGoogle || loggedInFrmEmail){
    console.log("user logged in");
}

