import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import InputArea from '../../src/components/InputArea';

const { renderIntoDocument } = TestUtils;

describe('InputArea', () => {
  it('exists in document', () => {
    const component = renderIntoDocument(<InputArea />);

    expect(component).to.exist;
  });
});
