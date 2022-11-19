import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import ForgotAccount from './components/ForgotAccount';
import DiscoverSection from './components/DiscorverSection'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/signup' component={SignupPage} exact />
        <Route path='/forgot' component={ForgotAccount} exact />
        <Route path='/discover' component={DiscoverSection} exact />
      </Switch>
    </Router>
  );
}

export default App;
