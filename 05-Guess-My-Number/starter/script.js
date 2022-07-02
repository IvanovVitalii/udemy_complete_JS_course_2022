'use strict';

let secretNumber = getSecretNumber()
let score = 20;
let highscore = 0;

function changeMessage (message) {
    document.querySelector('.message').textContent = message;
}
function getSecretNumber () {
    return Math.trunc(Math.random() * 20) + 1;
}
function changePage (stage, answer) {
    if (stage === 'win') {
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else if (stage === 'new') {
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    }
    document.querySelector('.number').textContent = answer;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    if (!guess) {
        changeMessage('⛔ No number!');
    } else if (guess < 0 || guess > 20) {
        changeMessage('⛔ Uncorrect number!');
    } else if (guess === secretNumber) {
        changeMessage('🎉 Correct Number!');
        changePage('win', guess)
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            changeMessage(guess > secretNumber ? '👆 To high!' : '👇 To low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            changeMessage('👾 You lost');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = getSecretNumber();
    changeMessage('Start guessing...');
    changePage('new', '?')
    document.querySelector('.guess').value = '';
});
