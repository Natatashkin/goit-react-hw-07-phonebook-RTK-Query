import React from 'react';
import PropTypes from 'prop-types';
import { IconButtonStyle } from './IconBtutton.styled';

const IconButton = ({
  type,
  background = null,
  color = null,
  onClick = () => null,
  children = null,
  ...allyProps
}) => {
  return (
    <IconButtonStyle
      background={background}
      color={color}
      type={type}
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </IconButtonStyle>
  );
};

IconButton.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  'aria-label': PropTypes.string.isRequired,
};
export default IconButton;
