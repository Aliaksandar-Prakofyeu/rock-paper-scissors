
const getWinner = (moves, request, compMove) => {
    const win = +request - 1 - compMove > 0 && +request - 1 - compMove < moves.length / 2
    const lose = compMove - +request + 1 > 0 && compMove - +request + 1 > moves.length / 2

    if (+request - 1 === compMove) {
        console.log('Draw!')
    } else if (win || lose) {
        console.log('You Win!')
    } else {
        console.log('You Lose!')
    }
}

module.exports = {getWinner}