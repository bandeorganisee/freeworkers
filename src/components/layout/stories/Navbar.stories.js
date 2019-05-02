import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Navbar from '../Navbar';

const stories = storiesOf('Layout', module);

stories.add('Navbar', () => <Navbar></Navbar>);