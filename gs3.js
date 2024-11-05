let randomval = parseInt(Math.random() * 100 + 1);
// console.log(randomval);

let submit = document.querySelector('#subt');
let userinput = document.querySelector('#guessField');
let guessslot = document.querySelector('.guesses');

let remguss = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let startover = document.querySelector('.resultParas');

let p = document.createElement('p');
let prevguess = [];
let numberguess = 1;

let playgame = true;

if (playgame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();

    let guess = parseInt(userinput.value); //ACTUALLY NUMBER WE ARE GETTING FROM USER IN RANGE OF 1 TO 100
    validateguess(guess);
  });
}

function validateguess(guess) {
  if (guess === 0) {
    alert('please enter the valid number');
  } else if (guess < 1) {
    alert('please enter a number more than 1');
  } else if (guess > 100) {
    alert('enter the number less than 100');
  } else {
    prevguess.push(guess);
    if (numberguess === 10) {
      cleanupguess(guess);
      displaymessage(`Game is over . random number was ${randomval}`);
      lowOrHi.innerHTML = ` your gussess = ${prevguess}`;
      endgame();
    } else {
      cleanupguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === randomval) {
    displaymessage(`Congratulation you gussed the right Number`);
    endgame();
  } else if (guess < randomval) {
    displaymessage(`Number is to low`);
  } else if (guess > randomval) {
    displaymessage(`Number is to high`);
  }
}

function cleanupguess(guess) {
  userinput.value = '';
  guessslot.innerHTML = `${guess}`;
  numberguess++;
  remguss.innerHTML = `${11 - numberguess}`;
}

function displaymessage(message) {
  lowOrHi.innerHTML = `<h2> ${message} </h2>`;
}

function endgame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');   
  submit.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id ="newgame">  Start New Game </h2>';
  startover.appendChild(p);
  playgame = false;
  newgame();
}

function newgame() {
  const newgamebutton = document.querySelector('#newgame');
  newgamebutton.addEventListener('click', (e) => {
    randomval = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numberguess = 1;
    guessslot.innerHTML = '';
    remguss.innerHTML = `${11 - numberguess}`;
    userinput.removeAttribute('disabled', '');
    submit.removeAttribute('disabled', '');
    startover.removeChild(p);
    displaymessage('');
    console.log(`${randomval}`);

    playgame = true;
  });
}
