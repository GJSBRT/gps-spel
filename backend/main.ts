import express from 'express';
import config from './config.json';
import { createServer } from 'http';
import { Server } from "socket.io";
import joinGame from './handlers/joinGame';

const app = express();
const server = createServer(app);
const socketio = new Server(server, {
    cors: {
        origin: "*"
    }
});

socketio.on('connection', (socket) => {
    socket.emit('druif', { message: 'a new client connected' })

    socket.on('joinGame', joinGame);
})

server.listen(config.port, () => {
    console.log(`Server listening at http://localhost:${config.port}`);
});

export {
    socketio
};
