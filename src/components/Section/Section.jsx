import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionStyle = styled.section`
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h2`
  margin-top: ${({ theme: { spacing } }) => spacing(3)};
  margin-bottom: ${({ theme: { spacing } }) => spacing(3)};
`;

const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      <Title>{title}</Title>
      {children}
    </SectionStyle>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
