const myNums = [1,2,3,4,5,6,7,8]

//const newNumber = myNums.map( (num) => num +10)
//console.log(newNumber);

// chaining method 
// const newNums = myNums
//                     .map( (num) => num*10 )
//                     .map((num) => num+1) // num will have value of operationformed from above methods
//                     .filter( (num) => num>=40)
// console.log(newNums);


        // reduce 

const no = [1,2,3,4,5]

// let myTotal = no.reduce( function (accumaltor, current) {
//     console.log(`accumalator : ${accumaltor} and current value: ${current}`);
//     return accumaltor + current
// } , 3)   0 is the starting point assigned to accumalator

// console.log(myTotal);

// using arrow functions to write the values 

const myTotal = myNums.reduce( (accumalator, current) => accumalator + current , 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price :2999
    } ,
    {
        itemName : "nodejs",
        price :7999
    } ,
    {
        itemName : "python",
        price :999
    } ,
    {
        itemName : "mySql",
        price :299
    } ,
    {
        itemName : "ruby",
        price :6999
    } 
]
   let totalPrice = shoppingCart.reduce( (acc,item) =>acc + item.price ,0 )
console.log(totalPrice);


