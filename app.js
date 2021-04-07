const argv = require('./config/yargs')
const{ crearArchivo } = require('./helpers/multiplicar')


console.clear();

console.log( 'Base: yargs', argv.base );



 crearArchivo( argv.b, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
