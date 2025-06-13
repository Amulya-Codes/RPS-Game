function playGame(){
const arr = ["rock", "paper", "scissors"];


 let humanScore=0;
  let computerScore =0;

function getComputerChoice(){
let randomNumber = Math.floor(Math.random()*arr.length);
return arr[randomNumber];
}


function getHumanChoice(){
    let userChoice = prompt("Choose one: Rock,Paper,Scissor");
    return userChoice.toLowerCase();
} 
function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log(`Round tied! you both choose ${humanChoice}`)
    }

if((humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "paper" && computerChoice === "rock") || 
 (humanChoice === "scissor" && computerChoice === "paper")) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
 } else {
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
 }
}

for(let i =0; i<=4; i++){
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log(`score after ${i+1} round: ${humanScore} | ${computerScore}`)
}

if(humanScore > computerScore){
    console.log("You won the Game!");
} else if(computerScore > humanScore){
    console.log("You lose the Game!")
} else {
    console.log("You both tied")
}
}





playGame();


