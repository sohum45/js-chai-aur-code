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