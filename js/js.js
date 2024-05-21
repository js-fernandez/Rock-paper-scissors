const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const send = document.getElementById('send');
const buttons = document.getElementsByTagName('button');
const decisionHumano = document.getElementById('decision-humano')
const decisionMaquina = document.getElementById('decision-maquina')
const result = document.getElementById('result');
const humanScore = document.querySelector('.human-score');
const computerScore = document.querySelector('.computer-score');
let humanCount = 0;
let computerCount = 0;
let playerChoice = '';
let computerChoice = ''
humanScore.textContent = humanCount;
computerScore.textContent = computerCount

function getComputerChoice () {
     let decision = Math.floor(Math.random() * 3)
     switch (decision) {
          case 0: {
               computerChoice = 'rock'
          }
          break;
          case 1: {
               computerChoice = 'paper'
          }
          break;
          case 2: {
               computerChoice = 'scissors'
          }
          break;
     }
}

 function addEvent(x) {
     x.addEventListener('click', () => {
         if (x.classList.contains('selected')) {
             x.classList.remove('selected'); 
         } else {
             for (let button of buttons) {
               button.classList.remove('selected')
             }
             x.classList.add('selected'); 
         }
         playerChoice = x.textContent.toLowerCase();
     }
);
}

addEvent(rock);
addEvent(paper);
addEvent(scissors);

function verifyWin(x, winner) {
     if(x == 5) {
          result.textContent = `${winner} won the game.`
     }
}

send.addEventListener('click', ()=>{
     getComputerChoice();
     if (playerChoice == '') {
          computerChoice == ''
          alert('Debes seleccionar una opcion.')
     }
     if (humanCount == 5 || computerCount == 5) {
          alert('Game is finished')
     }
     else {
          
          setTimeout(() => {
               decisionMaquina.style = 'visibility: visible';
               decisionHumano.style = 'visibility: visible'
               decisionHumano.textContent = playerChoice;
               decisionMaquina.textContent = computerChoice;
          }, 150);
               if (playerChoice == computerChoice) {
               result.textContent = 'Draw'
               }
               else if (playerChoice == 'rock' && computerChoice == 'scissors' ||
                   playerChoice == 'paper' && computerChoice == 'rock'    ||
                   playerChoice == 'scissors' && computerChoice == 'paper'){
                    result.textContent = 'Human win'
                    humanCount += 1;
                    setTimeout(() => {
                         humanScore.textContent = humanCount;
                    }, 150);
                    verifyWin(humanCount, 'Human');
           }
     
           else {
                    result.textContent = 'Computer win'
                    computerCount += 1;
                    setTimeout(() => {
                       computerScore.textContent = computerCount;  
                    }, 150);
               verifyWin(computerCount, 'Computer');
               }
     }
})