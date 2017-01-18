import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import OutputArea from '../../src/components/OutputArea';

const { renderIntoDocument } = TestUtils;

describe('OutputArea', () => {
  it('exists in document', () => {
    const component = renderIntoDocument(<OutputArea />);

    expect(component).to.exist;
  });
});
