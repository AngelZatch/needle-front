import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import HomeScreen from './screens/Home';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import ChannelScreen from './screens/Channel';
import TopBar from './components/Topbar';
import PrivateRoute from './routes/PrivateRoute';
import LoginScreen from './screens/Login';
import { CssBaseline } from '@material-ui/core';
import { AuthProvider } from './context/auth';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
            <Redirect to="/" />
          </Switch>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
