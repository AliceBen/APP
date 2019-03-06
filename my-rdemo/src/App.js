import React, { Component } from 'react';
import { connect } from 'react-redux'
import{ Provider } from 'react-router-dom'
import './App.css';
import Home from './component/home'

class App extends Component {
  render() {
    return (
      <Provider>
          <div>首页
            <Home />
          </div>
     </Provider>
    );
  }
}

export default connect()(App);
