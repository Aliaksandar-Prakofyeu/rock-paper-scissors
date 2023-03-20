class Validation {
    constructor(input) {
        this.input = input
    }

    validateInput() {
        if (this.input.length < 3) {
            console.log('The number of elements must be greater than 3. Example: node game.js rock paper scissors')
            return false
        } else if (this.input.length % 2 === 0) {
            console.log('The number of elements must be odd. Example: node game.js rock paper scissors')
            return false
        } else if (this.input.length !== new Set(this.input).size) {
            console.log('The elements must be unique. Example: node game.js rock paper scissors')
            return false
        }
        return true
    }
}


module.exports = {Validation}