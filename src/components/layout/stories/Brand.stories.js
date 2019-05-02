import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Brand from '../Brand';

storiesOf('Layout', module)
  .add('Brand', () => <Brand ></Brand>)
