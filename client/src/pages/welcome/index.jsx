import React, {useContext, useEffect, useState} from 'react'
import { SocketContext } from '../../hooks/socketContext';



function Welcome() {
    const { socket } = useContext(SocketContext);
    const [counter, setCounter] = useState(0);

    function onSuccesfullConnection(data) {
        setCounter(data);
    }

    useEffect(() => {
        socket.emit('client-hello');
        socket.on('counter',onSuccesfullConnection);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => {
            socket.off('counter');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <p>Current counter is {counter} </p>
        </div>
    );
};

export default Welcome;