import { TextField } from "@material-ui/core";
import React, { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { io, Socket } from "socket.io-client";
import { Message } from "../models/message.model";

const ChannelScreen: React.FC = () => {
    const { channelId } = useParams<{ channelId: string }>();
    console.log('CHANNEL: ', channelId);

    const [messages, setMessages] = useState<Array<Message>>([]);

    const [messageInput, setMessageInput] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessageInput(event.target.value)
    }

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
                setMessages((messages) => [...messages, message]);
            })
        
        return (() => {
            socket && socket.disconnect();
        });
    })

    const sendMessage = (event: FormEvent) => {
        event.preventDefault();
        const message = new Message(1, messageInput);
        console.log(message);
        socket.emit('chat', message);
        setMessageInput('');
    }

    return (
        <div>
            <div>
                {messages.map((message) => (
                    <div>
                        { message.content }
                    </div>
                ))}
            </div>
            <form noValidate autoComplete="off" onSubmit={sendMessage}>
                <TextField
                    id="chat"
                    label="Type to chat"
                    variant="outlined"
                    fullWidth
                    value={messageInput}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default ChannelScreen;