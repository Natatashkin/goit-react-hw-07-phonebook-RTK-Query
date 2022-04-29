import styled from 'styled-components';

const IconButtonStyle = styled.button`
  margin-left: ${({ theme: { spacing } }) => spacing(1)};
  border: none;
  border-radius: ${({ theme: { options } }) => options.borderRadius};
  outline: none;
  padding: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ background, theme: { colors } }) =>
    background ? colors[background] : 'transparent'};
  color: ${({ background, color, theme: { colors } }) =>
    background ? colors.white : colors[color]};

  & svg {
    display: block;
  }

  &:hover {
    background-color: ${({ background, color, theme: { colors } }) =>
      background || color ? colors.lightgrey : 'transparent'};
    outline: 1px solid
      ${({ background, theme: { colors } }) =>
        background ? colors[background] : 'none'};
    color: ${({ background, color, theme: { colors } }) =>
      background ? colors[background] : colors[color]};
  }
`;

export { IconButtonStyle };
