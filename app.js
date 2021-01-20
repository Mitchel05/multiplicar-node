const argv = require('./config/yargs.js').argv

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar.js')

let comando = argv._[0];

switch (comando) {
    case 'Listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo =>console.log(`Archivo creado: ${archivo}`))
            .catch(e=>console.log(e))
        break;

    default:
        console.log('No se reconoce el comando');
        break;
}

// let argv = process.argv;

// console.log(argv.base);
// console.log('limite',argv.limite);
// let parametro = argv[2];
// let base = parametro.split('=')[1];


    

