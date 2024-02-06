function setUser(username){
    this.username = username;
    console.log("clled");
}

function createUser(username, email , password){
    setUser.call(this, username)  // method call 

    this.email = email;
    this.password = password
}

const chai = new createUser("chai" , "chai@gmil.com","123")

console.log(chai);







