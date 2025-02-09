import React from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { nanoid } from '@reduxjs/toolkit';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const submitForm = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isOnTheContactList = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isOnTheContactList) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ name, number }));
      form.reset();
    }
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();
  return (
    <>
      <form onSubmit={submitForm} className={css.form}>
        <label htmlFor={nameInputId} />
        <Input
          placeholder="Name"
          id={nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor={numberInputId} />
        <Input
          placeholder="Number"
          id={numberInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button variant="outlined" type="submit" sx={{ width: '10rem' }}>
          Add contact
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
