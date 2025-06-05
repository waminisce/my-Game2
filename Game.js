const dice = document.getElementById('Dice')
const rollBtn = document.getElementById('content3')
const result1 = document.getElementById('show1')
const result2 = document.getElementById('show2')
const yourResult = document.getElementById('your-score');
const comResult = document.getElementById('com-score')
const result3 = document.getElementById('result3');
const button1  = document.getElementById('button1');
const button2  = document.getElementById('button2');
const modal = document.getElementById('showmodal')
const container = document.getElementById('container')
const exit = document.getElementById('exit')



let yourscore = 0;
let comscore = 0;

rollBtn.addEventListener('click',()=>{
    const you = Math.floor(Math.random() * 6) + 1;
    const computer = Math.floor(Math.random() * 6) + 1;
    console.log(you);
    console.log(computer);
    dice.innerHTML = `${you}`

    // let imgurl = "";
    let outcomeMessage = "";

   

    if(you > computer){
        outcomeMessage = "You win!";
        yourscore +=1;

    }else if(you < computer){
        outcomeMessage = "Computer wins!";
        comscore +=1;
    }
    else{
        outcomeMessage = "It's a draw!";
       
    }
    


    result2.innerHTML = `
        <div class="show2">
             <p>YOU PLAY: ${you}</p>
            <p>COMPUTER PLAY: ${computer}</p>
            <p>${outcomeMessage}</p>
        </div> `;

    
     result1.innerHTML = `<div><img id='image' src="./dice-six-faces-${you}.png" alt="Dice Roll">
     </div>`;
     yourResult.innerHTML=`<p> your-score ${yourscore}</p>`
     comResult.innerHTML = `<p> computer-score ${comscore}</p>`


     if (yourscore >= 5 || comscore >= 5) {
        if (yourscore >=3) {
            result3.innerHTML = `
                <div class="show2">
                    <p>🎉 Congratulations! You win the game! 🎉</p>
                </div>`;
        } else {
            result3.innerHTML = `
                <div class="show2">
                    <p>💻 Computer wins the game! Try again!</p>
                </div>`;
        }
       
        modal.showModal()
        
    } 
    

    button1.addEventListener('click', function(){
        modal.close();
        yourscore = 0;
        comscore = 0;
        dice.innerHTML = "0"
        result1.innerHTML =""
        result2.innerHTML =""
        result3.innerHTML =""
        comResult.innerHTML = `<p>Computer score: ${comscore}</p>`;
        yourResult.innerHTML = `<p>Your score: ${yourscore}</p>`;
        
        
    
       } )

       button2.addEventListener('click', function(){
        modal.close()
        dice.innerHTML = "0"
        result1.innerHTML =""
        result2.innerHTML =""
        result3.innerHTML =""
        yourscore = 0;
        comscore = 0;
        comResult.innerHTML = `<p>Computer score: ${comscore}</p>`;
        yourResult.innerHTML = `<p>Your score: ${yourscore}</p>`;
        exit.style.display = 'flex';
    
       } )
       
});
