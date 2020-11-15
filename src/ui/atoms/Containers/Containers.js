// Package imports
import React from 'react';
import PropTypes from 'prop-types';

// Hook imports
import { UseResponsive } from '../../../hooks/useResponsive';

// Style imports
import {
  StyledOuterContainer,
  StyledFullHeightSectionContainer,
  StyledFullHeightFlexContainer,
} from './Containers.styles';

export const OuterContainer = ({ children }) => (
  <StyledOuterContainer>{children}</StyledOuterContainer>
);

OuterContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export const FullHeightSectionContainer = ({ children }) => {
  const { windowHeight } = UseResponsive();

  return (
    <StyledFullHeightSectionContainer minHeight={windowHeight}>
      {children}
    </StyledFullHeightSectionContainer>
  );
};

FullHeightSectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export const FullHeightFlexContainer = ({ children, justify, align }) => {
  const { windowHeight } = UseResponsive();

  return (
    <StyledFullHeightFlexContainer
      minHeight={windowHeight}
      justify={justify}
      align={align}
    >
      {children}
    </StyledFullHeightFlexContainer>
  );
};

FullHeightFlexContainer.propTypes = {
  children: PropTypes.node.isRequired,
  justify: PropTypes.oneOf(['center', 'space-between']),
  align: PropTypes.oneOf(['center', 'flex-start']),
};

FullHeightFlexContainer.defaultProps = {
  justify: 'center',
  align: 'center',
};
