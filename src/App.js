import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import AccountContainer from './account/AccountContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" /> 
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <div className="container" style={{marginTop: '1em'}}>
              <div className="row" style={{fontSize: '24px'}}>
                <div className="col-2"><Link to='/todo'>Todo</Link></div>
                <div className="col-2"><Link to='/acc'>Acc</Link></div>
              </div>
            </div>
          </div>
        )} />
        <Route path='/todo' component={TodoList} />
        <Route path='/acc' component={AccountContainer} />
      </div>
    )
  }
}

export default App;
