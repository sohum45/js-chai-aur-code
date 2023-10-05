const user ={
    username : "VASUDEV",
    price:999,

    welcomeMsg: function(){
        console.log(`${this.username} welcome to the website`);
        console.log(this);
    }
}
// user.welcomeMsg()
// user.username = "Sam"
// user.welcomeMsg()

console.log(this); // current context is empty because in node enviroment this refers to empty




