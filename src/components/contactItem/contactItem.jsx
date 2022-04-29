import { Item, Name, Number } from 'components/ContactList/ContactList.styles';
import IconButton from '../IconButton';
import { FaTrashAlt } from 'react-icons/fa';
import { useDeleteContactMutation } from 'redux/phonebookAPI';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

export const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading, isSuccess }] = useDeleteContactMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Contact ${name} was removed from your phonebook!`);
    }
  }, [isSuccess, name]);

  return (
    <Item key={id}>
      <Name>{name}</Name>
      {isLoading ? <Number>Deleting...</Number> : <Number>{phone}</Number>}
      <IconButton
        type="button"
        background="blue"
        aria-label="Button to delete contact"
        onClick={() => deleteContact(id)}
      >
        <FaTrashAlt />
      </IconButton>
    </Item>
  );
};
