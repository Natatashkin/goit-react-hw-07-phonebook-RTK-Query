import styled from 'styled-components';

const FormButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(4)}`};
  border: 2px solid transparent;
  border-radius: ${({ theme: { options } }) => options.borderRadius};
  background-color: ${({ theme: { colors } }) => colors.blue};
  color: ${({ theme: { colors } }) => colors.white};

  &:hover,
  &:focus {
    background-color: ${({ theme: { colors } }) => colors.lightgrey};
    color: ${({ theme: { colors } }) => colors.blue};
    border: 2px solid ${({ theme: { colors } }) => colors.blue};
    outline-color: ${({ theme: { colors } }) => colors.blue};
  }

  &:active {
    background-color: ${({ theme: { colors } }) => colors.lightgrey};
    outline-color: ${({ theme: { colors } }) => colors.blue};
    box-shadow: ${({ theme: { options } }) => options.shadowInner};
  }
`;

export default FormButton;
