const {Help} = require('./Help')
const prompt = require('prompt-sync')({sigint: true})

class Input {
    constructor(moves) {
        this.moves = moves
    }

    getRequest() {
        const help = new Help(this.moves)
        let request = ''
        while (true) {
            console.log(
                'Available moves: \n' +
                this.moves.map((el, i) => `${i + 1} - ${el} `).join('\n') +
                `\n0 - exit \n? - help`
            )
            request = prompt('Please enter your choice: ')
            if (request === '?') help.generateTable()
            if (request <= this.moves.length && request > 0) break
            if (+request === 0) break
        }
        return request
    }

}

module.exports = {Input}