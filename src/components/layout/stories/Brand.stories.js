import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Brand from '../Brand';

const stories = storiesOf('Layout', module);

stories.addDecorator(withKnobs);

stories.add('Brand', () => <Brand ></Brand>)
