import { useState } from 'react';
import PropTypes from 'prop-types';
import { AppSyles, AppTitle } from './App.styled';
import { Toaster } from 'react-hot-toast';
import AppForm from './Form';
import Section from './Section';
import Filter from './Filter';
import ContactList from './ContactList';
import { useGetContactsQuery } from 'redux/phonebookAPI';

const App = ({ title }) => {
  const [filterValue, setFilterValue] = useState('');
  const { data: contacts, isLoading } = useGetContactsQuery();

  const handleChangeFilter = e => {
    setFilterValue(e.target.value);
  };

  const resetFilter = () => {
    setFilterValue('');
  };

  function showfilteredContacts() {
    const normalizedFilter = filterValue.toLocaleLowerCase();
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const filteredContacts = showfilteredContacts();

  return (
    <AppSyles>
      <AppTitle>{title}</AppTitle>
      <Section>
        <AppForm />
      </Section>

      <Section title="Contacts">
        {isLoading ? (
          <h4>Loading...</h4>
        ) : filteredContacts?.length > 0 ? (
          <>
            <Filter
              value={filterValue}
              onChange={handleChangeFilter}
              onClick={resetFilter}
            />
            <ContactList contacts={filteredContacts} />
          </>
        ) : (
          <p>You haven't any contacts yet!</p>
        )}
      </Section>
      <Toaster />
    </AppSyles>
  );
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
