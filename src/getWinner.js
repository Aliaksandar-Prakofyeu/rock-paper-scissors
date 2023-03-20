
const getWinner = (moves, request, numberCompMove) => {
    const win = +request - 1 - numberCompMove > 0 && +request - 1 - numberCompMove < moves.length / 2
    const lose = numberCompMove - +request + 1 > 0 && numberCompMove - +request + 1 > moves.length / 2

    if (+request - 1 === numberCompMove) {
        console.log('Draw!')
    } else if (win || lose) {
        console.log('You Win!')
    } else {
        console.log('You Lose!')
    }
}

module.exports = {getWinner}