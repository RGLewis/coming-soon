// Package Imports
import React from 'react';

// Component Imports
import FooterLink from '../../atoms/FooterLink/FooterLink';

// Style Imports
import {
  StyledFooter,
  FooterUnorderedList,
  FooterListItem,
} from './Footer.styles';

const Footer = () => {
  const links = [
    {
      prompt: 'get in touch',
      to: 'mailto:rafaela.codes@gmail.com',
    },
    {
      prompt: 'GitHub',
      to: 'https://github.com/RGLewis',
    },
    {
      prompt: 'LinkedIn',
      to: 'https://www.linkedin.com/in/rafaela-lewis/',
    },
  ];

  return (
    <StyledFooter>
      <FooterUnorderedList>
        {links.map((link) => (
          <FooterListItem key={link.prompt}>
            <FooterLink to={link.to} prompt={link.prompt} />
          </FooterListItem>
        ))}
      </FooterUnorderedList>
    </StyledFooter>
  );
};

export default Footer;
