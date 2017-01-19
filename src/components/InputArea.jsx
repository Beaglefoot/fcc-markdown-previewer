import React from 'react';

export default class InputArea extends React.Component {
  render() {
    return (
      <textarea
        className="form-control"
        rows="5"
        value={this.props.text}
        onChange={event => (
          this.props.onNewText(event.target.value)
        )}
      />
    );
  }
}
