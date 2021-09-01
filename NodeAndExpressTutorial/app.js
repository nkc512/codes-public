const names = require('./4-names')
const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}
sayHi('susan')
sayHi('check')

console.log(names.charlie)
sayHi(names.sam)
console.log('Hello check change in nodemon');