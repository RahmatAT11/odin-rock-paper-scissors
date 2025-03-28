function getComputerChoice() {
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
    const humanChoice = prompt("Enter your choice (rock/paper/scissors): ");
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const buttonChoices = document.querySelectorAll(".btn");
    const playerScoreDisplay = document.querySelector("#player-score");
    const computerScoreDisplay = document.querySelector("#computer-score");
    const resultDisplay = document.createElement("div");
    resultDisplay.id = "winner";

    function playRound(humanChoice, computerChoice) {

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

    buttonChoices.forEach((button) => {
      button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
        playerScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;

        if (humanScore >= 5) {
            resultDisplay.textContent = "You win!";
            document.body.appendChild(resultDisplay);
        } else if (computerScore >= 5) {
            resultDisplay.textContent = "You lose!";
            document.body.appendChild(resultDisplay);
        }
      });  
    })

}

playGame()