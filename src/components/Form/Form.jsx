import React from 'react';
import * as yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';
import { FormField, Input, Label, ErrorMessageStyle } from './Form.styled';
import Button from '../Button';
import { useAddContactMutation, useGetContactsQuery } from 'redux/phonebookAPI';
import toast from 'react-hot-toast';

const nameRegEx = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegEx, 'The name must contain only characters')
    .required(),
  phone: yup.string().length(10, 'Must be 7 digits ').required(),
});

export const AppForm = () => {
  const [addContact, { isSuccess }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const checkUniqueName = newName => {
    const normalyzeName = newName.toLocaleLowerCase();
    return contacts.find(
      ({ name }) => name.toLocaleLowerCase() === normalyzeName
    );
  };

  const phoneFormatting = number => {
    const array = [...number];
    for (let i = 3; i < array.length - 1; i += 4) {
      array.splice(i, 0, '-');
    }
    return array.join('');
  };

  const handleSubmit = (values, { resetForm }) => {
    const { name, phone } = values;
    const isUniqueName = checkUniqueName(name);

    if (isUniqueName) {
      toast.error(`Name ${name} is already in contacts`);
      return;
    }

    const formatedPhone = phoneFormatting(phone, contacts);
    addContact({ name, phone: formatedPhone });

    if (isSuccess) {
      toast.success(`Contact ${name} was added to your phonebook!`);
    }
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', phone: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormField>
            <Label htmlFor="name">Contact Name</Label>
            <Input name="name" type="text" placeholder=" " />
            <ErrorMessage
              name="name"
              render={msg => <ErrorMessageStyle>{msg}</ErrorMessageStyle>}
            />
          </FormField>

          <FormField>
            <Label htmlFor="phone">Contact Number</Label>
            <Input name="phone" type="tel" placeholder=" " />
            <ErrorMessage
              name="phone"
              render={msg => <ErrorMessageStyle>{msg}</ErrorMessageStyle>}
            />
          </FormField>

          <Button type={'submit'} title={'Add Contact'} />
        </Form>
      </Formik>
    </div>
  );
};

export default AppForm;
