const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const result = document.getElementById('p-change');
const target = document.querySelector(".target");
const guess = document.querySelector(".guess");

let number;
let count = 0;

 target.addEventListener('click', () => {
    let min =  parseInt(input1.value)
    let max = parseInt(input2.value)

    if (isNaN(min) || isNaN(max) || min >= max) {
        result.textContent = "Please enter a valid min and max (min < max)";
        return;
    }

    number = Math.floor(Math.random() * (max - min + 1)) + min;
    // number = Math.floor(Math.random()* max) + min;
    result.textContent = `A number has been chosen between ${min} and ${max}. Start guessing!`;
    count = 0; // reset guess count
    
 })

 guess.addEventListener('click', () => {
    let userguess = parseInt(input3.value)

    if (isNaN(userguess)) {
        result.textContent = "Please enter a valid number to guess.";
        return;
    }

    count++;

    if (userguess === number) {
        result.textContent = `🎉 Well done! You guessed it in ${count} attempts.`;
    } else if (userguess < number) {
        result.textContent = "📉 Too low! Try again.";
    } else {
        result.textContent = "📈 Too high! Try again.";
    }

 });

