const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const exphbs = require('express-handlebars');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Configuración del motor de plantillas Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Configuración de los recursos estáticos
app.use(express.static('public'));

// Rutas
const viewsRouter = require('./routes/views');
app.use('/', viewsRouter);

// Configuración de WebSockets
io.on('connection', (socket) => {
    console.log('Cliente conectado');
    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
