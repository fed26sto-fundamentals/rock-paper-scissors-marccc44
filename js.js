function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    let computerChoiceOutput;
    switch (computerChoice) {
        case 0:
            computerChoiceOutput = "Rock";
            break;
        case 1:
            computerChoiceOutput = "Paper";
            break;
        case 2:
            computerChoiceOutput = "Scissors";
            break;
    }
    return computerChoiceOutput;
}

function getHumanChoice() {
    let humanInput = prompt("Please enter Rock, Paper, or Scissors: ");
    let humanChoice = humanInput.toLowerCase();

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        console.log("Human choice:", humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1));
    } else {
        console.log("Invalid input. Please enter Rock, Paper, or Scissors.");
    }

    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
}

function playRound(humanChoice, computerChoiceOutput) {
    let computerChoiceOutputGame = computerChoiceOutput;
    let humanChoiceGame = humanChoice;

    console.log("Human choice: " + humanChoiceGame);

    if (humanChoiceGame !== computerChoiceOutputGame) {
        if (humanChoiceGame === "Rock" && computerChoiceOutputGame === "Scissors") {
            console.log("You win! Rock beats Scissors.");
            return "human";
        } else if (humanChoiceGame === "Paper" && computerChoiceOutputGame === "Rock") {
            console.log("You win! Paper beats Rock.");
            return "human";
        } else if (humanChoiceGame === "Scissors" && computerChoiceOutputGame === "Paper") {
            console.log("You win! Scissors beats Paper.");
            return "human";
        } else {
            console.log("You lose! " + computerChoiceOutputGame + " beats " + humanChoiceGame + ".");
            return "computer";
        }
    } else {
        console.log("It's a tie! Both players chose " + humanChoiceGame + ".");
        return "tie";
    }
}

function playGame() {
    let humanScoreCount = 0;
    let computerScoreCount = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);

        if (result === "human") {
            humanScoreCount++;
        } else if (result === "computer") {
            computerScoreCount++;
        } else if (result === "tie") {
            continue;
        }
    }

    return { humanScoreCount, computerScoreCount };
}

const scores = playGame();
determineWinner(scores.humanScoreCount, scores.computerScoreCount);

function determineWinner(humanScore, computerScore) {
    console.log("Final score: ");
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);

    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore < computerScore) {
        console.log("You lose!");
    } else {
        console.log("It's a tie!");
    }
}