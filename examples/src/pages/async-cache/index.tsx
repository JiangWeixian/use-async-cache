import React from 'react';

import { Element } from './components/Element';

export default () => {
  return Array(10)
    .fill(0)
    .map(() => <Element />);
};
