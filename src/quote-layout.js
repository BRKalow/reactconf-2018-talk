import React from 'react';
import styled from 'styled-components';
import Layout from './layout';

const SlideWrapper = styled.div`
  & p {
    text-align: right;
  }
`;

export default ({ children }) => (
  <Layout>
    <SlideWrapper>{children}</SlideWrapper>
  </Layout>
);
