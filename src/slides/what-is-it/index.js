import React from 'react';
import { Heading, Fill, Layout } from 'spectacle';
import styled from 'react-emotion';
import { css } from 'emotion';

import { APPEAR } from '../../style';

const LibrariesContainer = styled('div')`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  > * {
    animation: ${APPEAR} 500ms ease-in-out;
    animation-fill-mode: both;
    margin: 2rem 0 !important;
  }

  ${new Array(12).fill(undefined).map(
    (_, index) => css`
      > *:nth-child(${index + 1}) {
        animation-delay: ${(index + 1) * 500}ms;
      }`
  )};
`;
export const WhatIsIt = () => (
  <Heading size={2} caps textColor="primary">
    What it is
  </Heading>
);

WhatIsIt.Props = {
  bgColor: 'secondary'
};

export const LanguageAgnostic = () => (
  <Heading size={2} caps fit textColor="primary">
    Language agnostic
  </Heading>
);

LanguageAgnostic.Props = {
  bgColor: 'secondary'
};

export const ServerLibraries = class extends React.Component {
  render() {
    return (
      <LibrariesContainer>
        {[
          '.NET',
          'Clojure',
          'Elixir',
          'Erlang',
          'Go',
          'Groovy',
          'Java',
          'Node',
          'PHP',
          'Python',
          'Ruby',
          'Scala'
        ]
          .sort()
          .map((lang, index) => (
            <Heading size={4} key={lang} textColor="secondary">
              {lang}
            </Heading>
          ))}
      </LibrariesContainer>
    );
  }
};
