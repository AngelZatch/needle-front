import { Box, Container, makeStyles, Typography } from '@material-ui/core';
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
      title: 'Super Mario 64',
    },
    {
      id: 2,
      title: 'Mario 3D Games',
    },
    {
      id: 3,
      title: 'Zelda Stuff',
    },
  ];
  return (
    <>
      <Box paddingX="10px" paddingY="15px">
        <Typography variant="h4">Communautés où vous participez</Typography>

        <Box display="flex" flexWrap="wrap">
          {channels.map((channel) => (
            <Box key={channel.id} padding="5px">
              <Link to={`channel/${channel.id}`}>
                <ChannelItem channel={channel} />
              </Link>
            </Box>
          ))}
        </Box>

        <Typography variant="h4">Recommandé pour vous</Typography>

        <Box display="flex" flexWrap="wrap">
          {channels.map((channel) => (
            <Box key={channel.id} padding="5px">
              <Link to={`channel/${channel.id}`}>
                <ChannelItem channel={channel} />
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default HomeScreen;
