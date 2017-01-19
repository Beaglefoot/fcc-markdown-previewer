import React from 'react';

export default class InputArea extends React.Component {
  render() {
    return (
      <textarea
        rows="20"
        value={this.props.text}
        onChange={event => (
          this.props.onNewText(event.target.value)
        )}
      />
    );
  }
}
