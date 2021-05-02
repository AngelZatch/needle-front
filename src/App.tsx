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

function App() {
    return (
      <ThemeProvider theme={theme}>
      <Router>
          <Switch>
              <Route path="/">
                  <HomeScreen />
              </Route>
          </Switch>
            </Router>
            </ThemeProvider>
  );
}

export default App;
