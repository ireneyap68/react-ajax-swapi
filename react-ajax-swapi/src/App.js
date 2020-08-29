import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import StarWars from './StarWars'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={StarWars} />

      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
