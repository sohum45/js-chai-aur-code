let myDate= new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toDateString());

// let myNewDate = new Date(2023,12,23)
// console.log(myNewDate.toDateString());
// let myNewDate = new Date(2023,1,23,18,9,7)
// console.log(myNewDate.toLocaleString());
let myNewDate = new Date("2023-09-4")
// console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myNewDate.getFullYear())
// console.log(myNewDate.getDay())
// console.log(myNewDate.getTime())
// console.log(Math.floor(Date.now()/1000)); interview q
let newDate = new Date()
// console.log(newDate);
// console.log(newDate.toDateString());

newDate.toLocaleString('default', {
    weekday:"short"
})
console.log(newDate);