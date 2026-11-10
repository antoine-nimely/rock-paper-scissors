
// Javascript code for the Rock Paper Scissors 

function getComputerChoice() {
  const random = Math.random();
  if (random < 1/3) {
    return "rock";
  }  else if (random < 2/3 ) {
     return "paper"; 
  }  else {
      return "scissors";
  }
}
console.log(getComputerChoice());


function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissors:");
  return choice;
}

// Test it
console.log(getHumanChoice());





function playGame() {
  // Scores live here now — fresh every game
  let humanScore = 0;
  let computerScore = 0;

  // Step 5 Code 
//Step function created and two parameters defined
function playRound(humanChoice, computerChoice) {
  // any arguments that is input to represent these two parameters would be turned to lowercase letters  
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  // this below lines of code console logs the specified outputs according to whether the related condition is met 
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}.`);
  } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") 
    || (humanChoice === "scissors" && computerChoice === "paper")) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  }
}

//Testing the initial 
// humanScore & computerScore
console.log(humanScore, computerScore); 

// Play 5 rounds
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  // Declare the winner
  if (humanScore > computerScore) {
    console.log(`You win the game! Final score: ${humanScore} - ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lose the game! Final score: ${humanScore} - ${computerScore}`);
  } else {
    console.log(`It's a tie game! Final score: ${humanScore} - ${computerScore}`);
  }

  
  
}

playGame ();