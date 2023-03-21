const {createHmac, createECDH, randomInt} = require('crypto')
const {Input} = require('./src/Input')
const {Result} = require('./src/Result')
const {Validation} = require('./src/Validation')

class Game {
    constructor() {
        this.ecdh = createECDH('secp256k1')
        this.secretKey = this.ecdh.generateKeys('hex')
        this.secretKeyHmac = createHmac('SHA3-256', this.secretKey).digest('hex')
        this.moves = process.argv.slice(2)
    }

    play() {
        const validation = new Validation(this.moves)
        if (validation.validateInput()) {
            const compMove = randomInt(0, this.moves.length)
            const hmac = createHmac('SHA3-256', this.secretKey).update(this.moves[compMove]).digest('hex')
            console.log(`HMAC: ${hmac}`)
            const input = new Input(this.moves)
            const request = input.getRequest()
            if (+request === 0) return
            console.log(`Your move: ${this.moves[request - 1]}`)
            console.log(`Computer move: ${this.moves[compMove]}`)
            const result = new Result(this.moves, request, compMove)
            result.getResult()
            console.log(`HMAC: ${this.secretKeyHmac}`)
        }
    }
}

const start = new Game()
start.play()


