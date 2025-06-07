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

   const humanSelection = getHumanChoise();
   const computerSelection = getComputerChoise();
   playRound(humanSelection, computerSelection);
