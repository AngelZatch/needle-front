import { useEffect } from "react";
import { io, Socket } from "socket.io-client";

const ChannelScreen: React.FC = () => {
    console.log('CHANNEL');

    const socket: Socket = io("localhost:8001", {
        transports: ['websocket'],
        reconnection: true,
        reconnectionDelay: 500,
        reconnectionAttempts: 10
    });

    useEffect(() => {
        socket
            .on('connect', () => {
                socket.emit("auth", { channel: 'CHANNELID', user: 1 });
            })
            .on('reconnect_attempt', () => {
                socket.emit("auth", { channel: 'CHANNELID', user: 1 });
            })
            .on('confirm', () => {
                console.log('YOU ARE CONNECTED HOLY SHIT')
            })
            .on('message', (message) => {
                console.log('MESSAGE RECIEVED: ', message)
            })
        
        return (() => {
            socket && socket.disconnect();
        });
    })

    return (
        <div>
            LET US CHAT
        </div>
    )
}

export default ChannelScreen;