require('console.table')

class Help {
    constructor(moves) {
        this.moves = moves
    }

    generateTable() {
        let result = []
        let a = []
        let b = this.moves.length / 2

        for (let i = 0; i < this.moves.length; i++) {
            a[0] = 'Draw'
            i > 0 && i > b ? a[i] = 'Lose' : a[i] = 'Win'
        }

        for (let i = 0; i < this.moves.length; i++) {
            a.unshift(this.moves[i])
            result.push([...a])
            a.shift()
            a.unshift(a.pop())
        }
        console.table([`user ↓ | computer →`, ...this.moves], result)
    }
}


module.exports = {Help}