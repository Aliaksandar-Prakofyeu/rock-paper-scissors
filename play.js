const {createHmac, createECDH, randomInt} = require('crypto')
const {getRequest} = require('./src/getRequest')
const {getWinner} = require('./src/getWinner')
const {validateInput} = require('./src/validateInput')

const ecdh = createECDH('secp256k1')
const secretKey = ecdh.generateKeys('hex')
const moves = process.argv.slice(2)

const play = () => {
    if (validateInput(moves)) {
        const compMove = randomInt(0, moves.length)
        const hmac = createHmac('SHA3-256', secretKey).update(moves[compMove]).digest('hex')
        console.log(`HMAC: ${hmac}`)
        const request = getRequest(moves)
        if (+request === 0) return
        console.log(`Your move: ${moves[request - 1]}`)
        console.log(`Computer move: ${moves[compMove]}`)
        getWinner(moves, request, compMove)
        console.log(`HMAC: ${secretKey}`)
    }
}

play()


