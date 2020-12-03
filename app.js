const { creaArchivo, ListarTabla } = require('./Multiplica/multiplica');
const argv = require('./config/yargs').argv;


let comando = argv._[0];
console.log(comando);
switch (comando) {
    case 'listar':
        ListarTabla(argv.base, argv.limite).then(archivo => console.log(`Archivo Creado:${archivo}`)).catch(e => console.log(e));
        break;
    case 'crear':
        creaArchivo(argv.base).then(archivo => console.log(`Archivo Creado:${archivo}`)).catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
        break;
}