const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const port = process.env.PORT || 4000;

// Create server instance
const app = express();
const server = http.createServer(app);
app.use(cors());

// Creates socket instance from server
const io = socketIO(server, {
    cors: true,
    origins: ["*"]
});

// Socket handlings
io.on('connection', socket => {
    // Just for initial connection testing of persistance socket.
    console.log('Connection made with connection id : ', socket.id);
    socket.on('client-hello', () => {
        console.log('Hello from ', socket.id);
        let counter = 0;
        setInterval(() => {
            socket.emit('counter', counter);
            counter++;
        }, 2000);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(port, () => {
    console.log('Server is listening at ', port);
})