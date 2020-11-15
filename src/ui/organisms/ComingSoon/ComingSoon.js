// Package Imports
import React, { useState, useEffect, useContext } from 'react';
import { useSpring } from 'react-spring';

// Context Imports
import { Context } from '../../../context/context';

// Component Imports
import HeadingFirst from '../../atoms/Typography/HeadingFirst';
import Trail from './Trail';
import Toggler from '../../molecules/Toggler/Toggler';
import Footer from '../../molecules/Footer/Footer';
import {
  OuterContainer,
  FullHeightSectionContainer,
  FullHeightFlexContainer,
} from '../../atoms/Containers/Containers';

// Style Imports
import { FooterContainer } from './ComingSoon.styles';

const ComingSoon = () => {
  // Context
  const context = useContext(Context);

  // States
  const [animate, setAnimate] = useState(false);
  const [content, setContent] = useState(['Rafaela', 'Lewis']);
  const [showFooter, setShowFooter] = useState(false);

  // on page load, set animate after delay, then proceed to toggle animations
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 300);

    toggleAnimate(3000, ['Front-End', 'Developer'], false);
    toggleAnimate(6000, ['Coming', 'Soon'], true);
  }, []);

  const toggleAnimate = (time, content, setFooter) => {
    setTimeout(() => {
      setAnimate(false);
      setNextContent(content, setFooter);
    }, time);
  };

  const setNextContent = (content, setFooter) => {
    setTimeout(() => {
      setContent(content);
    }, 200);

    setTimeout(() => {
      setAnimate(true);

      if (setFooter) {
        setShowFooter(true);
      }
    }, 200);
  };

  // Footer animation
  const animateFooter = useSpring({
    to: {
      opacity: showFooter ? 1 : 0,
    },
  });

  return (
    <FullHeightSectionContainer isSplash>
      <OuterContainer>
        <FullHeightFlexContainer>
          <Toggler
            onChange={() => {
              context.toggleLightMode();
            }}
            label={'colorMode'}
            isChecked={!context.isLightMode}
            lightToggleLabel="light mode"
            darkToggleLabel="dark mode"
          />
          {content.map((item) => (
            <Trail animate={animate}>
              <>
                <HeadingFirst>{item}</HeadingFirst>
              </>
            </Trail>
          ))}
          <FooterContainer style={animateFooter}>
            <Footer />
          </FooterContainer>
        </FullHeightFlexContainer>
      </OuterContainer>
    </FullHeightSectionContainer>
  );
};

export default ComingSoon;
