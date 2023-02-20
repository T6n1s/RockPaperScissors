let playerScore = 0;
let computerScore = 0;
let playerChoice;

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let p = document.querySelector("p");
let result = document.querySelector(".result");
let score = document.querySelector(".score");
let finalscore = document.querySelector(".finalscore");

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];
    let choiceNr = Math.floor(Math.random() * choices.length);
    let choice = choices[choiceNr];
    return choice;
}

function playRound(playerChoice, compChoice) {
    compChoice = getComputerChoice();
    
    
    //playerChoice = this;
    //playerChoice = playerChoice.toLowerCase();
    //playerChoice = `${playerChoice.charAt(0).toUpperCase()}${playerChoice.slice(1)}`;
    //console.log(playerChoice);
    if (playerChoice) {
        if (playerChoice === compChoice) {
            result.textContent = "It's a tie!";
            score.textContent = `Current player score is ${playerScore} and computer score is ${computerScore}`;
        } else if ((playerChoice === "Rock" && compChoice === "Scissor") ||
        (playerChoice === "Paper" && compChoice === "Rock") ||
        (playerChoice === "Scissor" && compChoice === "Paper")) {
            result.textContent = `Player wins! ${playerChoice} beats ${compChoice}.`;
            playerScore++;
            score.textContent = `Current player score is ${playerScore} and computer score is ${computerScore}`;
        } else if ((playerChoice === "Rock" && compChoice === "Paper") ||
        (playerChoice === "Paper" && compChoice === "Scissor") ||
        (playerChoice === "Scissor" && compChoice === "Rock")) {
            result.textContent = `Computer wins! ${compChoice} beats ${playerChoice}!`;
            computerScore++;
            score.textContent = `Current player score is ${playerScore} and computer score is ${computerScore}`;
        } else {
            console.log(`${playerChoice} is not an valid choice.`);
        }       
    } else {
        console.log("Please enter a choice!");
    }

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            finalscore.textContent = "Player is the final winner!";
        } else if (computerScore > playerScore) {
            finalscore.textContent = "Computer is the final winner";
        } else {
            finalscore.textContent = "It's a tie!";
        }
        playerScore = 0;
        computerScore = 0;
    }
}


/* function game(number) { 
    for (let x = 0; x < number; ++x) {
        playRound();
    } console.log(`Final score for the player is ${playerScore} and for the computer ${computerScore}.`);
    if (playerScore > computerScore) {
        console.log("Final winner is the player!");
    } else if (playerScore < computerScore) {
        console.log("Final winner is the computer!");
    } else {
        console.log("Second round required as it is a tie!");
        game(5);
    }
} */


rock.addEventListener("click", () => {
    playerChoice = "Rock";
    playRound(playerChoice);
})
paper.addEventListener("click", () => {
    playerChoice = "Paper";
    playRound(playerChoice);
})
scissor.addEventListener("click", () => {
    playerChoice = "Scissor";
    playRound(playerChoice);
})
