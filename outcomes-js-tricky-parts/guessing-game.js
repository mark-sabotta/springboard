function guessingGame(){
    const answer = Math.floor(Math.random()*100);
    let won = false;
    let count = 0;
    
    
    game = (guess) => {
        if(won) {
            return "The game is over, you already won!";
        }
        count++;
        if (answer === +guess) {
            won = true;
            return `You win! You found ${answer} in ${count} guesses.`;
        } else if (+guess < answer) {
            return `${guess} is too low!`;
        } else {
            return `${guess} is too high!`;
        }
    }
    return game;
}

module.exports = { guessingGame };
