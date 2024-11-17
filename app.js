const moves = ["rock", "paper", "scissors"];
const resultDisplay = document.querySelector(".res");
const moveButtons = document.querySelectorAll(".mv");

function getComputerMove() {
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

function getWinner(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  }
  return "computer";
}

moveButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerMove = button.dataset.move;
    const computerMove = getComputerMove();
    const winner = getWinner(playerMove, computerMove);

    if (winner === "player") {
      resultDisplay.textContent = `Yutdingiz!`;
      resultDisplay.style.color = "green";
    } else if (winner === "computer") {
      resultDisplay.textContent = `Yutqazdingiz!`;
      resultDisplay.style.color = "red";
    } else {
      resultDisplay.textContent = `Durrang!`;
      resultDisplay.style.color = "gray";
    }
  });
});
