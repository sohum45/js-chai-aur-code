function multiply(num){
    return num*5;
}
multiply.pow = 2;
console.log(multiply(6));
console.log(multiply.pow);
console.log(multiply.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}
// creating my own function
createUser.prototype.incre = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}` ); // this ==> jiska score pucha uska
}
const chai =  createUser("chai", 25)
const tea = new createUser("tea", 250)

// chai.printMe()
tea.printMe()


