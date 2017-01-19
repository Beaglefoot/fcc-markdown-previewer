import React from 'react';
import text from '../defaultText.txt';

export default class InputArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text };
  }

  componentDidMount() {
    this.props.onNewText(this.state.text);
  }

  onInputChange(text) {
    this.setState({ text });
    this.props.onNewText(text);
  }

  render() {
    return (
      <textarea
        className="form-control"
        rows="5"
        value={this.state.text}
        onChange={event => this.onInputChange(event.target.value)}
      />
    );
  }
}
