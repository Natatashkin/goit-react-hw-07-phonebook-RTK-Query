import styled from 'styled-components';

const AppSyles = styled.div`
  max-width: 600px;
  margin: ${({ theme }) => theme.spacing(5)} auto;
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 10px;
  background-color: ${({ theme: { colors } }) => colors.white};
`;

const AppTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;

export { AppSyles, AppTitle };
