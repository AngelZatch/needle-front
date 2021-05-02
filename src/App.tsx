import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import HomeScreen from './screens/Home';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import ChannelScreen from './screens/Channel';
import TopBar from './components/Topbar';

function App() {
    return (
      <ThemeProvider theme={theme}>
            <TopBar />
            <Router>
                <Switch>
                    <Route path="/channel/:channelId">
                        <ChannelScreen />
                </Route>
                <Route exact path="/">
                    <HomeScreen />
                </Route>
            </Switch>
        </Router>
    </ThemeProvider>
  );
}

export default App;
