// Get computer choice
function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Score variables 
let humanScore = 0;
let computerScore = 0;

// Result display
const resultDiv = document.createElement("div");
resultDiv.id = "result";
document.body.appendChild(resultDiv);

function showResult(message) {
  const p = document.createElement("p");
  p.textContent = message;
  resultDiv.appendChild(p);
}

// Score display
const scoreDiv = document.createElement("div");
scoreDiv.id = "score";
scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
document.body.appendChild(scoreDiv);

function updateScore() {
  scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
}

// Play one round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    showResult("It's a Tie");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    showResult(`YOU WIN! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    showResult(`YOU LOSE! ${computerChoice} beats ${humanChoice}`);
  }

  updateScore();

  if (humanScore === 5) {
    showResult(" YOU WON THE GAME!");
  } else if (computerScore === 5) {
    showResult(" YOU LOST THE GAME!");
  }
}

// Create buttons
const rock = document.createElement("button");
rock.id = "rock";
rock.textContent = "Rock";
rock.style.backgroundColor = "black";
rock.style.color = "white";
rock.style.border = "2px solid black";
rock.style.borderRadius = "5px";
rock.style.fontWeight = "600";
rock.style.margin = "2px";
rock.style.padding = "2px,5px"
rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
document.body.appendChild(rock);

const paper = document.createElement("button");
paper.id = "paper";
paper.textContent = "Paper";
paper.style.backgroundColor = "black";
paper.style.color = "white";
paper.style.border = "2px solid black";
paper.style.borderRadius = "5px";
paper.style.fontWeight = "600";
paper.style.margin = "8px";
paper.style.padding = "2px,5px"
paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
document.body.appendChild(paper);

const scissors = document.createElement("button");
scissors.id = "scissors";
scissors.textContent = "Scissors";
scissors.style.backgroundColor = "black";
scissors.style.color = "white";
scissors.style.border = "2px solid black";
scissors.style.borderRadius = "5px";
scissors.style.fontWeight = "600"
scissors.style.margin = "2px";
scissors.style.padding = "2px,5px"
scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
document.body.appendChild(scissors);




   


