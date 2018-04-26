import React from 'react';
import styled from 'react-emotion';

const Container = styled('span')`
  font-size: 128px;
`;

export function Emoji({ ariaLabel, children, className }) {
  return (
    <Container aria-label={ariaLabel} role="img" className={className}>
      {children}
    </Container>
  );
}
