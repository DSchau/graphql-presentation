import React from 'react';
import { CodePane, Heading, Image, Fill, Layout, S as Span } from 'spectacle';
import styled from 'react-emotion';
import Player from 'react-player';
import { css } from 'emotion';

import { Emoji, GraphqlPlayground } from '../../components';
import { APPEAR } from '../../style';

import databaseImage from './images/database.svg';
import timeline from './video/twitter.mp4';

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

export const AQueryLanguage = () => (
  <Heading size={2} caps>
    A query language
  </Heading>
);

export const Example = () => (
  <GraphqlPlayground
    query={require('./code/query').default}
    data={require('./code/result').default}
    variables={require('./code/variables').default}
  />
);

export const Types = () => (
  <CodePane
    lang="graphql"
    source={`
type Project {
  name: String
  tagline: String
  contributors: [User]
}
  `.trim()}
    textSize={32}
  />
);

export const TheCUD = () => (
  <Heading
    size={1}
    caps
    fit
    style={{ fontWeight: 'normal' }}
    textColor="primary"
  >
    {[['C', true], ['R', false], ['U', true], ['D', true]].map(
      ([letter, bold]) => (
        <Span type={bold ? 'underline' : 'normal'} key={letter}>
          {letter}
        </Span>
      )
    )}
  </Heading>
);

TheCUD.Props = {
  bgColor: 'secondary'
};

export const Mutations = () => (
  <Heading size={2} fit caps>
    Mutations
  </Heading>
);

Mutations.Props = {
  bgImage: require('./images/x-men-optimized.jpeg'),
  bgDarken: 0.5
};

export const SampleMutation = () => (
  <GraphqlPlayground
    query={`
mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
  createReview(episode: $ep, review: $review) {
    stars
    commentary
  }
}
  `.trim()}
    data={JSON.stringify(
      {
        data: {
          createReview: {
            stars: 5,
            commentary: 'This is a great movie!'
          }
        }
      },
      null,
      2
    )}
    variables={JSON.stringify(
      {
        ep: 'JEDI',
        review: {
          stars: 5,
          commentary: 'This is a great movie!'
        }
      },
      null,
      2
    )}
  />
);

export const BackendAgnostic = () => (
  <Heading size={2} caps fit textColor="primary">
    Backend agnostic
  </Heading>
);

BackendAgnostic.Props = {
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

export const TwitterTimeline = () => (
  <Player url={timeline} playing loop width="100%" height="100%" />
);

export const TweetExample = () => <Image src={require('./images/tweet.png')} />;

export const RepliesExample = () => (
  <Image src={require('./images/timeline.png')} />
);

export const MyReaction = () => (
  <Emoji ariaLabel="What the..." fontSize={256}>
    😶
  </Emoji>
);

export const RESTCalls = () => (
  <div>
    {[
      'https://twitter.com/api/tweets',
      'https://twitter.com/tweets/api/1234',
      'https://twitter.com/api/tweets/1234/conversation'
    ].map(url => (
      <CodePane
        lang="markup"
        source={url}
        textSize={32}
        style={{ margin: '2rem 0' }}
      />
    ))}
  </div>
);

export const Waterfall = () => (
  <Heading size={2} fit caps>
    Waterfall
  </Heading>
);

Waterfall.Props = {
  bgImage: require('./images/waterfall-optimized.jpeg'),
  bgDarken: 0.5
};

export const GraphqlExample = () => (
  <GraphqlPlayground
    textSize={16}
    query={`
query TimelineForUser($user: String!) {
  timeline(user: $user) {
    edges {
      node {
        id
        body
        likes
        retweets
        conversation(first: 20) {
          endIndex
          edges {
            node {
              id
              body
              likes
              retweets
            }
          }
        }
      }
    }
  }
}
    `.trim()}
    variables={JSON.stringify({ user: 'dschau' }, null, 2)}
    data={JSON.stringify(
      {
        data: {
          timeline: {
            edges: [
              {
                node: {
                  id: 1,
                  body: 'something something',
                  likes: 100,
                  retweets: 50,
                  conversation: {
                    edges: [
                      {
                        node: {
                          id: 1234,
                          body: 'You tell them YADDA YADDA',
                          likes: 1,
                          retweets: 1
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      },
      null,
      2
    )}
  />
);
