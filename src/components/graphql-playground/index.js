import React, { Component } from 'react';
import styled from 'react-emotion';
import { CodePane, Fill, Fit, Layout } from 'spectacle';
import 'prismjs/components/prism-graphql';
import 'prismjs/components/prism-json';
import PlayArrow from 'react-icons/lib/md/play-arrow';

const Container = styled('div')`
  display: flex;
  align-items: center;
`;

const Code = styled(CodePane)`
  height: 100%;
  border: 1px solid white;
  pre {
    height: 100%;
  }
`;

Code.defaultProps = {
  textSize: 20
};

const Button = styled('button')`
  outline: none;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 48px;
  background-color: white;
  margin: 1.25rem;

  :active {
    background-color: black;
    svg {
      color: white;
    }
  }
`;

const PlayIcon = styled(PlayArrow)`
  height: 32px;
  width: 32px;
  color: black;
`;

const TitleContainer = styled('div')`
  padding: 4px 8px;
`;

const Title = styled('h1')`
  color: white;
  font-size: 14px;
  text-align: left;
  font-family: sans-serif;
  text-transform: uppercase;
`;

export class GraphqlPlayground extends Component {
  state = {
    showData: false
  };

  showData = () => {
    this.setState({
      showData: true
    });
  };

  render() {
    const { data, query, variables } = this.props;
    if (!data || !query) {
      return null;
    }

    return (
      <Container>
        <Fill>
          <Code lang="graphql" source={query} />
          {variables && (
            <React.Fragment>
              <TitleContainer>
                <Title>Query variables</Title>
              </TitleContainer>
              <Code lang="json" source={variables} />
            </React.Fragment>
          )}
        </Fill>
        <Fit>
          <Button onClick={this.showData}>
            <PlayIcon />
          </Button>
        </Fit>
        <Fill style={{ alignSelf: 'stretch', minHeight: '100%' }}>
          <Code lang="json" source={this.state.showData ? data : ``} />
        </Fill>
      </Container>
    );
  }
}
