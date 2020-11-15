import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';
import { transition } from '../../../globalStyles/Mixins';
import { device } from '../../../globalStyles/Breakpoints';

export const StyledLink = styled.a`
  position: relative;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.font};
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.accent} 0%,
    ${({ theme }) => theme.accent} 100%
  );
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: ${pxToRem(4)} ${pxToRem(4)};
  ${transition('all', '200ms', 'ease-in-out', '0s')};
  ${transition('all', '200ms', 'ease-in-out', '0s')};
  font-size: ${pxToRem(14)};
  padding: ${pxToRem(5)};
  margin: 0 ${pxToRem(10)};
  text-transform: capitalize;

  @media ${device.medium} {
    font-size: ${pxToRem(18)};
  }

  @media ${device.large} {
    font-size: ${pxToRem(20)};
  }

  &:hover {
    color: ${({ theme }) => theme.background};
    background-size: ${pxToRem(4)} ${pxToRem(50)};
  }
`;
