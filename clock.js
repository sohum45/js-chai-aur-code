const clock =document.getElementById('clock')
// let date =new Date()  for constant
// console.log(date.toLocaleTimeString());

// setInterval method use to run continuously after aan interval

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);  // ****imp***


