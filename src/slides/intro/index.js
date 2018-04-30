import React from 'react';
import { Heading, Fill, Image, Layout, Link, S as Span } from 'spectacle';
import styled from 'react-emotion';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';
import WebsiteIcon from 'react-icons/lib/md/web';

import preloader from 'spectacle/lib/utils/preloader';

import { GraphqlLogo } from '../../components';

const images = {
  intro: require('./assets/cover-optimized.jpeg'),
  me: require('./assets/me-optimized.png')
};

preloader(images);

export const Intro = () => (
  <div>
    <Heading
      size={1}
      textFont="Bitter"
      style={{
        display: 'inline-block',
        width: 'auto',
        backgroundColor: '#E10098',
        color: 'white',
        padding: '1rem 2rem',
        paddingBottom: '2.25rem'
      }}
    >
      GraphQL
    </Heading>
    <Heading
      size={3}
      textSize={18}
      textColor="white"
      style={{ fontWeight: 'normal' }}
    >
      by <Span type="bold">Dustin Schau</Span>
    </Heading>
    <GraphqlLogo />
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
      }}
    >
      <Link
        href="https://graphql.dustinschau.com"
        textColor="rgba(255, 255, 255, 0.7)"
        target="_blank"
        rel="noopener"
      >
        https://graphql.dustinschau.com
      </Link>
    </div>
  </div>
);

Intro.Props = {
  bgImage: images.intro,
  bgDarken: 0.5,
  notes: `
My name is Dustin Schau, and I'm going to hopefully teach you all about CSS in JS today. We'll start with some drawbacks of CSS that led to the creation of these libraries, then discuss advantages of CSS in JS over CSS, shift to discussion of some common patterns, utilities, and libraries to instrument CSS in JS, and then finally end with an illustration of the drawbacks of CSS in JS. Let's get started!
  `
};

export const AboutMe = () => (
  <Layout>
    <Fill
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        paddingRight: 20
      }}
    >
      <Heading size={2} caps fit>
        Who's this guy?
      </Heading>
      <Heading size={6} style={{ display: 'flex' }}>
        <TwitterIcon
          color="white"
          style={{ display: 'inline-block', marginRight: 8 }}
        />
        <Link href="https://twitter.com/schaudustin" textColor="white">
          schaudustin
        </Link>
      </Heading>
      <Heading size={6} style={{ display: 'flex' }}>
        <GithubIcon
          color="white"
          style={{ display: 'inline-block', marginRight: 8 }}
        />
        <Link href="https://github.com/dschau" textColor="white">
          dschau
        </Link>
      </Heading>
      <Heading size={6} style={{ display: 'flex' }}>
        <WebsiteIcon
          color="white"
          style={{ display: 'inline-block', marginRight: 8 }}
        />
        <Link href="https://dustinschau.com" textColor="white">
          website
        </Link>
      </Heading>
    </Fill>
    <Fill
      style={{
        maxWidth: '40%'
      }}
    >
      <Image src={images.me} style={{ borderRadius: 400 }} />
    </Fill>
  </Layout>
);

AboutMe.Props = {
  notes: `
- Graduated with a CS degree from Creighton in 2013
- Frontend developer specialist, specializing in all things JavaScript
- Do a fair bit of backend and utility development in NodeJS, e.g. backend services, build tooling, etc.
  `
};

export const FacebookDrivenDevelopment = () => (
  <Heading size={1} caps style={{ fontWeight: 400 }} textColor="white">
    <Span type="underline" style={{ fontWeight: 700 }}>
      F
    </Span>acebook{' '}
    <Span type="underline" style={{ fontWeight: 700 }}>
      D
    </Span>riven{' '}
    <Span type="underline" style={{ fontWeight: 700 }}>
      D
    </Span>evelopment
  </Heading>
);

FacebookDrivenDevelopment.Props = {
  bgImage: 'https://media.giphy.com/media/ijEiXYEo9DBxm/giphy.gif',
  bgDarken: 0.6
};

export const RestKiller = () => (
  <Heading size={2} caps fit>
    Is it a REST killer?
  </Heading>
);

export const No = () => (
  <React.Fragment>
    <Heading size={1} caps fit textColor="primary">
      No
    </Heading>
    <Heading size={6}>&hellip; and chill</Heading>
  </React.Fragment>
);

No.Props = {
  bgColor: 'secondary'
};

export const ButMaybe = () => (
  <Heading size={2} caps fit>
    But <Span type="italic">maybe</Span>
  </Heading>
);

ButMaybe.Props = {
  bgImage: 'https://media.giphy.com/media/DfdbTJZx6Yjra/giphy.gif',
  bgDarken: '0.5'
};
