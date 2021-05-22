/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import ChatInput from '../components/ChatInput';
import { Message } from '../models/message.model';

const ChannelScreen: React.FC = () => {
  const { channelId } = useParams<{ channelId: string }>();

  const socket: Socket = io('localhost:8000', {
    transports: ['websocket'],
    reconnection: true,
    reconnectionDelay: 500,
    reconnectionAttempts: 10,
  });

  const [messages, setMessages] = useState<Array<Message>>([]);

  useEffect(() => {
    socket
      .on('connect', () => {
        socket.emit('auth', { channel: channelId, user: 1 });
      })
      .on('reconnect_attempt', () => {
        socket.emit('auth', { channel: channelId, user: 1 });
      })
      .on('confirm', () => {
        console.log('YOU ARE CONNECTED HOLY SHIT');
      })
      .on('message', (message: Message) => {
        console.log('MESSAGE RECIEVED: ', message);
        setMessages((messages) => [...messages, message]);
      });

    return () => {
      socket && socket.disconnect();
    };
  }, [channelId]);

  const sendMessage = (message: string) => {
    socket.emit('message', {
      channel: channelId,
      message: new Message(1, message),
    });
  };

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div>{message.content}</div>
        ))}
      </div>
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChannelScreen;
