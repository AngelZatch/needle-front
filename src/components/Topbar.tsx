import { AppBar, Toolbar, Typography } from '@material-ui/core';

const TopBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Needle</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
