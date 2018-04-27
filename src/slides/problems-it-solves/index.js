import React from 'react';
import { CodePane, Heading, Image } from 'spectacle';
import Player from 'react-player';

import { Emoji, GraphqlPlayground } from '../../components';

export const ProblemsItSolvesIntro = () => (
  <Heading size={2} caps fit textColor="primary">
    Problems it solves
  </Heading>
);

ProblemsItSolvesIntro.Props = {
  bgColor: 'secondary'
};

export const TwitterTimeline = () => (
  <Player
    url={require('./video/twitter.mp4')}
    playing
    loop
    width="100%"
    height="100%"
  />
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
      'https://twitter.com/api/tweets/1234',
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
    variables={{ user: 'dschau' }}
    data={{
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
    }}
  />
);
