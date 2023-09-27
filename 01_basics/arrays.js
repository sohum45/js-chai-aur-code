// slice and splice 
// let myArr=[1,2,3,4,5,]
// const mn1 = myArr.slice(1,4)
// const mn2 = myArr.splice(1,4)
// console.log("A ",myArr);
// console.log("B ",mn1);
// console.log("C ",mn2);
const marvel_heros = ["Thor","Ironman","Captain Marvel"]
const dc_heros = ["Flash","Wonder woman","Superman"]
// marvel_heros.push(dc_heros) //here dc_heros becomes a single element
// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);
const all_new_heros =[...dc_heros,...marvel_heros]
//console.log(all_new_heros);
const new_array = [2,3,4,[3,6,7],7,[3,[4,2,1]]]
const real_array = new_array.flat(Infinity)
// console.log(real_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));

console.log(Array.from({name:"hitesh"})); // intresting case for interview becs if u dont specify which one to form array keys or values; it returns empty array 

 let score1 =100
 let score2 =200
 let score3 =300
console.log(Array.of(score1, score2 , score3));// converts a set of variables as array
