/* script.js */

const DRAW = 0;
const PLAYERWIN = 1;
const PLAYERLOSE = -1;

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

function battle (computerChoice, playerSelection) {
    if (computerChoice === playerSelection) {
        return DRAW;
    }

    switch (playerSelection) {
        case "rock":
            if (computerChoice === "paper") {
                return PLAYERLOSE;
            }
            else {
                return PLAYERWIN;
            }
            break;
        case "paper":
            if (computerChoice === "scissors") {
                return PLAYERLOSE;
            }
            else {
                return PLAYERWIN;
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                return PLAYERLOSE;
            }
            else {
                return PLAYERWIN;
            }
            break;
        default:
            return DRAW;
        }
}

function getBattleReport(battleResult, computerChoice, playerSelection) {
    let message = "";

    if (battleResult === DRAW) {
        message = "Draw! Both sides picked " + computerChoice + "!";
    }
    else if (battleResult === PLAYERWIN) {
        message = "You win! " + playerSelection + " beats " + computerChoice + "!";
    } 
    else {
        message = "You lose! " + computerChoice + " beats " + playerSelection + "!";
    }

    return message;
}

function game() {
    const GAMELENGTH = 5;
    let userScore = 0;
    let computerScore = 0;

    /*
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
    */

}

function displayMessage(message) {
    const battleResultMsg = document.querySelector(".battle-results");
    battleResultMsg.textContent = message;
}

function playRound(playerSelection){
    let computerChoice = getComputerChoice();
    let battleResult = battle(computerChoice, playerSelection);
    let message = getBattleReport(battleResult, computerChoice, playerSelection);

    displayMessage(message);
}

function gameLoop(){
    /* main game loop */
    const GAMELENGTH = 5;
    let userScore = 0;
    let computerScore = 0;

    const gameMenu = document.querySelector(".game-menu");
    gameMenu.removeAttribute("hidden");

    let playerSelection = -1;

}

function startGame() {
    const startMenu = document.querySelector(".start-menu");
    startMenu.setAttribute("hidden", "true");


    gameLoop();
}


const rock_btn = document.querySelector(".rock-button");
const paper_btn = document.querySelector(".paper-button");
const scissors_btn = document.querySelector(".scissors-button");

rock_btn.addEventListener("click", function(e) {
    playerSelection = "rock";
    playRound(playerSelection);
});

paper_btn.addEventListener("click", function(e) {
    playerSelection = "paper";   
    playRound(playerSelection); 
});

scissors_btn.addEventListener("click", function(e) {
    playerSelection = "scissors";  
    playRound(playerSelection);
});


const playButton = document.querySelector(".play-button");
playButton.addEventListener("click", startGame);
