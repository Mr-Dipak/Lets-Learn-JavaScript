let randomNumber =  Math.floor((Math.random()*100)+1);


const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess (guess){
    //
    if(isNaN(guess) || guess == '' || guess == undefined){
        alert(`Please Enter a valid number not a ${guess} `)

    }
    else if(guess <1){
        alert(`Please Enter Number in between 1 to 100 not lower! => ${guess}`)

    }
    else if(guess >100){
        alert(`Please Enter Number in between 1 to 100 not Higher! => ${guess}`)

    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11 ){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);  
        }
    }
    
};

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame()
    }else if(guess <randomNumber){
        displayMessage (`Number is Too low`);
    }
    else if(guess > randomNumber){
        displayMessage (`Number is Too High`);

    }

}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    lastResult.innerHTML = `${11-numGuess}`
     

}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'> Start new Game </h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
    
}

function newGame(){
   const newGameButton =  document.querySelector('#newGame');
   newGameButton.addEventListener('click',e =>{
    randomNumber =  Math.floor((Math.random()*100)+1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    lastResult.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;

   })

}