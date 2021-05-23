import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/Home';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import ChannelScreen from './screens/Channel';
import TopBar from './components/Topbar';
import PrivateRoute from './routes/PrivateRoute';
import LoginScreen from './screens/Login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <TopBar />
        <Switch>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <PrivateRoute path="/channel/:channelId">
            <ChannelScreen />
          </PrivateRoute>
          <PrivateRoute exact path="/">
            <HomeScreen />
          </PrivateRoute>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
