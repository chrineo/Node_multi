const argv = require('yargs')
    .command('crear', 'imprime en consola la tabla de multiplicar', {
        base: { demand: true, alias: 'b' }
    })
    .command('listar', 'imprime en consola la tabla de multiplicar con un limite', {
        base: { demand: true, alias: 'b' },
        limite: { demand: true, alias: 'l' }
    })
    .help()
    .argv;
module.exports = { argv };