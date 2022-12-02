let choices = ["Rock", "Paper", "Scissors"];
let playerSelection = window.prompt("What do you select?");
playerSelection = playerSelection.toLowerCase();
let computerSelection = getComputerChoice();
let result = "";
let player_score = 0;
let computer_score = 0;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * choices.length);
    if (randomChoice === 0) {
        randomChoice = "Rock";
    } else if (randomChoice === 1) {
        randomChoice = "Paper";
    } else {
        randomChoice = "Scissors";
    }
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "Rock") {
        result = "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        result = "Paper beats Rock! You lose!";
        computer_score++;
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        result = "Rock beats Scissors! You win!";
        player_score++;
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        result = "Paper beats Rock! You win!";
        player_score++;
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        result = "It's a tie!";
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        result = "Scissors beat Paper! You lose!";
        computer_score++;
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        result = "Rock beats Scissors! You lose!";
        computer_score++;
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        result = "Scissors beat Paper! You win!";
        player_score++;
    } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        result = "It's a tie!";
    }
    
    return result;
    
}

function game() {
    
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("What do you select?");
        playerSelection = playerSelection.toLowerCase();
        computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection);
        console.log(result);
        console.log(`Your score is ${player_score} and computer's score is ${computer_score}.`);
        
    }
}