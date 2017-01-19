import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import OutputArea from '../../src/components/OutputArea';
import marked from 'marked';

const { renderIntoDocument, findRenderedDOMComponentWithTag } = TestUtils;

describe('OutputArea', () => {
  it('exists in document', () => {
    const component = renderIntoDocument(
      <OutputArea textToRender="" />
    );

    expect(component).to.exist;
  });

  it('should contain markdown processed the same way as marked()', () => {
    const newTextToRender = '**here is bold string**';
    const component = renderIntoDocument(
      <OutputArea textToRender={newTextToRender} />
    );
    const markdownString = marked(newTextToRender);
    const outputArea = findRenderedDOMComponentWithTag(component, 'div');

    expect(outputArea.innerHTML).to.equal(markdownString);
  });
});
