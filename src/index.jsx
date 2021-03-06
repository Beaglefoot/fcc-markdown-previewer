import React from 'react';
import ReactDOM from 'react-dom';

import InputArea from './components/InputArea';
import OutputArea from './components/OutputArea';
import text from './defaultText.txt';

require('./css/style.scss');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text };
  }

  render() {
    return (
      <div>
        <InputArea
          text={this.state.text}
          onNewText={text => this.setState({ text })}
        />
        <OutputArea textToRender={this.state.text} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
