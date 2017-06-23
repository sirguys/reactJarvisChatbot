import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class ChatBox extends Component {

  componentDidMount() {
    var len = this.props.messages.length - 1;
    const node = ReactDOM.findDOMNode(this.refs['idx_' + len]);
    if (node) {
      node.scrollIntoView();
    }
  }

  componentDidUpdate() {
    var len = this.props.messages.length - 1;
    const node = ReactDOM.findDOMNode(this.refs['idx_' + len]);
    if (node) {
      node.scrollIntoView();
    }
  }

  render() {
    return <div className='chat-box bg'>
      { this.props.messages.map((message, key) => (
        <p className={'col-xs-offet-8 ' + (message.user === 'owner' ? 'text-right' : 'text-left')} key={key} ref={'idx_' + key}>
          <span className={'messagesBg ' + (message.user === 'owner' ? 'messagesBg' : 'messagesBg2')}>{message.message}</span>
        </p>
      )) }
    </div>
  };
}

export default ChatBox;
