const {getTable} = require('./getTable')
const prompt = require('prompt-sync')({sigint: true})


const getRequest = (moves) => {
    let request = ''
    while (true) {
        console.log(
            'Available moves: \n' +
            moves.map((el, i) => `${i + 1} - ${el} `).join('\n') +
            `\n0 - exit \n? - help`
        )
        request = prompt('Please enter your choice: ')
        if (request === '?') getTable(moves)
        if (+request <= moves.length && +request > 0) break
        if (+request === 0) break
    }
    return request
}

module.exports = {getRequest}