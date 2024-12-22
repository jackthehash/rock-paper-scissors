function getComputerChoice() {
    let x = Math.random();
    if (x > 0 && x <= 0.33) {
        return "rock";
    } else if (x > 0.33 && x <= 0.66) {
        return "paper";
    } else return "scissors";
}

let humanScore = 0;
let computerScore = 0;
let end = false;

function playRound(humanChoice, ComputerChoice) {
    if (humanScore === 0 && computerScore ===0 && end) {
        disc.textContent = "";
    }
    if (humanChoice.toUpperCase() === ComputerChoice.toUpperCase()) {
        const div = document.createElement("div");
        div.textContent = "You tie! Both are " + humanChoice.charAt(0).toUpperCase() + humanChoice.substr(1).toLowerCase() + ".";
        disc.appendChild(div);
    } else if (humanChoice.toUpperCase() === "ROCK") {
        if (ComputerChoice.toUpperCase() === "PAPER") {
            const div = document.createElement("div");
            div.textContent = "You lose! Paper beats Rock.";
            disc.appendChild(div);
            computerScore++;
        } else if (ComputerChoice.toUpperCase() === "SCISSORS") {
            const div = document.createElement("div");
            div.textContent = "You Win! Rock beats Scissors.";
            disc.appendChild(div);
            humanScore++;
        }
    } else if (humanChoice.toUpperCase() === "PAPER") {
        if (ComputerChoice.toUpperCase() === "ROCK") {
            console.log("You win! Paper beats Rock.");
            const div = document.createElement("div");
            div.textContent = "You win! Paper beats Rock.";
            disc.appendChild(div);
            humanScore++;
        } else if (ComputerChoice.toUpperCase() === "SCISSORS") {
            const div = document.createElement("div");
            div.textContent = "You lose! Scissors beats Paper.";
            disc.appendChild(div);
            computerScore++;
        }
    } else if (humanChoice.toUpperCase() === "SCISSORS") {
        if (ComputerChoice.toUpperCase() === "ROCK") {
            const div = document.createElement("div");
            div.textContent = "You lose! Rock beats Scissors.";
            disc.appendChild(div);
            computerScore++;
        } else if (ComputerChoice.toUpperCase() === "PAPER") {
            const div = document.createElement("div");
            div.textContent = "You Win! Scissors beats Paper.";
            disc.appendChild(div);
            humanScore++;
        }
    }
}

const body = document.querySelector("body");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const title = document.createElement("h1");
const point = document.createElement("h1");
const disc = document.createElement("div");
rock.textContent = "Rock";
rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    point.textContent = `${humanScore} v ${computerScore}`;
    endgame();
})
paper.textContent = "Paper";
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    point.textContent = `${humanScore} v ${computerScore}`;
    endgame();
})
scissors.textContent = "Scrssors";
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    point.textContent = `${humanScore} v ${computerScore}`;
    endgame();
})
point.textContent = `${humanScore} v ${computerScore}`;
title.textContent = "Rock Paper Scissors!";
title.style.color = "red";
body.appendChild(title);
body.appendChild(point);
body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);
body.appendChild(disc);


function endgame() {
    if (humanScore === 5) {
        const h2 = document.createElement("h2");
        h2.textContent = "You win! The score is " + humanScore + ":" + computerScore;
        disc.appendChild(h2);
        humanScore = 0;
        computerScore = 0;
        end = true;
    }
    if (computerScore === 5) {
        const h2 = document.createElement("h2");
        h2.textContent = "You lose! The score is " + humanScore + ":" + computerScore;
        disc.appendChild(h2);
        humanScore = 0;
        computerScore = 0;
        end = true;
    }
}
