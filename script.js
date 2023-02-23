'use strict';

const createRandom = function (number) {
    return Math.ceil(Math.random() * number);
}
const displayMessage = function (message) {
    document.querySelector(`.message`).textContent = message;
}

let score = 10, highScore = 0, secretNumber = createRandom(100);

document.querySelector(`.check`).addEventListener(`click`, function () {
    const guess = Number(document.querySelector(`.guess`).value);

    // when there's no input
    if (!guess) {
        displayMessage(`⛔ No Number!`);

        // when player wins
    } else if (guess === secretNumber) {

        highScore = Math.max(highScore, score);
        document.querySelector(`.highscore`).textContent = highScore;
        document.querySelector(`.number`).textContent = secretNumber;
        document.querySelector(`body`).style.backgroundColor = `#60b347`;
        displayMessage(`🎉 Correct Number!`);
        document.querySelector(`.number`).style.width = `30rem`;

        // when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? `📈 Too High!` : `📉 Too Low!`);
            score--;
            document.querySelector(`.score`).textContent = score;
        } else {
            document.querySelector(`body`).style.backgroundColor = `#891818`;
            displayMessage(`💥 You Lost The Game!`);
            document.querySelector(`.score`).textContent = 0;
        }
    }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
    score = 10;
    secretNumber = createRandom(100);
    displayMessage(`Start guessing...`);
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector(`.guess`).value = ``;
    document.querySelector(`.number`).style.width = `15rem`;
});