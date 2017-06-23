import React, { Component } from 'react';
import './App.css';
import Chat from './containers/Chat';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <h3 className="header-chat">Jarvis Chat</h3>
        <Chat/>
      </div>
    );
  }
}

export default App;
