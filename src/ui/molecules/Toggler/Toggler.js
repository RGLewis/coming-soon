// Package Imports
import React from 'react';
import PropTypes from 'prop-types';

// Component Imports
import { TogglerContainer } from './Toggler.styles';

// Style Imports
import {
  Label,
  Input,
  TogglerSwitch,
} from '../../atoms/TogglerElements/TogglerElements';

const Toggler = ({ onChange, isChecked, label }) => (
  <TogglerContainer>
    <Label for={label}>
      <Input onChange={onChange} isChecked={isChecked} id={label} />
      <TogglerSwitch isChecked={isChecked} />
    </Label>
  </TogglerContainer>
);

export default Toggler;

Toggler.propTypes = {
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};
