import React, { Component } from 'react';

import './App.css';
import Header from "./components/header/Header";
import {Route, Switch} from "react-router-dom";
import Home from "./containers/home/Home";
import Catalog from "./containers/catalog/Catalog";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Switch>
              <Route exact path='/' component={ Home } />
              <Route exact path='/catalog' component={ Catalog }/>
          </Switch>
      </div>
    );
  }
}

export default App;
