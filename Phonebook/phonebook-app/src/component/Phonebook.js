import React, { useState, useEffect } from 'react';

function Phonebook() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('phonebook')) || [];
    setContacts(storedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('phonebook', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = () => {
    if (name && phoneNumber) {
      const newContact = { name, phoneNumber };
      setContacts([...contacts, newContact]);
      setName('');
      setPhoneNumber('');
    }
  };

  const deleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button onClick={addContact}>Add Contact</button>
      </div>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.phoneNumber}
            <button onClick={() => deleteContact(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Phonebook;
