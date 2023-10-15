
// for (let i =0 ; i< 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is best numberr");
//     }
//     console.log(element);
// }

let myArray = ["flash","batman","superman","greenlantern"]

for (let index = 0; index < myArray.length; index++) {  // if u dont change the condition then loop will be endless
    const element = myArray[index];
    // console.log(element);
}




// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("5 is best numberr");
//         break;
//         } 
//     //console.log(`the value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    
    //console.log(`the value of i is ${index}`);
    if(index == 5){
        console.log("5 is best numberr");
        continue;                             // to ignore a iteration
        } 
}
