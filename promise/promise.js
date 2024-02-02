const promiseOne = new Promise(function(resolve , reject){
    // Do an async task
    // DataBase calls
    // cryptographic related
    // network related
    setTimeout(function (){
        console.log("Async task is complete");
        resolve()  // connecting resolve with .then
    },3000)
})

// comsumption of promise

promiseOne.then(function () {
    console.log("Promised Consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("task 2 is complete");
        resolve()
    },1000)
}).then(function(){
    console.log("Async for 2 is resolved");
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            usernmae:"Vasudev Shastri",
            mail:"vasu@gmail.com",
            age:19
        })
    },1000)
})

promise3.then(function (user){
    console.log(user);
})


const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({
                username:"vasudev" ,
                password: "1234$$"
            })
        }
            else{
                reject('ERROR:Something went wrong')
            }

    },1000)
})

promise4.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error){
    console.log(error);
})


const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "javascript" , password :})
        }
        else{
            reject('Error: JS went wrong')
        }
    },1000)
})

async function consumePromise5() {
    const response = await promise5
    console.log(response);
}

consumePromise5()