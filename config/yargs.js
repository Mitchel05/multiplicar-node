

const opts = {
    base:{
        demand: true,
        alias: 'b'
    },
    limite:{
        alias: 'l',
        default: 10
    },
}
const argv = require('yargs')
.command('listar','Imprime en consola la tabla de multiplicar',opts)
.command('crear', 'Genera un archiv con la tabla',opts)
.argv;


module.exports = {
    argv
}