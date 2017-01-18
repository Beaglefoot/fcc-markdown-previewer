import React from 'react';

export default class InputArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Dolor elit totam in consectetur voluptatum recusandae Reprehenderit excepturi quidem vitae ea nulla qui at. Delectus dolores sed obcaecati totam repellat quas Unde reiciendis nostrum similique alias amet Voluptatem laboriosam'
    };
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
