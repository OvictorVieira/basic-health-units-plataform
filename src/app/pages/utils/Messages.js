import React, { Component } from "react";
import { Alert } from "react-bs-notifier";

class Messages extends Component {

  render() {

    return (
      <>
        <Alert type={ this.props.type }>{ this.props.message }</Alert>
      </>
    );
  }
}

export default Messages;