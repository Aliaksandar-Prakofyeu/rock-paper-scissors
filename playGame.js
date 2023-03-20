const {createHmac, createECDH, randomInt} = require('crypto')
const {getRequest} = require('./src/getRequest')
const {getWinner} = require('./src/getWinner')
const {validateInput} = require('./src/validateInput')

const ecdh = createECDH('secp256k1')
const secretKey = ecdh.generateKeys('hex')
const moves = process.argv.slice(2)

const playGame = () => {
    if (validateInput(moves)) {
        const numberCompMove = randomInt(0, moves.length)
        const hmac = createHmac('SHA3-256', secretKey).update(moves[numberCompMove]).digest('hex')
        console.log(`HMAC: ${hmac}`)
        const request = getRequest(moves)
        if (+request === 0) return
        console.log(`Your move: ${moves[request - 1]}`)
        console.log(`Computer move: ${moves[numberCompMove]}`)
        getWinner(moves, request, numberCompMove)
        console.log(`HMAC: ${secretKey}`)
    }
}

playGame()


