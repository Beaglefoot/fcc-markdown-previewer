import React from 'react';
import ReactDOM from 'react-dom';

import InputArea from './components/InputArea';
import OutputArea from './components/OutputArea';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: null };
  }

  render() {
    return (
      <div>
        <InputArea onNewText={text => this.setState({ text })} />
        <OutputArea textToRender={this.state.text} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
