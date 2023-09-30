// const tinderUser = new  Object() ; this is a singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com" ,
    fullname: {
        userfull : {
            firstName : "Hitesh",
            lastName : "Choudhry"
        }
    }
}
console.log(regularUser.fullname.userfull.firstName);
const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "d" , 4: "c"}

//const obj3 ={obj1 , obj2}
//const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const customer = [
    {
        id:1 ,
        email: "hagu@gmail.com"
    },
    {
        id:2 ,
        email : "nonte@gmail.com"
    }
]
// to access values 
// customer[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename : "js in hindi",
    price : "999",
    instructor : "Love babbar"
}

const {instructor} = course
console.log(instructor);


