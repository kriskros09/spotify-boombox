import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader';
// import 'assets/scss/components/app.scss';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme/Style';
// import UserInfo from 'components/UserInfo';

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import DrawerNav from './DrawerNav';
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';

import PrivateRoute from '../Utils/PrivateRoute';
import PublicRoute from '../Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from '../Utils/Common';

// import SearchBar from 'components/SearchBar';

const App = () => {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios
      .get(`http://localhost:4000/verifyToken?token=${token}`)
      .then((response) => {
        console.log(response);
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      })
      .catch((error) => {
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>;
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Login /> */}
        <DrawerNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default hot(module)(App);
