/* script.js */

function getComputerChoice() {
  /* get random number from range 0-2, then return rock, paper, or scissors based on number */
    
  let randomChoice = Math.floor(Math.random() * 3);

  switch(randomChoice) {
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2:
        return "scissors";
    default:
        return "";
  }
}

function getPlayerSelection() {
    /* prompt user for their play, returns string of choice */

    let validated = false;
    let playerSelection;
    while (!validated) {   
        playerSelection = prompt("Rock, paper, or scissors?");
        playerSelection = playerSelection.toLowerCase();

        validated = validatePlayerSelection(playerSelection);
    }

    return playerSelection;
}

function validatePlayerSelection(playerSelection) {
    /* checks if player input is either rock, paper or scissors */

    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        return true;
    }
    else {
        alert("Invalid selection. Please try again.")
        return false;
    }
}

function battle (computerChoice, playerSelection) {
    const DRAW = 0;
    const PLAYERWIN = 1;
    const PLAYERLOSE = -1;

    if (computerChoice === playerSelection) {
        alert("Draw! Both sides picked " + computerChoice);
        return DRAW;
    }

    switch (playerSelection) {
        case "rock":
            if (computerChoice === "paper") {
                alert ("You lose! Paper beats rock!");
                return PLAYERLOSE;
            }
            else {
                alert ("You win! Rock beats scissors!");
                return PLAYERWIN;
            }
            break;
        case "paper":
            if (computerChoice === "scissors") {
                alert ("You lose! Scissors beats paper!");
                return PLAYERLOSE;
            }
            else {
                alert ("You win! Paper beats rock!");
                return PLAYERWIN;
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                alert("You lose! Rock beats scissors!");
                return PLAYERLOSE;
            }
            else {
                alert ("You win! Scissors beats paper!");
                return PLAYERWIN;
            }
            break;
        default:
            alert ("Nothing beats banana!");
            return DRAW;
        }
}

function game() {
    const GAMELENGTH = 5;
    let userScore = 0;
    let computerScore = 0;

    alert ("Starting 5 round game of rock, paper, scissors");

    for (let gameNum = 0; gameNum < GAMELENGTH; gameNum++) {
        let playerSelection = getPlayerSelection();
        let computerChoice = getComputerChoice();
        let score = battle(computerChoice, playerSelection);

        if (score > 0) {
            userScore++;
        }
        else if (score < 0) {
            computerScore++;
        }
    }

    if (userScore > computerScore) {
        alert ("Congratulations! You won!");
    }
    else if (userScore < computerScore) {
        alert ("Too bad! You lost!");
    }
    else {
        alert("It's a draw!");
    }
}

function gameLoop(){
    /* main game loop, ask user if they want to play a game, if yes, play, else, stop program */
    let keepGoing = true;
    while (keepGoing){
        let userConfirm = confirm("Would you like to play a game of rock, paper, scissors?");

        if (userConfirm === true) {
            game();
        }
        else {
            alert ("Goodbye. Thanks for playing.");
            keepGoing = false;
        }
    }
}

gameLoop();


