import React, { useState, useRef } from 'react';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
