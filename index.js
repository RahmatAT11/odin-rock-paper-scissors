function getComputerChoice() {
    // Set rng random number between 0, 1, 2
    // Set computerChoice to empty string
    // IF rng is equal to 0 THEN
    //   Set computerChoice to "rock"
    // ELSE IF rng is equal to 1 THEN
    //   Set computerChoice to "paper"
    // ELSE IF rng is equal to 2 THEN
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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // CALL toLowerCase with humanChoice RETURNING humanChoiceNormalized
    // CALL toLowerCase with computerChoice RETURNING computerChoiceNormalized
    // IF humanChoiceNormalized is equal to "rock" THEN
    //   IF computerChoiceNormalized is equal to "rock" THEN
    //     Display message: "It's a draw!"
    //   ELSE IF computerChoiceNormalized is equal to "paper" THEN
    //     Display message: "You lose! Paper beats Rock"
    //     Increment computerScore
    //   ELSE IF computerChoiceNormalized is equal to "scissors" THEN
    //     Display message: "You win! Rock beats Scissors"
    //     Increment humanScore
    //   ENDIF
    // ELSE IF humanChoiceNormalized is equal to "paper" THEN
    //   IF computerChoiceNormalized is equal to "rock" THEN
    //     Display message: "You win! Paper beats Rock"
    //     Increment humanScore
    //   ELSE IF computerChoiceNormalized is equal to "paper" THEN
    //     Display message: "It's a draw!"
    //   ELSE IF computerChoiceNormalized is equal to "scissors" THEN
    //     Display message: "You lose! Scissors beats Paper"
    //     Increment computerScore
    //   ENDIF
    // ELSE IF humanChoiceNormalized is equal to "scissors" THEN
    //   IF computerChoiceNormalized is equal to "rock" THEN
    //     Display message: "You lose! Rock beats Scissors"
    //     Increment computerScore
    //   ELSE IF computerChoiceNormalized is equal to "paper" THEN
    //     Display message: "You win! Scissors beats Paper"
    //     Increment humanScore
    //   ELSE IF computerChoiceNormalized is equal to "scissors" THEN
    //     Display message: "It's a draw!"
    //   ENDIF
    // ENDIF

    const humanChoiceNormalized = humanChoice.toLowerCase()
    const computerChoiceNormalized = computerChoice.toLowerCase();

    if (humanChoiceNormalized === "rock") {
        if (computerChoiceNormalized === "rock") {
            console.log("It's a draw!");
        } else if (computerChoiceNormalized === "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else if (computerChoiceNormalized === "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }
    } else if (humanChoiceNormalized === "paper") {
        if (computerChoiceNormalized === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (computerChoiceNormalized === "paper") {
            console.log("It's a draw!");
        } else if (computerChoiceNormalized === "scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        }
    } else if (humanChoiceNormalized === "scissors") {
        if (computerChoiceNormalized === "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else if (computerChoiceNormalized === "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        } else if (computerChoiceNormalized === "scissors") {
            console.log("It's a draw!");
        }
    }
}

playRound("rock", "paper");