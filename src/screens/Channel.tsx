import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { io, Socket } from "socket.io-client";

const ChannelScreen: React.FC = () => {
    const { channelId } = useParams<{ channelId: string }>();
    console.log('CHANNEL: ', channelId);

    const socket: Socket = io("localhost:8001", {
        transports: ['websocket'],
        reconnection: true,
        reconnectionDelay: 500,
        reconnectionAttempts: 10
    });

    useEffect(() => {
        socket
            .on('connect', () => {
                socket.emit("auth", { channel: `channel-${channelId}`, user: 1 });
            })
            .on('reconnect_attempt', () => {
                socket.emit("auth", { channel: `channel-${channelId}`, user: 1 });
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