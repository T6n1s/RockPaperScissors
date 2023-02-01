let playerscore = 0;
let computerscore = 0;

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];
    let choiceNr = Math.floor(Math.random() * choices.length);
    let choice = choices[choiceNr];
    return choice;
}

function playRound(playerChoice, compChoice) {
    compChoice = getComputerChoice();
    playerChoice = prompt("What do you choose?");
    playerChoice = playerChoice.toLowerCase();
    playerChoice = `${playerChoice.charAt(0).toUpperCase()}${playerChoice.slice(1)}`;
    console.log(playerChoice);
    if (playerChoice) {
        if (playerChoice === compChoice) {
            console.log("It's a tie!");
        } else if ((playerChoice === "Rock" && compChoice === "Scissor") ||
        (playerChoice === "Paper" && compChoice === "Rock") ||
        (playerChoice === "Scissor" && compChoice === "Paper")) {
            console.log(`Player wins! ${playerChoice} beats ${compChoice}.`);
            playerscore++;
        } else if ((playerChoice === "Rock" && compChoice === "Paper") ||
        (playerChoice === "Paper" && compChoice === "Scissor") ||
        (playerChoice === "Scissor" && compChoice === "Rock")) {
            console.log (`Computer wins! ${compChoice} beats ${playerChoice}!`);
            computerscore++;
        } else {
            console.log(`${playerChoice} is not an valid choice.`);
        }       
    } else {
        console.log("Please enter a choice!");
    }
}


function game(number) { 
    for (let x = 0; x < number; ++x) {
        playRound();
    } console.log(`Final score for the player is ${playerscore} and for the computer ${computerscore}.`);
    if (playerscore > computerscore) {
        console.log("Final winner is the player!");
    } else if (playerscore < computerscore) {
        console.log("Final winner is the computer!");
    } else {
        console.log("Second round required as it is a tie!");
        game(5);
    }
}
