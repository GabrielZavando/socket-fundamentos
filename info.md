## Socket

npm i socket.io

Para trabajar con socket se necesita hacer ciertas configuraciones tanto en backend como en frontend

Socket no trabaja directamente con el servidor que trae express, utiliza un servidor que trae node, sin embargo express también genera su propio servidor en base al que trae node.

Entonces podemos usar express, ejecutarlo en una variable app que tendrá todas las configuraciones que hagamos a express y luego pasar esa variable como parametro cuando creemos nuestro servidor con el modulo de node http

EJ:

const app = express()
const server = http.createServer(app)

## Comprobar todo correcto en Backend

Si la configuración inicial está bien hecha, nosotro podriamos ver el código de socket io en la direccion:

ej: http://localhost:3000/socket.io/socket.io.js

Allí se encuentra el código que se usará desde el frontend para poder trabajar con socket, pudiendo incorporarlo con algo tan simple como:
``
<script src="socket.io/socket.io.js"></script>
``

## Configuracion socket.io en Frontend

Lo primero que debemos hacer es utilizar la librería de socket.io que tenemos en la url anteriormente señalada

``
<script src="socket.io/socket.io.js"></script>
``

Luego necesitamos declarar:

var socket = io();

// Se dispara el evento connect cuando está abierta esta url en una pestaña de un navegador y en backend también está corriendo nuestro servidor
socket.on('connect', function(){
  console.log('Conectado al servidor')
})

## Detectar deconexiones de usuario o desconexiones del servidor

disconnect: Es el evento que se dispara en el frontend cuando perdemos conexión con el servidor

## Emitir a todos los usuarios

Si un cliente o usuario emite un mensaje, se establece una conexión uno a uno entre el cliente y el servidor

