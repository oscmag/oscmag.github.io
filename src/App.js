import React, {Component} from 'react';
import {MainProvider} from './context/MainContext';
import {Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sudoku from './components/Sudoku/Sudoku';
import Rubiks from './components/Rubiks/Rubiks';
import Chess from './components/Chess/Chess';

import './App.css';
import history from './history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <MainProvider>
            <Navbar />
            <div className="app-body">
              <Route exact path="/" component={Sudoku}/>
              <Route exact path="/Sudoku" component={Sudoku}/>
              <Route exact path="/Rubiks" component={Rubiks}/>
              <Route exact path="/Chess" component={Chess}/>
              {/* <Route exact path="/workouts" component={Workouts} />
              <Route exact path="/statistics" component={Statistics} />
              <Route exact path="/about" component={About} /> */}
            </div>
          </MainProvider>
        </div>
      </Router>
    );
  }
}

export default App;
