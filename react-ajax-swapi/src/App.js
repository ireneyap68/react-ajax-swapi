import React, {useState, useEffect} from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import StarWars from './StarWars'
import Starship from './Starship'

function App() {
  

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={StarWars} />
        <Route path='/starship' render={({location}) => 
              <Starship location={location}/> }/>

      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
