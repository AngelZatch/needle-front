import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const TopBar: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start">
          <MenuIcon />
        </IconButton>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography variant="h1">Needle</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
