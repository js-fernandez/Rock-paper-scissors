// FUNCTION COMPUTER CHOICE START
function getComputerChoice () {
    let numberRandom = Math.floor(Math.random() * 3) + 1
    if (numberRandom == 1) {
         numberRandom = 'rock'
    }
    else if (numberRandom == 2) {
         numberRandom = 'paper'
    }
    else {
         numberRandom = 'scissors'
    }
    return numberRandom
};
// FUNCTION COMPUTER CHOICE END

// FUNCTION HUMAN CHOICE START
function getHumanChoice() {
    let choice = prompt("What's your move? \nRock\nPaper\nScissors")
    choice = choice.toLowerCase();
    if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
     alert('Introduce a valid valor');
     getHumanChoice();
    }
    else {
     return choice
    }
};
// FUNCTION HUMAN CHOICE END

// SCORE VARIABLE START
let humanScore = 0;
let computerScore = 0;
// SCORE VARIABLE END

// PLAY ROUND FUNCTION START
function playRound () {
     computerChoice = getComputerChoice();
     humanChoice = getHumanChoice();
     if (humanChoice == 'rock' && computerChoice == 'rock'||
         humanChoice == 'paper' && computerChoice == 'paper'|| 
         humanChoice == 'scissors' && computerChoice == 'scissors'
     ) {
     }
     else if (humanChoice == 'rock' && computerChoice == 'scissors'||
              humanChoice == 'paper' && computerChoice == 'rock'|| 
              humanChoice == 'scissors' && computerChoice == 'paper'
     ) {
          humanScore += 1
          console.log(`Humano:${humanChoice}\n Computadora:${computerChoice}\n Score humano ${humanScore}\n Score computadora ${computerScore}`)
     }
     else if (humanChoice == 'rock' && computerChoice == 'paper'||
           humanChoice == 'paper' && computerChoice == 'scissors'|| 
           humanChoice == 'scissors' && computerChoice == 'rock'
     ) {
           computerScore += 1
          console.log(`Humano:${humanChoice}\n Computadora:${computerChoice}\n Score humano ${humanScore}\n Score computadora ${computerScore}`)
     }
}
// PLAY ROUND FUNCTION END

function playGame() {
     for(i = 0; i < 5; i++){
          playRound()
     }
     if (humanScore == computerScore) {
          console.log('EMPATE')
     }
     else if (humanScore > computerScore) {
          console.log('Gana humano')
     }
     else {
          console.log('Gana computadora')
     }
}

playGame()