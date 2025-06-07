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