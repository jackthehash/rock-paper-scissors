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

console.log(getHumanChoice());