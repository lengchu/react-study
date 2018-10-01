import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={() => (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" /> 
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <div className="container" style={{marginTop: '1em'}}>
                <div className="row" style={{fontSize: '20px'}}>
                  <div className="col-2"><Link to='/todo'>Todo</Link></div>
                </div>
              </div>
            </div>
          )} />
          <Route path='/todo' component={TodoList} />
        </Switch>
      </Router>
    )
  }
}

export default App;
