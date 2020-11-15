import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';
import { device } from '../../../globalStyles/Breakpoints';

export const StyledHeadingFirst = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights.black};
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: ${pxToRem(40)};
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: ${pxToRem(2)};

  /* FOR SPRING */
  position: relative;
  width: 100%;
  will-change: transform, opacity;
  overflow: hidden;

  @media ${device.medium} {
    font-size: ${pxToRem(100)};
  }
`;
