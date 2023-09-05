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

    if (computerChoice === playerSelection) {
        alert("Draw! Both sides picked " + computerChoice);
        return;
    }

    switch (playerSelection) {
        case "rock":
            if (computerChoice === "paper") {
                alert ("You lose! Paper beats rock!");
            }
            else {
                alert ("You win! Rock beats scissors!");
            }
            break;
        case "paper":
            if (computerChoice === "scissors") {
                alert ("You lose! Scissors beats paper!");
            }
            else {
                alert ("You win! Paper beats rock!");
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                alert("You lose! Rock beats scissors!");
            }
            else {
                alert ("You win! Scissors beats paper!");
            }
            break;
        default:
            alert ("Nothing beats banana!");
        }
}

let playerSelection = getPlayerSelection();
let computerChoice = getComputerChoice();
battle(computerChoice, playerSelection);