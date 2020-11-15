// Package IMports
import React from 'react';
import PropTypes from 'prop-types';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

// Style imports
import {
  StyledLabel,
  StyledInput,
  StyledTogglerSwitch,
} from './TogglerElements.styles';

export const Label = ({ children, label }) => (
  <StyledLabel htmlFor={label}>{children}</StyledLabel>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export const Input = ({ onChange, isChecked, label }) => (
  <StyledInput
    type="checkbox"
    onChange={onChange}
    checked={isChecked}
    id={label}
  />
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export const TogglerSwitch = ({ isChecked }) => (
  <StyledTogglerSwitch
    icon={isChecked ? faSun : faMoon}
    aria-label={isChecked ? 'Enter light mode' : 'Enter dark mode'}
  />
);

TogglerSwitch.propTypes = {
  isChecked: PropTypes.bool.isRequired,
};
