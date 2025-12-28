import { io } from "socket.io-client";

let socket;

export const initSocket = (userId) => {
    if(socket) return socket;
    socket= io(import.meta.env.VITE_Base_URL, {
        query: { userId},
        reconnectionAttempts: 3,
        timeout: 10000,
        transports: ["websocket"]
    })
    return socket;
}

export const disconnectSocket = () => {
    if(socket) {
        socket.disconnect();
        socket = null;
    }
}