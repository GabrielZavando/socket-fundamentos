var socket = io();

// Se dispara el evento connect cuando está abierta esta url en una pestaña de un navegador y en backend también está corriendo nuestro servidor
socket.on('connect', function(){
  console.log('Conectado al servidor')
})

// Evento que se dispara cuando perdemos conexión con el servidor

socket.on('disconnect', function(){
  console.log('Perdimos conexión con el servidor')
})

// Emitir información: Recibe un nombre y luego la información que vamos a emitir. Puede ser un string, un boolean o un objeto. Se recomeinda enviar objetos
socket.emit('enviarMensaje', {
  usuario: 'Gabriel',
  mensaje: 'Hola Mundo'
  // Para saber si el mensaje emitido acá fue correctamente enviado al servidor podemos pasar, como tercer parametro, un callback. Además debemos hacer una configuración en el lado del servidor
}, function(){
  console.log('Se disparó el callback')
})

// Escucha informacion
socket.on('enviarMensaje', function(mensaje){
  console.log('Servidor', mensaje)
})