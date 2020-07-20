
// Importamos la variable io
const {io} = require('../server')
// Para capturar las conecciones que se establecen desde el frontend
io.on('connection', (client) =>{
  // client nos trae toda la información de la computador y de la coneccion que se establecio
  console.log('Usuario conectado')

  // Emitir mensaje desde el servidor al cliente
  client.emit('nombreCualquiera', {
    usuario: 'Administrador',
    mensaje: 'Bienvenido a esta aplicación'
  })

  // Para capturar la desconexión de un cliente
  client.on('disconnect', () => {
    console.log('Usuario desconectado')
  })

  // Para escuchar los emit del cliente
  // escuchamos el evento enviarMensaje, creado en el frontend y recibimos, como parametro en la funcion callback el objeto que nos emite.
  // Recibimos también el tercer parametro enviado que es un callback y basta con ejecutarlo para que en el lado del cliente se sepa que ha funcionado correctamente
  client.on('enviarMensaje', (data, callback) => {
    console.log(data)

    // Ejecuta la funcion enviarMensaje y responde sólo al cliente que envia un mensaje
    // client.emit('enviarMensaje', data)

    // Ejecuta la funcion enviarMensaje y emite el mensaje a todos los clientes conectados menos al que emitió el mensaje
    client.broadcast.emit('enviarMensaje', data)
    // callback()
  })

  // fin del connection
})