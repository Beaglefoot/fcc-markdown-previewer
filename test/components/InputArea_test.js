import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import InputArea from '../../src/components/InputArea';

const {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  Simulate
} = TestUtils;

describe('InputArea', () => {
  it('exists in document', () => {
    const component = renderIntoDocument(<InputArea onNewText={new Function()} />);

    expect(component).to.exist;
  });

  it('should change state on input', () => {
    const component = renderIntoDocument(<InputArea onNewText={new Function()} />);
    const textArea = findRenderedDOMComponentWithTag(component, 'textarea');
    const newText = 'changed text';

    Simulate.change(textArea, { target: { value: newText }});

    expect(component.state.text).to.equal(newText);
  });
});
