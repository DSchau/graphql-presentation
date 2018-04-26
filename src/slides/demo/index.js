import React from 'react';
import { Heading, Image, Link } from 'spectacle';

import { Emoji } from '../../components';

export const DemoHeading = () => (
  <React.Fragment>
    <Heading size={2} caps fit>
      Demo
    </Heading>
    <Emoji ariaLabel="Sweat smile">😅</Emoji>
  </React.Fragment>
);

export const Demo = () => (
  <Link target="_blank" href="https://speaker-signup.netlify.com">
    <Image src={require('./images/speaker-signup.png')} />
  </Link>
);
