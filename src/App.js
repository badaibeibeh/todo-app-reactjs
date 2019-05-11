import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import Public from './components/Publict';
import User from './components/user';



class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>

            {/* Everyone can access this page */}
            <Route exact path="/" component={ Public }/>

            {/* User must log in to access this page */}
            <Route path="/user" component={ User }/>

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
