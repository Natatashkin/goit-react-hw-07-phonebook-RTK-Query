import React from 'react';
import PropTypes from 'prop-types';
import FormButton from './Button.styled';

const Button = ({
  type,
  title = '',
  onClick = () => null,
  children = null,
}) => {
  return (
    <FormButton type={type} onClick={onClick}>
      {title}
      {children}
    </FormButton>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Button;
