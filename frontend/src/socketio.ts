import { io } from 'socket.io-client';

const socketio = io(import.meta.env.VITE_API_URL);

export default socketio;