let randomNum;
const guessnum = document.querySelector(".guessnum");
const guessBtn = document.querySelector(".guessBtn");
const message = document.querySelector(".message");
const newGame = document.querySelector(".newGameMsg");

function newGameBtn() {
    randomNum = Math.ceil(Math.random() * 100);
    message.innerHTML = '';
    guessnum.value = undefined;
    newGame.innerHTML = 'New game started!';
    setTimeout(function(){
        newGame.innerHTML = "";
    }, 4000);
  }
  
  
  newGameBtn();

  function guessBtnClicked(numberguessed) {
    //const numberguessed = Number(guessnum.value);
    const low = 'Your guess is too low';
    const high = 'Your guess is too high';
    const correct = `Correct, the secret number is ${randomNum}`;
    let answer =
      numberguessed == randomNum
        ? correct
        : numberguessed > randomNum
        ? high
        : low;
    message.innerHTML = answer;
    answer == correct ? setTimeout(newGameBtn, 4000) : undefined;
  }

    //setTimeout(function(){
       // location.reload();
    // newGame.innerHTML = "";
  //},4000);
  
    
//}
guessBtn.addEventListener('click', () => {guessBtnClicked(guessnum.value);
});
