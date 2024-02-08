function getData(){ // getting data from server TASK 1
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
            resolve(455)
        },3500);
    })
}

console.log("Loading modules");



console.log("doing another task ");

console.log("Load data"); // wait becs until u get data how will u process
let data1 = getData() // this returns a promise such that  object contains data and can be retrived later

// jab data hojayee tbb do this func when promise is resovled


   // -----Old Technique-------

// data.then((v)=>{
//     console.log(data);                   
//     console.log("processng data");
    
    
//     now i want ki data ata rhe aur I carry on with my task 2
    
//     console.log("Task 2");  this is async task
// })





// ------ ASYNC AWAIT----- FOR CLEAN CODE 

// async function means yeh code background me chlega
async function getData(){ 
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
            resolve(455)
        },3500);
    })
}
console.log("Loading modules");

console.log("doing another task ");
console.log("Load data");
let data = getData()
console.log("processng data");
console.log("Task 2"); 