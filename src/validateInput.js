const validateInput = (moves) => {
    if (moves.length < 3) {
        console.log('The number of elements must be greater than 3')
        return false
    } else if (moves.length % 2 === 0) {
        console.log('The number of elements must be odd')
        return false
    } else if (moves.length !== new Set(moves).size) {
        console.log('The elements must be unique')
        return false
    }
    return true
}

module.exports = {validateInput}