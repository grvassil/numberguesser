let min = 1,
  max = 10,
  winningNumber = Math.floor(min + Math.random() * (max-min+1)),
  tries = 3;

const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessNum = document.querySelector("#guess-input");
const guessBtn = document.querySelector("#guess-btn");
const message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessNum.value);

  if (isNaN(guess) || guess < min || guess > maxNum) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  } else {
    if (guess === winningNumber) {
      setMessage(`Congratulations. ${guess} is the correct number.`, "green");
      guessNum.disabled = "true";
      guessBtn.value = "play again";
      guessBtn.addEventListener("mousedown", () => window.location.reload());
    } else {
      tries--;
      if (tries === 0) {
        setMessage(`You lost. The correct number was ${winningNumber}.`, "red");
        guessNum.disabled = "true";
        guessBtn.value = "play again";
        guessBtn.addEventListener("mousedown", () => window.location.reload());
      } else {
        setMessage(`Try again. You have ${tries} tries left.`, "black");
      }
    }
  }
});

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
  guessNum.value = "";
}
