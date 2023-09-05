/* script.js */

function getComputerChoice() {
  /* get random number from range 0-2, then return rock, paper, or scissors based on number */
    
  randomChoice = Math.floor(Math.random() * 3);

  switch(randomChoice) {
    case 0:
        return "Rock";
    case 1:
        return "Paper";
    case 2:
        return "Scissors";
    default:
        return "";
  }
}