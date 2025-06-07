function getComputerChoice(){
    let randomNumber = Math.random();
    if(randomNumber < 0.33){
        return "rock";
    }
    else if(randomNumber >=0.33 && randomNumber < 0.66){
        return "paper"
    }
    else{
        return "scissors"

    }
}

function getHumanChoice(){
    const choice = prompt("please enter your choise: Rock , Paper or Scissors");
      return "choice";
    }

    const humanScore = 0;
   const computerScore = 0;

   function playRound(humanChoice, computerChoice){
    humanChoise = humanChoice.toLowerCase();
    if(humanChoise === computerChoice){
        return "It's a Tie"
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scisors" && computerChoice === "paper")
     {
        console.log(`YOU WIN! ${humanChoice} beats ${computerChoice}`)
    }

    else {
        console.log(`YOU LOSE! ${computerChoice} beats ${humanChoice}`)
    }

   }

   const humanSelection = getHumanChoice();
   const computerSelection = getComputerChoice();
   playRound(humanSelection, computerSelection);

   function playGame(){
    const humanScore = 0;
   const computerScore = 0;
   function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice){
        return "It's a Tie"
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scisors" && computerChoice === "paper")
     {
        console.log(`YOU WIN! ${humanChoice} beats ${computerChoice}`)
    }

    else {
        console.log(`YOU LOSE! ${computerChoice} beats ${humanChoice}`)
    }

   }
   for(let i = 0; i<5; i++){
    const humanSelection = getHumanChoice();
   const computerSelection = getComputerChoice();
   playRound(humanSelection, computerSelection)
   console.log(`score: you ${humanScore} - ${computerScore} computer`)
   }
   console.log(`final score:you ${humanScore} - ${computerScore} computer`)
if(humanScore > computerScore){
    console.log("You Won the game!")
}
else if(computerScore > humanScore){
    console.log("Computer Won the Game!")
}
else if(humanScore === computerScore){
    console.log("The game is a Tie!")
}
   

   }
   playGame();
