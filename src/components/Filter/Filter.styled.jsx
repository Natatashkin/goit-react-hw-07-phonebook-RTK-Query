import styled from 'styled-components';

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${({ theme: { spacing } }) => spacing(1)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(1)};
`;

const Input = styled.input`
  padding: ${({ theme: { spacing } }) => spacing(1)};
  &:focus,
  &:hover {
    outline-color: ${({ theme: { colors } }) => colors.blue};
  }
`;

export { FilterWrapper, Input };
