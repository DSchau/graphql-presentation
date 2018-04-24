import React from 'react';
import { Heading, Fill, Image, Layout, Link } from 'spectacle';
import styled from 'react-emotion';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';
import WebsiteIcon from 'react-icons/lib/md/web';

import preloader from 'spectacle/lib/utils/preloader';

import graphqlLogo from './assets/logo.svg';

import { SPIN } from '../../style';

const images = {
  intro: require('./assets/network-optimized.jpeg'),
  me: require('./assets/me-optimized.png')
};

preloader(images);

const GraphqlLogo = styled(Image)`
  max-width: 100px !important;
  max-height: 100px !important;

  animation: ${SPIN} 20s linear infinite;
`;

export const Intro = () =>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh'
    }}
  >
    <Layout>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        }}
      >
        <GraphqlLogo src={graphqlLogo} />
      </div>
      <Fill
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 40,
          paddingRight: 20
        }}
      >
        <Heading size={1} caps textFont="Bitter">
          GraphQL:
        </Heading>
      </Fill>
      <Fill>
        <Heading size={4} textColor="quartenary" textAlign="left">
          The Good Parts
        </Heading>
      </Fill>
    </Layout>
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
  </div>;

Intro.Props = {
  bgImage: images.intro,
  bgDarken: 0.7,
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

export const RestKiller = () => (
  <Heading size={2} caps fit>Is it a REST killer?</Heading>
);

export const No = () => (
  <React.Fragment>
    <Heading size={1} caps fit textColor="primary">No</Heading>
    <Heading size={6}>&hellip; and chill</Heading>
  </React.Fragment>
);

No.Props = {
  bgColor: 'secondary'
};
