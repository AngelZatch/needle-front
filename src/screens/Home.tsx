import { Typography } from '@material-ui/core';
import React from 'react';
import ChannelItem from '../components/ChannelItem';
import TopBar from '../components/Topbar';
import { Channel } from '../models/channel.model';

const HomeScreen: React.FC = () => {
    console.log('HELLO YOU ARE HOME');

    const channels: Array<Channel> = [
        {
            id: 1,
            title: "Hey"
        },
        {
            id: 2,
            title: "Hey 2"
        }
    ]
    return (
        <>
        <TopBar />
            <div>
                <Typography variant="h5">
                    Vos Communautés
                </Typography>

                {channels.map((channel) => <ChannelItem channel={channel} />)}

                <Typography variant="h5">
                    Recommandé pour vous
                </Typography>
            </div>
        </>
    )
}

export default HomeScreen;