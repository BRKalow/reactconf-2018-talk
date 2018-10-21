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

const Footer = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 30px 50px;
`;

export default ({ children }) => (
  <Fragment>
    <SlideWrapper>{children}</SlideWrapper>
    <Footer>
      <span>⚛ React Conf 2018</span>
      <span>@brkalow</span>
    </Footer>
  </Fragment>
);
