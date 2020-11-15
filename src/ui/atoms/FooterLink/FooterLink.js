// Package imports
import React from 'react';
import PropTypes from 'prop-types';

// Style Imports
import { StyledLink } from './FooterLink.styles';

const FooterLink = ({ to, prompt }) => (
  <StyledLink href={to} target="_blank" rel="noopener noreferrer">
    {prompt}
  </StyledLink>
);

export default FooterLink;

FooterLink.propTypes = {
  to: PropTypes.string.isRequired,
  prompt: PropTypes.string.isRequired,
};
