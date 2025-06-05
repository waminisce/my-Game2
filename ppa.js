const compscoreDisplay = document.getElementById('comp-score');
const playerscoreDisplay = document.getElementById('player-score');
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors');
const result = document.getElementById('result-div')
const dialog = document.getElementById('dialog')
const gameover = document.getElementById('over')
const Nobtn = document.getElementById('No');
const yesbtn = document.getElementById('yes');
const button = document.getElementById('button')
const playgame = document.getElementById('plays')



let computerScore = 0
let playerScore = 0

const options = ['rock','paper','scissors'];

rock.addEventListener('click',playRock);

paper.addEventListener('click',playpaper);

scissors.addEventListener('click',playscissors);

function playRock(){
    play('rock')
}

function playpaper(){
    play('paper')
}

function playscissors(){
    play('scissors')
}

function play(playerChoice){

    const compChoice = options[Math.floor(Math.random()*3)];

    if(playerChoice === 'rock' && compChoice === 'paper'){
        computerScore += 1;
        compscoreDisplay.innerText = computerScore
        result.innerHTML = `<p>COMPUTER: ${compChoice} YOU: ${playerChoice}</P>
        <p id="result">COMPUTER: WIN</P>`
    }

    else if(playerChoice === 'paper' && compChoice === 'scissors'){
        computerScore += 1;
        compscoreDisplay.innerText = computerScore;
        result.innerHTML = `<p>COMPUTER: ${compChoice} YOU: ${playerChoice}</P>
        <p id="result">COMPUTER: WIN</P>`
    }
    else if(playerChoice === 'scissors' && compChoice === 'rock'){
        computerScore += 1;
        compscoreDisplay.innerText = computerScore;
        result.innerHTML = `<p>COMPUTER: ${compChoice} YOU: ${playerChoice}</P>
        <p id="result">COMPUTER: WIN</P>`
    }
    else if(playerChoice === compChoice){
         result.innerHTML = `<p>COMPUTER: ${compChoice} YOU: ${playerChoice}</P>
        <p id="result">DRAW</P>`
    }
    else{
        playerScore +=1;
        playerscoreDisplay.innerText = playerScore;
        result.innerHTML = `<p>COMPUTER: ${compChoice} YOU: ${playerChoice}</P>
        <p id="result">YOU: WIN</P>`
    }
    if(playerScore >= 5 || computerScore >= 5){
        if(computerScore >=5){
         result.innerHTML = `<h2>COMPUTER HAS WON THE GAME </h2> `
        }else{
          result.innerHTML = `<h2>YOU HAS WON THE GAME </h2> `
        }
        
        dialog.showModal()
    }
       Nobtn.addEventListener('click', function(){
        dialog.close()
        computerScore = 0
        playerScore = 0
        compscoreDisplay.innerHTML = computerScore
        playerscoreDisplay.innerHTML = playerScore
        gameover.style.display = 'block';
        button.style.display = 'none'
        
        

         playgame.addEventListener('click', function(){
            dialog.close()
            computerScore = 0
            playerScore = 0
            compscoreDisplay.innerHTML = computerScore
            playerscoreDisplay.innerHTML = playerScore
            gameover.style.display = 'none';
            button.style.display = 'flex'
        })
        

       } )
       
       
       yesbtn.addEventListener('click', function(){
        dialog.close()
        computerScore = 0
        playerScore = 0
        compscoreDisplay.innerHTML = computerScore
        playerscoreDisplay.innerHTML = playerScore
        gameover.style.display = 'none';
        button.style.display = 'flex'

       } )

     
       

}
