let randomNum;
const guessnum = document.querySelector(".guessnum");
const guessBtn = document.querySelector(".guessBtn");
const message = document.querySelector(".message");
const newGame = document.querySelector(".newGameMsg");

function newGameBtn() {
setTimeout(function () {
    message.innerHTML = ""
  }, 4000)

}

function guessBtnClicked(numberguessed) {
  const numberguessed = Number(randomNum.value);

  if (numberguessed > 100 || numberguessed < 1) {
    message.innerHTML = 'guess must be between 1 and 100';
    setTimeout(function () {
      location.reload()
    }, 4000);


  } else if (numberguessed < randomNum) {
    message.innerHTML = 'Your guess is too low';
    setTimeout(function () {
      message.innerHTML = ""
    }, 4000)

  } else if (numberguessed > randomNum) {
    message.innerHTML = 'Your guess is too high';
    setTimeout(function () {
      message.innerHTML = ""
    }, 4000)
  } else {
    message.innerHTML = `Correct, the secret number is ${randomNum}`

    newGameBtn()
    setTimeout(function () {
      message.innerHTML = ""
      location.reload();
      message.innerHTML = 'New game started!';
    }, 4000)
  }
}





guessBtn.addEventListener('click', () => {
  guessBtnClicked(guessnum.value);
});


