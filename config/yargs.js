const opts = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true,
        demand: false
    }
}


const argv = require('yargs')
    .command('crear', 'Crea una tarea para hacer', opts)
    .command('actualizar', 'Actualiza una tarea', opts)
    .command('borrar', 'Borra una tarea almacenada', opts)
    .help()
    .argv;

module.exports = {
    argv
}