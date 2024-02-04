// make a method of truelength so that iyt can be used everywhere
let myName = "Vasudev      "
let myChannel = "chaiiiiiii    "


let myHeros  =["thor", "daredevil","hancock"]
let heroPower = {
    thor:"hammer",
    daredevil:"sling",
    hancock:"shockwave",

    getThorPower: function(){
        console.log(`Thor power is ${this.thor}`);
    }
}


Object.prototype.vasudev = function(){
    console.log(`Its my supremacy`);
}
// heroPower.vasudev()
// Object.vasudev()
// myHeros.vasudev()// arrays also has the vasudev property 

// now if we give vasudev property to arrays, will object will show the power -- > no

Array.prototype.heyVasu = function(){
    console.log(`Hitesh says hello`);
}

//myHeros.heyVasu()
// heroPower.heyVasu()

//               INHERITANCE to inherit the properties of others

const user = {
    name:"chai",
    email:"cjai@google.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailabl: false
}

const TAsupport = {
    makeAssign : "Js",
    fullTime: "part-time",
    __proto__: teachingSupport // inheriting inside method
}
// inheriting outside method
teacher.__proto__ = user

// mordern approach   --> setPrototypeOf
Object.setPrototypeOf(teachingSupport,teacher) // teachingSupport inherits teacher property 


let userName = "Suhani    "

String.prototype.trueLen = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}
userName.trueLen()
"sohum   ".trueLen()


