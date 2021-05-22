import { Card, CardMedia, CardContent, makeStyles } from '@material-ui/core';
import { Channel } from '../models/channel.model';
import { theme } from '../theme';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 271,
    width: 186,
    borderRadius: 25,
  },
  media: {
    height: 200,
    width: 186,
  },
  contents: {
    backgroundColor: 'black',
  },
}));

const ChannelItem: React.FC<{ channel: Channel }> = ({ channel }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Mario_Series_Logo.svg/1200px-Mario_Series_Logo.svg.png"
        title={channel.title}
      ></CardMedia>
      <CardContent className={classes.contents}>{channel.title}</CardContent>
    </Card>
  );
};

export default ChannelItem;
