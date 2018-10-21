import React, { Fragment } from 'react';
import styled from 'styled-components';

const SlideWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export default ({ children }) => (
  <Fragment>
    <SlideWrapper>{children}</SlideWrapper>
  </Fragment>
);
