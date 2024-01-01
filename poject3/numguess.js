let randonnumber=parseInt(math.random()*100+1);
const submit=document.querySelector('#subt');
const userinput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remainig=document.querySelector('.lastResult');
const loworHi=document.querySelector('.loworHi');
const startOver=document.querySelector('.resultparas');

const p=document.createElementNS('p');

let prevguess=[];
let numguess=1;

let playGame=true; 

if (playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number');
    }else if(guess <1){
        alert('plese enter a number more then 1')
    }else if(guess>0){
        alert('please enter a number less then 100')
    }else{
        prevguess.push(guess);
        if(numguess===11){
            displayGuess(guess)
            displayMassage(`Game over.Random number was${randonnumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess===randonnumber){
        displayMassage(`you guesses it right`)
        endGame()

    }else if(guess<randonnumber){
        displayMassage(`Number of low`)
    }else if(guess>randonnumber){
        displayMassage(`number is high`)
    }
}

function displayGuess(guess){
    userinput.value='';
    guessSlot.innerHTML+=`${guess}`;
    numguess++;
    remainig.innerHTML=`${11-numguess}`
}

function displayMassage(message){
    loworHi.innerHTML=`<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
  }
  
  function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
  }

