import styled from 'styled-components';
import { Field } from 'formik';

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  height: 75px;
  margin-right: 5px;
`;

const Input = styled(Field)`
  width: 80%;
  padding: ${({ theme }) => theme.spacing(1)};
`;

const Label = styled.label`
  /* position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%); */
`;

const ErrorMessageStyle = styled.div`
  color: ${({ theme: { colors } }) => colors.red};
`;

export { FormField, Input, Label, ErrorMessageStyle };
