const computerSelection = getComputerChoice();
const playerSelection = prompt("Choose Rock, Paper or Scissors!");

function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);  
    if (randomNumber === 1) {
        return("Rock");
    } else if (randomNumber === 2) {
        return("Paper");
    } else if (randomNumber === 3) {
        return("Scissors");
    }  
}



function playRound(playerSelection, computerSelection) {

}