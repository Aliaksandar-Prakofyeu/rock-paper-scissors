class Result {
    constructor(moves, request, compMove) {
        this.request = request
        this.compMove = compMove
        this.half = moves.length / 2
    }

    getResult() {
        const win = this.request - 1 - this.compMove > 0 && +this.request - 1 - this.compMove > this.half
        const lose = this.compMove - this.request + 1 > 0 && this.compMove - this.request + 1 < this.half

        if (this.request - 1 === this.compMove) {
            console.log('Draw!')
        } else if (win || lose) {
            console.log('You Win!')
        } else {
            console.log('You Lose!')
        }
    }
}

module.exports = {Result}