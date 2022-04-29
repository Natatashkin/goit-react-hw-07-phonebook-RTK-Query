import React from 'react';
import PropTypes from 'prop-types';
import { List } from './ContactList.styles';
import { ContactItem } from 'components/contactItem/contactItem';

const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(contact => {
        const { id, name, phone } = contact;
        return <ContactItem key={id} id={id} name={name} phone={phone} />;
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;

// const handleDeleteContact = async itemId => {
//   const item = contacts.find(({ id }) => id === itemId);

//   Promise.resolve(
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== itemId)
//     )
//   ).then(toast.success(`Contact ${item.name} was deleted!`));
// };
