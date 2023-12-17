const form = document.querySelector('form');

form.addEventListener('submit', function (e){
  e.preventDefault();

const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')
var bmi =0;
if(height === '' || height< 0 || isNaN(height)){
  results.innerHTML =  `Please give valid height ${height}`
}  // isNaN = not a number
else if(weight === '' || weight < 0 || isNaN(weight)){
  results.innerHTML =  `Please give valid weight  ${weight}`;
}
else{
   bmi = (weight / ((height*height)/10000)).toFixed(2)
    // show the result 
  if(bmi <18.6){
    results.innerHTML = `<span>${bmi} 
    Sorry you are underweight</span>`
}
else if(bmi >18.6 && bmi<23.9){
  results.innerHTML = `<span>${bmi}
   You are normal weight</span>`
}
else if(bmi >24.9){
  results.innerHTML = `<span>${bmi}
   You are overweight</span>`
}
} 
});




