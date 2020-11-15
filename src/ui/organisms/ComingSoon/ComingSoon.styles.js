import { animated } from 'react-spring';
import styled from 'styled-components';
import { pxToRem } from '../../../globalStyles/Utils';
import { device } from '../../../globalStyles/Breakpoints';

export const TrailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TrailTextContainer = styled(animated.div)`
  width: 100%;
  height: ${pxToRem(40)};
  will-change: transform, opacity;
  overflow: hidden;

  @media ${device.medium} {
    height: ${pxToRem(100)};
  }

  @media ${device.large} {
    height: ${pxToRem(110)};
  }
`;

export const ItemContainer = styled(animated.div)`
  overflow: hidden;
`;

export const FooterContainer = styled(animated.div)`
  width: 100%;
  height: 100%;
`;
