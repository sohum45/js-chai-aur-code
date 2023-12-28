let randomNum = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const Guesslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p =document.createElement('p');

let prevGuess = []
let noAttempts =1 // 1-->10 attempts after that submit button is locked

let playGame = true

if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess= parseInt(userInput.value)
        console.log(guess);
        validateGame(guess)
    })
}

// validation of input num
function validateGame(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<1){
        alert('Please enter a number more than 1')
    }
    else if(guess>100){
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(noAttempts === 11){
            displayGuess(guess)
            displayMsg(`Game Over. Random no. was : ${randomNum}`)
            endGame()
        }
        else{   // no less than 11
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
 
function checkGuess(guess){
    if(guess === randomNum){
        displayMsg(`You hit the nail on head`)
        endGame()
    }
    else if(guess< randomNum){
        displayMsg(`The num is too low`)
    }
    else if (guess > randomNum){
        displayMsg(`The no is too high`)
    }
}

function displayGuess(guess){ // after user has given the value
    userInput.value = ''  // clean the value
    Guesslot.innerHTML += `${guess} ; ` // show the value
    noAttempts++;
    remaining.innerHTML=`${11-noAttempts}` //  to print no of guesses
}

// display msg ie dom interaction
function displayMsg(message){
    lowOrHi.innerHTML = `<h2> ${message}</h2>`
}


function endGame(){
    userInput.value = '' // cleans the value
    userInput.setAttribute('disabled', '')  // no more values can be added as i/p
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
   const newGameButton =  document.querySelector('#newGame')
   newGameButton.addEventListener('click',function(e){
        // reset everything
        randomNum = parseInt(Math.random()*100+1);
        prevGuess = []
        noAttempts =1
        Guesslot.innerHTML = ''
        remaining.innerHTML=`${11-noAttempts}` 
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame =true;
   })
}