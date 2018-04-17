import React from 'react';
import { Heading, Fill, Layout, Link } from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

const images = {
  intro: require('./assets/network-optimized.jpeg')
};

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
        <Heading size={4} textColor="primary" textAlign="left">
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
  bgDarken: 0.4,
  notes: `
My name is Dustin Schau, and I'm going to hopefully teach you all about CSS in JS today. We'll start with some drawbacks of CSS that led to the creation of these libraries, then discuss advantages of CSS in JS over CSS, shift to discussion of some common patterns, utilities, and libraries to instrument CSS in JS, and then finally end with an illustration of the drawbacks of CSS in JS. Let's get started!
  `
};