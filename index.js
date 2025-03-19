function getComputerChoice() {
    // Set rng random number between 0, 1, 2
    // Set computerChoice to empty string
    // IF rng is equal to 0
    //   Set computerChoice to "rock"
    // ELSE IF rng is equal to 1
    //   Set computerChoice to "paper"
    // ELSE IF rng is equal to 2
    //   Set computerChoice to "scissors"
    // ENDIF
    // Return that computerChoice
    const rng = Math.floor(Math.random() * 3);
    let computerChoice = "";

    if (rng === 0) {
        computerChoice = "rock";
    } else if (rng === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
    // Read an input from human between rock/paper/scissors
    // Set humanChoice to input from before;
    // Return humanChoice
    const humanChoice = prompt("Enter your choice (rock/paper/scissors): ");
    return humanChoice;
}

console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;