

    let score = JSON.parse(localStorage.getItem('score')) || {
        heads: 0,
    tails: 0,
    }



    function flip2() {

        //console.log(localStorage.getItem('score'))

        let flip = Math.random();
    let res = ''

    console.log(flip);
       
        if (flip > 0.5 ) {
        res = 'Head'
            score.heads += 1
        }else if (flip < 0.5) {
        res = 'Tails'
            score.tails += 1
             }

    localStorage.setItem('score',JSON.stringify(score))

        document.querySelector('.js-got').innerHTML = `You filped coin and got ${res}`
         document.querySelector('.js-res').innerHTML = `Your score is: ${score.heads} Heads and ${score.tails} tails`;
    }

   // document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, looses:${score.looses}, ties:${score.ties}`
