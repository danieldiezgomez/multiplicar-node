
//Destructuracion
const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar');

const argv = require('./config/yargs').argv;

/*const argv =  require('yargs')
             .command('listar','Imprimir en consola la tabla de multiplicar',{
                 base: {
                    demand: true,
                    alias: 'b'
                 },
                 limite:{
                     alias: 'l',
                     default: 10
                 }
             }) 
             .command('crear','Crea un archivo con la tabla de multiplicar',{
                base: {
                   demand: true,
                   alias: 'b'
                },
                limite:{
                    alias: 'l',
                    default: 10
                }
            }) 
             .help()
             .argv;*/
//const multiplicar = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base,argv.limite)
        .then(data => console.log(`La lista es: \n ${data}`))
        .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
        .then(archivo => console.log(`Archivo creado: ${archivo}`))
        .catch(err => console.log(err));
        break;
    default:
        console.log('no se encontro comando');
}

//console.log(argv);

//let base = 'abc';
//node app --base=6
//console.log(process.argv);

//let argv2 = process.argv;
//console.log(argv.base);
//console.log(argv2);

//let parametro = argv[2];
//let base = parametro.split('=')[1];

/*crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err));*/
