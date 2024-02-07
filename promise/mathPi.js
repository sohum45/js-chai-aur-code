console.log(Math.PI);
Math.Pi = 6
console.log(Math.PI); // The value canot be overridden


const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);

// setting your own hard code checks on objects like Math.PI
const chai = {
    name:'ginger chai',
    price:250,
    isAvailable:true,

    orderChai: function (){
        console.log("Chai fat gyi");
    }
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "isAvailable"));
Object.defineProperty(chai, 'isAvailable',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai, "isAvailable"));


// using for off loop
for (const [key , value] of Object.entries(chai)) {  // iterator having properties
    if(typeof value !== 'function'){
        console.log(`${key} , ${value}`);
    }
}



