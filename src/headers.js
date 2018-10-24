import { components } from 'mdx-deck';
import styled from 'styled-components';

export const BlockHeader = styled(components.h1)`
  border-radius: 5px;
  padding: 0 10px 0 5px;
  background-color: ${props => props.background};
  color: ${props => (props.invert ? '#011627' : '#e6e9ef')};
`;

export const BorderedText = styled.span`
  border: 3px solid slategray;
  border-radius: 5px;
  padding: 3px;
`;
