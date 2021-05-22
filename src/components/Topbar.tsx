import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const TopBar: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography variant="h1">Needle</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
