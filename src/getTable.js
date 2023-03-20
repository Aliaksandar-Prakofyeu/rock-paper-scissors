require('console.table')


const getTable = (moves) => {
    let result = []
    let a = []
    let b = moves.length / 2

    for (let i = 0; i < moves.length; i++) {
        a[0] = 'Draw'
        i > 0 && i < b ? a[i] = 'Lose' : a[i] = 'Win'
    }

    for (let i = 0; i < moves.length; i++) {
        a.unshift(moves[i])
        result.push([...a])
        a.shift()
        a.unshift(a.pop())
    }
    console.table([`user ↓ | computer →`, ...moves], result)
}

module.exports = {getTable}