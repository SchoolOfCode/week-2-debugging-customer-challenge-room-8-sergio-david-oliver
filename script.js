let score = 0;
let playAgain = true;

while (playAgain === true) {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let userGuess = prompt("Guess a number between 1 and 10:");

  console.log(randomNumber);

  if (userGuess == randomNumber) {
    alert("Congratulations! You guessed the correct number.");
    score++;
  } else {
    alert(`Sorry, the correct number was ${randomNumber}. You lose.`);
  }

  playAgain = confirm("Do you want to play again?");

  if (playAgain) {
    continue;
  } else {
    alert(`Game over. Your final score is ${score}.`);
    console.log(playAgain);
  }
}
