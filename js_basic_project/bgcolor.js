// generate a random colour using hex-value
const randColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  let interval;
  const strtChangingColor = function(){
   interval = setInterval(chngBg,1000);
  
    function chngBg(){
      document.body.style.backgroundColor = randColor();
    }
  }
  
  const btn1 = document.querySelector('#start').addEventListener('click', strtChangingColor)
  
  const stopChangingColor = function(){
    clearInterval(interval)
    interval = null; // derefrencing the value
  }
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor)