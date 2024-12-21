function getComputerChoice() {
    let x = Math.random();
    if (x > 0 && x <= 0.33) {
        return "rock";
    } else if (x > 0.33 && x <= 0.66) {
        return "paper";
    } else return "scissors";
}

function getHumanChoice() {
    return prompt("What is your choice?");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, ComputerChoice) {
    if (humanChoice.toUpperCase() === ComputerChoice.toUpperCase()) {
        console.log("You tie! Both are " + humanChoice.charAt(0).toUpperCase() + humanChoice.substr(1).toLowerCase() + ".");
    } else if (humanChoice.toUpperCase() === "ROCK") {
        if (ComputerChoice.toUpperCase() === "PAPER") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else if (ComputerChoice.toUpperCase() === "SCISSORS") {
            console.log("You Win! Rock beats Scissors.");
            humanScore++;
        }
    } else if (humanChoice.toUpperCase() === "PAPER") {
        if (ComputerChoice.toUpperCase() === "ROCK") {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        } else if (ComputerChoice.toUpperCase() === "SCISSORS") {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        }
    } else if (humanChoice.toUpperCase() === "SCISSORS") {
        if (ComputerChoice.toUpperCase() === "ROCK") {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        } else if (ComputerChoice.toUpperCase() === "PAPER") {
            console.log("You Win! Scissors beats Paper.");
            humanScore++;
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);