import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './style.css';

class ChatInput extends Component {

  componentDidMount () {
    ReactDOM.findDOMNode(this.refs.focusInput).focus();
  }

  render() {

    const {_handleInput, _handleEnter} = this.props;

    return <input ref="focusInput" className="form-control" placeholder="พิมพ์ข้อความ..." type="text" value={this.props.input} onChange={_handleInput} onKeyPress={_handleEnter} />
  };
}

export default ChatInput;
