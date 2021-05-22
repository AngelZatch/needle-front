import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import ChannelItem from '../components/ChannelItem';
import SideMenu from '../components/SideMenu';
import TopBar from '../components/Topbar';
import { Channel } from '../models/channel.model';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
  },
}));

const HomeScreen: React.FC = () => {
  console.log('HELLO YOU ARE HOME');
  const classes = useStyles();

  const channels: Array<Channel> = [
    {
      id: 1,
      title: 'Hey',
    },
    {
      id: 2,
      title: 'Hey 2',
    },
  ];
  return (
    <>
      <Box paddingX="10px" paddingY="15px">
        <Typography variant="h4">Vos Communautés</Typography>

        <Box display="flex" flexWrap="wrap">
          {channels.map((channel) => (
            <React.Fragment key={channel.id}>
              <Link to={`channel/${channel.id}`}>
                <ChannelItem channel={channel} />
              </Link>
            </React.Fragment>
          ))}
        </Box>

        <Typography variant="h4">Recommandé pour vous</Typography>
      </Box>
    </>
  );
};

export default HomeScreen;
