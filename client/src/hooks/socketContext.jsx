import React, { useState } from 'react';
import socketio from "socket.io-client";
import { SOCKET_URL } from "../config";

export const SocketContext = React.createContext();

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);

    function initialise() {
        let socketInstance = socketio.connect(SOCKET_URL);
        setSocket(socketInstance);
    }

    return (
        <SocketContext.Provider value={{ initialise, socket }} >
            {children}
        </SocketContext.Provider>
    );

};

