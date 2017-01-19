import React from 'react';
import marked from 'marked';

marked.setOptions({ sanitize: true });

export default class OutputArea extends React.Component {
  createMarkdown(markdownText) {
    return {
      __html: marked(markdownText)
    };
  }

  render() {
    return (
      <div
        dangerouslySetInnerHTML={this.createMarkdown(this.props.textToRender)}
      />
    );
  }
}
