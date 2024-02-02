// async function getAllUsers() {
// try {
//     const response  = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
// } 
// catch (error) {
//     console.log("E:, error");
// }
// }
// getAllUsers()

// Another method using thenable

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));







