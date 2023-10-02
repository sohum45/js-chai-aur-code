// function addTwoNum(num1 , num2){
//     console.log(num1+num2);
// }

// addTwoNum(4,5)
// addTwoNum(4,"7")
// addTwoNum(4,null)
// const add = addTwoNum(9,7)
//console.log("result :" , add);   console log doesnot returns the value

function addTwoNum(num1 , num2){
    // let result = num1 + num2
    // return result
    return num1 + num2 
}
const add = addTwoNum(9,7)
console.log("result :" , add); 

//function loginUser(userName){
//     if(userName === undefined){
//         console.log("Please enter a userName");
//         return
//     }

//     return `${userName} just logged in`
// }

function loginUser(userName){
    if(!userName){
        console.log("Please enter a userName");
        return
    }

    return `${userName} just logged in`
}
console.log(loginUser("Vasudev"))
console.log(loginUser(""))
// if we dont pass any value -. it gives undefined
console.log(loginUser())


function calculateCartPrice(...num1){ // (...) -> rest operator
    return num1
}
// for passing many values

//console.log(calculateCartPrice(200,300,400)); // returns in array

function calculateCartPrice(val1, val2,...num1){ 
    return num1
}
console.log(calculateCartPrice(200,300,400,500));// val1 =200 ; val2 =300 ; num1 = [400,500] ie. array


const user = {
    username :"hitesh",
    price :1990 
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject.username} and price for your commodity is ${anyObject.price}`);
}
// handleObject(user)

handleObject({
    username:"Sammy",
    price : 399
})

// taking array as input
const myNew = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[2];
}

console.log(returnSecondValue(myNew));
 