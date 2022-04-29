import styled from 'styled-components';

const List = styled.ul`
  margin-top: ${({ theme: { spacing } }) => spacing(3)};
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: ${({ theme: { spacing } }) => spacing(3)};
  }

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.lightblue};
  }
`;

const Name = styled.span`
  flex-grow: 1;
  text-transform: capitalize;
`;

const Number = styled.span`
  margin-right: ${({ theme: { spacing } }) => spacing(5)}; ;
`;

export { List, Item, Name, Number };
