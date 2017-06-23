import React, { Component } from 'react';
import './style.css';
import ChatBox from '../../components/ChatBox';
import ChatInput from '../../components/ChatInput';
import ChatButton from '../../components/ChatButton';

class Chat extends Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {user: 'owner', 'message': 'Hello'},
        {user: 'jarvis', 'message': 'Hi,,,,,'}
      ],
      input: ''
    };

    this._handleInput = this._handleInput.bind(this);
    this._handleEnter = this._handleEnter.bind(this);
    this._handleChatButton = this._handleChatButton.bind(this);
  }

  _handleInput(e) {
    e.persist();
    this.setState(Object.assign({}, this.state, {input: e.target.value}));
  };

  _handleEnter(e) {
    if (e.key === 'Enter') {
      this._handleChatButton(e);
    }
  }

  _handleChatButton(e) {
    let input = this.state.input;
    this.setState( {
      messages: this.state.messages.concat({user: 'owner', message: input}),
      input: ''
    });

    let self = this;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://www.hakiboy.com/send', true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function () {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.response);
        self.setState(Object.assign({}, {
          messages: self.state.messages.concat({user: 'jarvis', message: response.message}),
          input: ''
        }));
      }
    };
    xhr.send(JSON.stringify({
      text: input
    }));
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <ChatBox ref="chatbox" messages={this.state.messages}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ChatInput input={this.state.input} _handleInput={this._handleInput} _handleEnter={this._handleEnter}/>
          </div>
        </div>
      </div>
    );
  };
}

export default Chat;
