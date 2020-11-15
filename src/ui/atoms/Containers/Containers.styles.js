import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';
import { device } from '../../../globalStyles/Breakpoints';

export const StyledOuterContainer = styled.div`
  max-width: ${pxToRem(1600)};
  width: 95%;
  margin: 0 auto;

  @media ${device.large} {
    width: 80%;
  }
`;

export const StyledFullHeightSectionContainer = styled.section`
  min-height: ${(props) =>
    props.minHeight === '100vh' ? '100vh' : pxToRem(props.minHeight)};
  width: 100%;
  background: ${({ theme }) => theme.background};
  position: relative; // for dark mode toggler
`;

export const StyledFullHeightFlexContainer = styled.div`
  min-height: ${(props) =>
    props.minHeight === '100vh' ? '100vh' : pxToRem(props.minHeight)};
  padding-bottom: ${pxToRem(20)};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;
