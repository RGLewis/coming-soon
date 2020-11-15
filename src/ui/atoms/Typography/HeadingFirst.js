// Package imports
import React from 'react';
import PropTypes from 'prop-types';

// Style imports
import { StyledHeadingFirst } from './Typography.styles';

export const HeadingFirst = ({ children }) => (
  <StyledHeadingFirst>{children}</StyledHeadingFirst>
);

HeadingFirst.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeadingFirst;
