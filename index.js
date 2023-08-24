

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    looses: 0,
    ties: 0,
};

updateScoreElement()

function playGame(playerMove) {

    let computerMove = pickComputerMove();

    let res = '';


    if (playerMove === 'Rock') {
        if (computerMove === 'rock') {
            res = 'Tie.';
        } else if (computerMove === 'paper') {
            res = 'You lose.';
        } else if (computerMove === 'scissors') {
            res = 'You win.';
        }
    }

    else if (playerMove === 'Paper') {
        if (computerMove === 'rock') {
            res = 'You win.';
        } else if (computerMove === 'paper') {
            res = 'Tie.'; 
        } else if (computerMove === 'scissors') {
            res = 'You loose.';
        }
    }

    else if (playerMove === 'Scissors') {
        if (computerMove === 'rock') {
            res = 'You loose.';
        } else if (computerMove === 'paper') {
            res = 'You win.';
        } else if (computerMove === 'scissors') {
            res = 'Tie.';
        }
    }

    if (res === 'You win.') {
        score.wins += 1;
    } else if (res === 'You lose.') {
        score.looses += 1;
    } else if (res === 'Tie.') {
        score.ties += 1;
    }



    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, looses:${score.looses}, ties:${score.ties}`
    document.querySelector('.js-res').innerHTML = `You picked ${playerMove}. Computerpicked ${computerMove}. ${res} `
    /* alert(`You picked ${playerMove}. Computerpicked ${computerMove}. ${res} 
Wins: ${score.wins}, looses:${score.looses}, ties:${score.ties}`
   );*/
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, looses:${score.looses}, ties:${score.ties}`
}

function resoult() {
    document.querySelector('.js-res').innerHTML = `You picked ${playerMove}. Computerpicked ${computerMove}. ${res} `
}



function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3) {
        computerMove = 'scissors';
    }

    return computerMove;
}

//please dont hate me for this ugly code
